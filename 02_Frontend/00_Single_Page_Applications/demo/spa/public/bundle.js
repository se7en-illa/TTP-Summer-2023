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

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/***/ (() => {

eval("const h1 = document.querySelector(\"h1\");\nconst main = document.querySelector(\"main\");\n\nconst loadPeople = async () => {\n  const data = await fetch(\"/api/people\");\n  const people = await data.json();\n\n  const sections = people.map((person) => {\n    const section = document.createElement(\"section\");\n    const a = document.createElement(\"a\");\n    const em = document.createElement(\"em\");\n\n    a.setAttribute(\"id\", person.id);\n    a.setAttribute(\"href\", \"/\");\n    a.textContent = person.name;\n\n    a.addEventListener(\"click\", peopleAnchorHandler);\n\n    em.textContent = person.age;\n\n    section.append(a, \" is \", em, \" years old\");\n    return section;\n  });\n\n  main.replaceChildren(...sections);\n};\n\nconst peopleAnchorHandler = async (event) => {\n  event.preventDefault();\n  const p = document.createElement(\"p\");\n  const a = document.createElement(\"a\");\n\n  const data = await fetch(`/api/people/${event.target.id}`);\n  const person = await data.json();\n\n  p.textContent = `id: ${person.id}, age: ${person.age}`;\n  h1.textContent = person.name;\n  a.setAttribute(\"href\", \"/\");\n  a.textContent = \"Back to the main page\";\n\n  a.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    loadPeople();\n  });\n\n  main.replaceChildren(p, a);\n};\n\nloadPeople();\n\n\n//# sourceURL=webpack://spa/./client/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/index.js"]();
/******/ 	
/******/ })()
;