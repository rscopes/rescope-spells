# rescope-wired (wip)

[![Build Status](https://travis-ci.org/CaipiLabs/ReScope.svg?branch=master)](https://travis-ci.org/CaipiLabs/rescope-wired)
[![NPM Version](https://badge.fury.io/js/rescope.svg?style=flat)](https://npmjs.org/package/rescope-wired)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](#)


## What ?

Work in progress collection of chainable stores decorators for [rescope](https://github.com/CaipiLabs/ReScope)

## Objective ?

Something like :

```jsx
new Scope(
    {
        @as.filteredCollection('appState.currentFilter')
        @as.itemCollection('*[type='article']')
        @as.jsonResource('url', 'params')
        @as.stateMap
        myData : {
         url    : "appConfig.myMainDataUrl",
         params : "appState"
        }
        @as.state
        appConfig : {
            myMainDataUrl : "http://some.where/{%lang}.json
        }
        @as.router
        @as.state
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
@scopeToProps('myData')
@reScope(
    {
        @as.filteredCollection('appState.currentFilter')
        @as.itemCollection('*[type='article']')
        @as.jsonResource('url', 'params')
        @as.stateMap
        myData : {
         url    : "appConfig.myMainDataUrl",
         params : "appState"
        }
        @as.state
        appConfig : {
            myMainDataUrl : "http://some.where/{%lang}.json
        }
        @as.state
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
export default class MyComp extends Component{

/*...*/
}
```

[![HitCount](http://hits.dwyl.io/caipilabs/Caipilabs/rescope.svg)](http://hits.dwyl.io/caipilabs/Caipilabs/rescope-wired)
<span class="badge-paypal"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VWKR3TWQ2U2AC" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

