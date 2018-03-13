# shopware-stateManagerAdvanced
This little script allows you to change (and show/get) the Shopware JS Breakpoints and to update the plugins accordingly

-------

### Method "stateManagerBreakpoints()":
Getter for getting all available Breakpoints.

Usage/Example:
```
var breakpoints = stateManagerBreakpoints();
console.log(breakpoints.s.enter);
console.log(breakpoints.m.exit);
```

-------

### Method "stateManagerUpdateBreakpoint(state,obj)":
Updates a breakpoint of the State Manager (e.g. xs, s, m, l, xl)

Usage/Example:
```
stateManagerUpdateBreakpoint("s",{ enter:500, exit:800 });
```

*Note: Do not forget to use "stateManagerUpdatePlugins()" after you have done all your changes.*

-------

### Method "stateManagerUpdatePlugins()":
Use this method after breakpoints have been changed (e.g. after stateManagerUpdateBreakpoint()), so the plugins can be adjusted accordingly to the new breakpoints.

Usage/Example:
```
stateManagerUpdateBreakpoint("s",{ enter:500, exit:800 });
stateManagerUpdateBreakpoint("m",{ enter:801, exit:1024 });
stateManagerUpdatePlugins();
```

-------

Further reading:
* [Shopware Docs - Javascript StateManager and Pluginbase](https://developers.shopware.com/designers-guide/javascript-statemanager-and-pluginbase/)
* Do not forget to update your less variable breakpoints as well (usually less/_variables/structure.less)
* The Shopware State Manager Plugin Location: themes/Frontend/Responsive/frontend/_public/src/js/jquery.state-manager.js
