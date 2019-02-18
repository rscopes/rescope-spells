/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */

import {Context, Store, scopeToProps} from "rscopes";
import React                          from 'react'
import debounce                       from 'debounce'
import is                             from 'is'


/**
 * base data provider
 *  - centralize record update & dispatch over the app
 */

export default class DataProvider extends Store {
	static actions = {
		data_save( etty, id, record ) {
		
		},
		data_remove( etty, id ) {
		
		}
	};
	
	recordsByEttyId = {};
	updatedRecords  = {};
	
	getRecord( etty, id ) {
		return this.recordsByEttyId[etty] && this.recordsByEttyId[etty][id];
	}
	
	pushRemoteRecord( etty, id, rec ) {
		this.recordsByEttyId[etty]     = this.recordsByEttyId[etty] || [];
		this.recordsByEttyId[etty][id] = rec;
		this.updatedRecords[etty]      = this.recordsByEttyId[etty] || [];
		this.updatedRecords[etty][id]  = rec;
	}
	
	dispatchUpdates = debounce(() => {
		let updates  = this.updatedRecords,
		    watchers = this.watchersByEttyId;
		Object
			.keys(updates)
			.forEach(
				etty => {
					Object
						.keys(updates[etty])
						.forEach(
							id => {
								if ( watchers[etty] && watchers[etty][id] )
									watchers[etty][id]
										.forEach(
											watcher => watcher(updates[etty][id])
										)
							}
						)
				}
			)
		this.updatedRecords = {};
	});
	
	watchersByEttyId = {};
	
	bindRecord( etty, id, watcher ) {
		//if ( is.array(id) )
		//    return id.forEach(id => {
		//        this.bindRecord(etty, id, watcher)
		//    });
		let refs = this.watchersByEttyId;
		
		refs[etty]     = refs[etty] || [];
		refs[etty][id] = refs[etty][id] || [];
		
		refs[etty][id].push(watcher);
		
		// + socket watch record (debounced)
	}
	
	unBindRecord( etty, id, watcher ) {
		//if ( is.array(id) )
		//    return id.forEach(id => this.unBindRecord(etty, id, watcher))
		let refs = this.watchersByEttyId;
		
		refs[etty]     = refs[etty] || [];
		refs[etty][id] = refs[etty][id] || [];
		
		let i = refs[etty][id].indexOf(watcher);
		if ( i != -1 )
			refs[etty][id].splice(i, 1);
		
		
		// - socket watch record if no more watchers
	}
	
	/**
	 * Inject & update any records in stores or components
	 *
	 * ex :
	 * @withRecords(
	 {
         siteId: {
             target: 'siteRecord',
             etty  : 'site'
         }
     }
	 )
	 export default etc...
	 *
	 * @param idKeys
	 * @returns {function(*)}
	 */
	static withRecords( idKeys ) {
		return ( comp ) => {
			if ( comp.prototype instanceof Store ) // inject in stores
				return class recordInjector extends comp {
					shouldApply( changes ) {
						let DataProvider = this.scope.DataProvider;
						if ( !DataProvider )
							throw new Error("No DataProvider found !!");
						
						updateWatchers(this, DataProvider, idKeys, changes);
						
						return !this.__activeRequests && super.shouldApply(...arguments);
					}
					
					destroy() {
						let DataProvider = this.scope.DataProvider;
						
						clearWatchers(this, DataProvider, idKeys);
						
						super.destroy();
					}
				}
			else if ( comp.prototype instanceof React.Component )// or in react comps
				return reScopeProps(["DataProvider"])
				(class recordInjector extends comp {
					
					constructor( props ) {
						super(...arguments);
						let DataProvider = props.$stores.DataProvider;
						
						if ( !DataProvider )
							throw new Error("No DataProvider found !!");
						
						this.state = {
							...getRecordsFromIdKeys(this, DataProvider, idKeys, props)
						}
					}
					
					componentWillReceiveProps( props ) {
						let DataProvider = props.$stores.DataProvider;
						
						if ( !DataProvider )
							throw new Error("No DataProvider found !!");
						
						updateWatchers(this, DataProvider, idKeys, props)
						
						return super.componentWillReceiveProps(...arguments);
					}
					
					shouldComponentUpdate() {
						return !this.__activeRequests && super.shouldComponentUpdate(...arguments);
					}
					
					componentWillUnmount() {
						let DataProvider = this.props.$stores.DataProvider;
						
						clearWatchers(this, DataProvider, idKeys);
						
						super.componentWillUnmount && super.componentWillUnmount();
					}
				});
			
		};
	}
}


function clearWatchers( target, idKeys ) {
	let watchs = target.__recWatchers =
		target.__recWatchers || {};
	Object.keys(
		watchs
	).map(
		idKey =>
			DataProvider.unBindRecord(
				idKeys[idKey].etty,
				watchs[idKey].id,
				watchs[idKey].fn
			)
	);
	this.__recWatchers = {};
}

function updateWatchers( target, DataProvider, idKeys, changes ) {
	let watchs              = target.__recWatchers =
		target.__recWatchers || {};
	target.__activeRequests = target.__activeRequests || 0;
	Object.keys(changes)
	      .forEach(
		      idKey => {
			
			      if ( idKeys[idKey] &&
				      (!watchs[idKey] || watchs[idKey].id !== changes[idKey])
			      ) {
				      let initial = true;
				      target.__activeRequests++;
				
				      watchs[idKey] && DataProvider.unBindRecord(
					      idKeys[idKey].etty,
					      watchs[idKey].id,
					      watchs[idKey].fn
				      );
				      watchs[idKey] = null;
				      if ( changes[idKey] ) {
					      watchs[idKey] = {
						      id: changes[idKey],
						      fn: ( update ) => {
							      initial && target.__activeRequests--;
							      initial = false;
							      target.setState(
								      {
									      [idKeys[idKey].target]: update
								      })
						      }
					      }
					
					      DataProvider.bindRecord(
						      idKeys[idKey].etty,
						      watchs[idKey].id,
						      watchs[idKey].fn
					      )
				      }
			      }
		      }
	      )
}

function getRecordsFromIdKeys( target, DataProvider, idKeys, changes ) {
	let results = {};
	Object.keys(changes)
	      .forEach(
		      idKey => {
			      if ( idKeys[idKey] ) {
				      results[idKeys[idKey].target] = DataProvider.getRecord(idKeys[idKey].etty, idKeys[idKey].id)
			      }
		      }
	      )
	return results;
}
