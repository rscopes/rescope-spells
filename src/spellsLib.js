/*
 * Copyright (c)  2018 Wise Wild Web .
 *
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 * @author : Nathanael Braun
 * @contact : caipilabs@gmail.com
 */
import React from "react";

import is from "is";
import {
    isSpell, spells, Store, Scope, reScope, propsToScope, scopeToProps, Component,
    scopeToState
}         from "react-rescope";

@propsToScope([ 'props' ])
@scopeToProps([ 'props' ])
class RSComp extends Component {
    render() {
        return this.props.children || [];
    }
}

let Lib = {
    @isSpell("stateMap", v => ( is.object(v) || is.string(v) ))
    stateMap( obj, { 0: cfg }, ref ) {
        let use = [], state = {}, actions = {};
        Scope.stateMapToRefList(obj, state, use, actions)
        return class StateMap extends Store {
            static displayName = ref[ 1 ];
            static use         = use;
            static state       = state;
            static actions     = actions;
        }
    },
    @isSpell("scope", v => ( is.object(v) ))
    scope( obj, { 0: cfg }, ref ) {
        return class childScope extends Scope {
            constructor( map, cfg2 ) {
                super({ ...obj, ...map }, { ...cfg, ...cfg2 });
            }
        }
    },
    @isSpell("renderer", v => ( is.fn(v) ))
    renderer( obj, argz, ref ) {
        let use,
            state,
            scope = argz[ 1 ] && argz[ 0 ],
            sm    = argz[ 1 ] || argz[ 0 ];
        //if ( !argz[ 0 ] ) {
        state     = {};
        //argz[ 0 ] = []
        //}
        //else if ( is.array(argz[ 0 ]) ) {
        //    use   = argz[ 0 ];
        //    state = !use.length && {};
        //}
        //else
        //    argz[ 0 ] && Scope.stateMapToRefList(argz[ 0 ], state = {}, use = [],
        // actions = {});
        
        //!use.includes('props') && use.push('props');
        return class RSRenderer extends Store {
            static displayName = ref[ 1 ];
            //static use         = use;
            static state       = state;
            
            constructor( scope, cfg ) {
                super(...arguments);
                this._compScope = new Scope(
                    {},
                    {
                        key        : RSRenderer.displayName,
                        parent     : this.$scope,
                        autoDestroy: true,
                        
                    }
                )
                
                this._compScope.retain("RSRenderer");
                this.__snapshot = cfg.snapshot;
            }
            
            //static actions     = actions;
            serialize( cfg, output ) {
                super.serialize(...arguments)
                this._compScope.serialize(...arguments)
                return output;
            }
            
            //static actions     = actions;
            restore() {
                super.restore(...arguments)
                this._compScope.restore(...arguments)
            }
            
            //static actions     = actions;
            destroy() {
                this._compScope.dispose("RSRenderer");
                super.destroy();
            }
            
            apply( d, s, c ) {
                if ( d ) {
                    //this._comp.setState(c);
                    return d;
                }
                
                @scopeToState(
                    ( comp, props, ctx ) => {
                        let viewScope = new Scope(
                            {
                                [ RSRenderer.displayName ]: Lib.rootRenderer(obj, [ sm ], [ , RSRenderer.displayName ]),
                                ...( scope || {} )
                            },
                            {
                                key        : "comp",
                                parent     : this._compScope,
                                autoDestroy: true,
                                
                                state: { [ RSRenderer.displayName ]: { props } }
                            }
                        )
                        if ( this.__snapshot )
                            viewScope.restore(this.__snapshot);
                        return viewScope;
                    },
                    [ RSRenderer.displayName ])
                class RSCompRenderer extends React.Component {
                    componentWillReceiveProps( props ) {
                        let Comp = this.$stores[ RSRenderer.displayName ];
                        
                        //Comp && Comp.setState({ props });
                    }
                    
                    render() {
                        let Comp = this.state[ RSRenderer.displayName ];
                        return Comp ||
                               <span className={ "__rsLoad" }/>
                    }
                }
                
                return RSCompRenderer;
            }
        }
    },
    
    @isSpell("rootRenderer", v => ( is.fn(v) ))
    rootRenderer( obj, argz, ref ) {
        
        let use,
            state,
            actions;
        if ( !argz[ 0 ] ) {
            state = {};
            //argz[ 0 ] = []
        }
        else if ( is.array(argz[ 0 ]) ) {
            use   = argz[ 0 ];
            state = !use.length && {};
        }
        else
            argz[ 0 ] && Scope.stateMapToRefList(argz[ 0 ], state = {}, use = [], actions = {});
        
        //!use.includes('props') && use.push('props');
        return class RSRenderer extends Store {
            static displayName = ref[ 1 ];
            static use         = use;
            static state       = state || {};
            static actions     = actions;
            
            //static actions     = actions;
            serialize( cfg, output ) {
                super.serialize(...arguments);
                let snap = this.scopeObj.getSnapshotByKeyExt(output, this.$scope._id + '/' + this.name);
                if ( snap.state && snap.state.props )
                    delete snap.state.props;
                delete snap.data;
                return output;
            }
            
            apply( d, s, c ) {
                //if ( d ) {
                //    //this._comp.setState(c);
                //    return d;
                //}
                return obj(s, {
                    $actions: this.$actions,
                    $stores : this.$stores,
                    $scope  : this.$scope,
                    $store  : this
                })
            }
        }
    }
    ,
    @isSpell("store", v => ( is.fn(v) ))
    store( obj, { 0: cfg }, ref ) {
        return Store.bind(null, obj, { ...cfg, apply: ( d, s, c ) => obj(d, s, c) })
    }
}

export default Lib;