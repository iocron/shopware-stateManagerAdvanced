/**
 * stateManagerAdvanced.js
 *
 * @author Sebastian Pieczona <sp@iocron.com>
 * @copyright 2017 Sebastian Pieczona <sp@iocron.com>
 * @license MIT
 *
 */

/*
// Usage/Example - Get some of the current Breakpoint Variables:
var breakpoints = stateManagerBreakpoints();
console.log(breakpoints.s.enter);
console.log(breakpoints.m.exit);

// Usage/Example - Change some Breakpoints:
stateManagerUpdateBreakpoint("xs",{ "exit": 575 });
stateManagerUpdateBreakpoint("s",{ "enter": 576 });
stateManagerUpdatePlugins();

// (Do not forget to update your less variable breakpoints as well (usually less/_variables/structure.less))
// (Standard Shopware State Manager Methods: themes/Frontend/Responsive/frontend/_public/src/js/jquery.state-manager.js)
*/

// State Manager - Breakpoints Getter: Gets all Breakpoints from the StateManager (and maps them for easier use)
// Usage:                              var breakpoints = stateManagerBreakpoints();
//                                     console.log(breakpoints.s.enter); // 480px
//                                     console.log(breakpoints.s.exit); // 767px
//                                     (Shopware Standard Breakpoints: xs, s, m, l, xl)
function stateManagerBreakpoints(){
	var smBreakpoints = StateManager._breakpoints;
	var breakpoints = {};
	for(i=0; i<smBreakpoints.length; i++){
		var tmpBreakpoint = smBreakpoints[i];
		breakpoints[tmpBreakpoint.state] = { state:tmpBreakpoint.state, enter:tmpBreakpoint.enter, exit:tmpBreakpoint.exit };
	}
	return breakpoints;
}

// State Manager - Breakpoint Setter: Updates a breakpoint of the State Manager (xs, s, m, l, xl)
// Usage:                             stateManagerUpdateBreakpoint("s",{ enter:500, exit:800 });
function stateManagerUpdateBreakpoint(state,obj){
	var smBreakpoints = StateManager._breakpoints;
	for(i=0; i<smBreakpoints.length; i++){
		if(state == smBreakpoints[i].state){
			if(typeof(obj.enter) != "undefined"){
				smBreakpoints[i].enter = obj.enter;
			}
			if(typeof(obj.exit) != "undefined"){
				smBreakpoints[i].exit = obj.exit;
			}
		}
	}
}

// State Manager - Update all Plugins:  Use this after breakpoints have been changed (e.g. after stateManagerUpdateBreakpoint())
// Usage:                               stateManagerUpdatePlugins()
function stateManagerUpdatePlugins(){
  window.StateManager._checkBreakpoints();
  window.StateManager.initQueuedPlugins(false);
}
