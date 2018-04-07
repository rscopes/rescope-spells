# rescope-spells

[![Build Status](https://travis-ci.org/CaipiLabs/rescope-spells.svg?branch=master)](https://travis-ci.org/CaipiLabs/rescope-spells)
[![NPM Version](https://badge.fury.io/js/rescope-spells.svg?style=flat)](https://npmjs.org/package/rescope-spells)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](#)

## What ?

Work in progress collection of chainable stores decorators for [rescope](https://github.com/CaipiLabs/ReScope)

## Examples ?

```jsx
new Scope(
    {

        @asStateMap // cast the "myData" object to a Store class named "myData"
        myData : {
         @scopeRef // bind some scope refs to (myData).state.url
         url    : "appConfig.myMainDataUrl",
         @scopeRef
         params : "appState"

        }
        @asStateMap
        appConfig : {
            myMainDataUrl : "http://some.where/{%appState.lang}.json
        }
        @asStateMap
        appState : {
            lang          : 'fr',
            currentFilter : {
                name : "Par.*"
            }
            someAction(){
               return {
                   some:"mutations"
               }
            }
        }
    },
    {
        // cfg ...
    }
)
```

## Objective ?

Something like :

```jsx
new Scope(
    {

        @asFilteredCollection('appState.currentFilter')
        @asItemCollection('*[type='article']')
        @asJsonResource('url', 'params')
        @asStateMap
        myData : {
         @scopeRef
         url    : "appConfig.myMainDataUrl",
         @scopeRef
         params : "appState"
        }
        @asStateMap
        appConfig : {
            @asScopeTpl
            myMainDataUrl : "http://some.where/{%appState.lang}.json
        }
        @asRouter
        @asStateMap
        appState : {
            lang               : 'fr',
            currentFilter : {
                name : "Par.*"
            }
        }
    }
)

```

or

```jsx
@reScope(
    {
       @asFilteredCollection('appState.currentFilter')
       @asItemCollection('*[type='article']')
       @asJsonResource('url', 'params')
       @asStateMap
       myData : {
        @scopeRef
        url    : "appConfig.myMainDataUrl",
        @scopeRef
        params : "!appState"
       }
       @asStateMap
       appConfig : {
           @asScopeTpl
           myMainDataUrl : "http://some.where/{%appState.lang}.json
       }
       @asRouter
       @asStateMap
       appState : {
           lang               : 'fr',
           currentFilter : {
               name : "Par.*"
           }
       }
    }
    //,
    //parentScope // default to react context inherited scope
)
@scopeToProps('myData')
export default class MyComp extends Component{

/*...*/
}
```

[![HitCount](http://hits.dwyl.io/caipilabs/Caipilabs/rescope-spells.svg)](http://hits.dwyl.io/caipilabs/Caipilabs/rescope-spells)
<span class="badge-paypal"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VWKR3TWQ2U2AC" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

