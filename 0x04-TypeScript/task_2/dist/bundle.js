/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("{\n// Classes\nvar Director = /** @class */ (function () {\n    function Director() {\n    }\n    Director.prototype.workFromHome = function () {\n        return 'Working from home';\n    };\n    Director.prototype.getCoffeeBreak = function () {\n        return 'Getting a coffee break';\n    };\n    Director.prototype.workDirectorTasks = function () {\n        return 'Getting to director tasks';\n    };\n    return Director;\n}());\nvar Teacher = /** @class */ (function () {\n    function Teacher() {\n    }\n    Teacher.prototype.workFromHome = function () {\n        return 'Cannot work from home';\n    };\n    Teacher.prototype.getCoffeeBreak = function () {\n        return 'Cannot have a break';\n    };\n    Teacher.prototype.workTeacherTasks = function () {\n        return 'Getting to work';\n    };\n    return Teacher;\n}());\n// createEmployee function\nfunction createEmployee(salary) {\n    if (typeof salary === 'number' && salary < 500) {\n        return new Teacher();\n    }\n    return new Director();\n}\n// isDirector type guard\nfunction isDirector(employee) {\n    return employee.workDirectorTasks !== undefined;\n}\n// executeWork function\nfunction executeWork(employee) {\n    if (isDirector(employee)) {\n        return employee.workDirectorTasks();\n    }\n    return employee.workTeacherTasks();\n}\n// Test examples\nconsole.log(executeWork(createEmployee(200))); // Getting to work\nconsole.log(executeWork(createEmployee(1000))); // Getting to director tasks\n// teachClass function\nfunction teachClass(todayClass) {\n    if (todayClass === 'Math') {\n        return 'Teaching Math';\n    }\n    else {\n        return 'Teaching History';\n    }\n}\n// Test teachClass\nconsole.log(teachClass('Math')); // Teaching Math\nconsole.log(teachClass('History')); // Teaching History\n\n\n//# sourceURL=webpack://task_2/./js/main.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;