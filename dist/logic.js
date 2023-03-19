/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/logic.ts":
/*!**********************!*\
  !*** ./src/logic.ts ***!
  \**********************/
/***/ (() => {

eval("/*\nMain logic for Divvi.\n\nContains functions to get and process user input, compute a bill,\nand store results.\n\nWritten by Anoush Khan, March 2023\nAdapted from Even Split code written by Anoush Khan and Dan Strauss, 2022\n*/\nfunction getFrontendData() {\n    /* grab data from frontend and store it in the standard internal\n    data format */\n    // PLACEHOLDER FOR CODE TO GRAB DATA FROM FRONTEND\n    // RETURN DEMO BILL IN THE MEANTIME\n    var dco_dinner = {\n        id: \"null\",\n        isComplete: false,\n        timestamp: Date(),\n        people: {\n            \"Grace\": {\n                pre_tax_amt: 22,\n                calc_type: \"exact\",\n                contribution: NaN\n            },\n            \"Sachin\": {\n                pre_tax_amt: 15,\n                calc_type: \"exact\",\n                contribution: NaN\n            },\n            \"Anoush\": {\n                pre_tax_amt: 19,\n                calc_type: \"exact\",\n                contribution: NaN\n            },\n            \"Guadalupe\": {\n                pre_tax_amt: 6,\n                calc_type: \"exact\",\n                contribution: NaN\n            },\n            \"Sophia\": {\n                pre_tax_amt: 7,\n                calc_type: \"exact\",\n                contribution: NaN\n            }\n        },\n        tax: 5.88,\n        tip_type: \"pre_tax_pct\",\n        tip_val: 20,\n        pre_tax_total: NaN,\n        total: NaN\n    };\n    var dumpling_dinner = {\n        id: \"null\",\n        isComplete: false,\n        timestamp: Date(),\n        people: {\n            \"Anoush\": {\n                pre_tax_amt: 23.43,\n                calc_type: \"exact\",\n                contribution: NaN\n            },\n            \"Seth\": {\n                pre_tax_amt: 45.62,\n                calc_type: \"exact\",\n                contribution: NaN\n            }\n        },\n        tax: 4.83,\n        tip_type: \"pre_tax_pct\",\n        tip_val: 20,\n        pre_tax_total: NaN,\n        total: NaN\n    };\n    var squad_at_99 = {\n        id: \"null\",\n        isComplete: false,\n        timestamp: Date(),\n        people: {\n            \"Anoush\": {\n                pre_tax_amt: 23.43,\n                calc_type: \"exact\",\n                contribution: NaN\n            },\n            \"Dan\": {\n                pre_tax_amt: 45.62,\n                calc_type: \"exact\",\n                contribution: NaN\n            },\n            \"Charlie\": {\n                pre_tax_amt: 45.62,\n                calc_type: \"cash\",\n                contribution: NaN\n            }\n        },\n        tax: 4.83,\n        tip_type: \"pre_tax_pct\",\n        tip_val: 20,\n        pre_tax_total: NaN,\n        total: NaN\n    };\n    return dco_dinner;\n}\nfunction computeBill(thisBill) {\n    /* compute a bill */\n    // 1: compute pre_tax_total using each person's pre_tax_amt\n    // 2: compute tip amount using method flag stored in thisBill\n    // 3: compute thisBill's total amount\n    // 4: determine each person's contribution percentage\n    // 5: determine each person's tentative amount\n    // 6: adjust each person's amount based on their payment preference\n    // 7: mark bill as complete (i.e. has all information)\n    return thisBill;\n}\nfunction saveDataToSession() {\n    /* save data to sessionStorage, where it is valid until\n    the session refreshes */\n}\nfunction retrieveDataFromSession() {\n    /* retrieve data from sessionStorage */\n}\nfunction saveDataToLocal() {\n    /* save data to localStorage, where it is valid until\n    browser cache is cleared */\n}\nfunction retrieveDataFromLocal() {\n    /* retrieve data from localStorage */\n}\nfunction displayResults() {\n    /* standard way to display bill results */\n}\nfunction main() {\n    /* main logic, triggered when \"compute\" button pressed */\n    computeBill(getFrontendData());\n    saveDataToSession();\n    retrieveDataFromSession();\n    displayResults();\n}\nfunction saveCurrentBill() {\n    /* logic to save current bill, triggered when \"save bill\" button pressed */\n    retrieveDataFromSession();\n    saveDataToLocal();\n}\nfunction testing() {\n    console.log('Hello!!!!');\n}\nconsole.log(getFrontendData());\n\n\n//# sourceURL=webpack://divvi/./src/logic.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/logic.ts"]();
/******/ 	
/******/ })()
;