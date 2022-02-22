"use strict";
(self["webpackChunkhello_world_fairy"] = self["webpackChunkhello_world_fairy"] || []).push([["lib_index_js"],{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Initialization data for the hello-world extension.
 */
const plugin = {
    id: 'hello-fairy:plugin',
    autoStart: true,
    activate: (app) => {
        const { commands } = app;
        const command = 'jlab-examples:command';
        // Add a command
        commands.addCommand(command, {
            label: 'Execute jlab-examples:command Command',
            caption: 'Execute jlab-examples:command Command',
            execute: (args) => {
                const orig = args['origin'];
                console.log(`working from jupyFair project`);
                console.log(`jlab-examples:command has been called from ${orig}.`);
                if (orig !== 'init') {
                    window.alert(`jlab-examples:command has been called from ${orig}.`);
                }
            },
        });
        // Call the command execution
        commands.execute(command, { origin: 'init' }).catch((reason) => {
            console.error(`An error occurred during the execution of jlab-examples:command.\n${reason}`);
        });
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);


/***/ })

}]);
//# sourceMappingURL=lib_index_js.20094e236a33ec47af97.js.map