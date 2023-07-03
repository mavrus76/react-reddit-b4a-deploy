/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\nconst root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\nconst redux_1 = __webpack_require__(/*! redux */ \"redux\");\nconst extension_1 = __webpack_require__(/*! @redux-devtools/extension */ \"@redux-devtools/extension\");\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nconst Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\nconst Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\nconst Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\nconst CardList_1 = __webpack_require__(/*! ./shared/CardList */ \"./src/shared/CardList/index.ts\");\nconst postsContext_1 = __webpack_require__(/*! ./shared/context/postsContext */ \"./src/shared/context/postsContext.tsx\");\nconst reducer_1 = __webpack_require__(/*! ./shared/store/reducer */ \"./src/shared/store/reducer.ts\");\nconst actions_1 = __webpack_require__(/*! ./shared/store/token/actions */ \"./src/shared/store/token/actions.ts\");\nconst replyContext_1 = __webpack_require__(/*! ./shared/context/replyContext */ \"./src/shared/context/replyContext.ts\");\nconst Post_1 = __webpack_require__(/*! ./shared/Post */ \"./src/shared/Post/index.ts\");\nconst Page404_1 = __webpack_require__(/*! ./shared/Page404 */ \"./src/shared/Page404/index.ts\");\nconst store = (0, redux_1.createStore)(reducer_1.rootReducer, (0, extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\nfunction AppComponent() {\n    const [replyValue, setReplyValue] = (0, react_1.useState)('');\n    const ReplyProvider = replyContext_1.replyContext.Provider;\n    const [mounted, setMounted] = (0, react_1.useState)(false);\n    (0, react_1.useEffect)(() => {\n        setMounted(true);\n        store.dispatch((0, actions_1.saveToken)());\n    }, []);\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store }, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\n        react_1.default.createElement(postsContext_1.PostsContextProvider, null,\n            react_1.default.createElement(ReplyProvider, { value: {\n                    value: replyValue,\n                    onChange: setReplyValue,\n                } },\n                react_1.default.createElement(Layout_1.Layout, null,\n                    react_1.default.createElement(Header_1.Header, null),\n                    react_1.default.createElement(Content_1.Content, null,\n                        react_1.default.createElement(react_router_dom_1.Switch, null,\n                            react_1.default.createElement(react_router_dom_1.Route, { path: '/posts/:id' },\n                                react_1.default.createElement(Post_1.Post, null)),\n                            react_1.default.createElement(react_router_dom_1.Route, { path: '/' },\n                                react_1.default.createElement(CardList_1.CardList, null)),\n                            react_1.default.createElement(react_router_dom_1.Route, { path: '*' },\n                                react_1.default.createElement(Page404_1.Page404, null)),\n                            react_1.default.createElement(react_router_dom_1.Route, { path: '/' },\n                                react_1.default.createElement(react_router_dom_1.Redirect, { to: '/posts' })),\n                            react_1.default.createElement(react_router_dom_1.Route, { path: '/auth' },\n                                react_1.default.createElement(react_router_dom_1.Redirect, { to: '/posts' })))))))))));\n}\nexports.App = (0, root_1.hot)(() => react_1.default.createElement(AppComponent, null));\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\n  --black: #333;\\n  --white: #fff;\\n  --orange: #cc6633;\\n  --green: #a4cc33;\\n  --greyF3: #f3f3f3;\\n  --greyF4: #f4f4f4;\\n  --greyEC: #ececec;\\n  --greyD9: #d9d9d9;\\n  --greyC4: #c4c4c4;\\n  --grey99: #999;\\n  --grey66: #666;\\n}\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Roboto', serif;\\n  font-size: 14px;\\n  line-height: 16px;\\n  background-color: var(--greyF4);\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  color: var(--grey66);\\n  -webkit-font-smoothing: antialiased;\\n  -webkit-osx-font-smoothing: grayscale;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  border: 0;\\n  padding: 0;\\n  background-color: transparent;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.indexTemplate = void 0;\nconst indexTemplate = (content, token) => `\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1.0, shrink-to-fit=no\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n\n    <title>Reddit</title>\n    <script>\n      window.__token__ = '${token}'\n    </script>\n    <script src='/static/client.js' type='application/javascript'></script>\n  </head>\n\n  <body>\n    <div id=\"app_root\">${content}</div>\n    <div id=\"modal_root\"></div>\n    <div id=\"dropdown_root\"></div>\n  </body>\n</html>\n`;\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nconst compression_1 = __importDefault(__webpack_require__(/*! compression */ \"compression\"));\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nconst App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\nconst indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nconst PORT = process.env.PORT || 3000;\nconst IS_DEV = \"development\" !== 'production';\nconst app = (0, express_1.default)();\nif (!IS_DEV) {\n    app.use((0, compression_1.default)());\n    app.use((0, helmet_1.default)({\n        contentSecurityPolicy: false,\n    }));\n}\napp.use('/static', express_1.default.static('./dist/client'));\napp.get('/auth', (req, res) => {\n    axios_1.default\n        .post('https://www.reddit.com/api/v1/access_token', `grant_type=authorization_code&code=${req.query.code}&redirect_uri=https://railway.app/project/9bb076ed-b290-413e-8ab0-fc0378a2b5f7/auth`, {\n        auth: {\n            username: 'pmDxCkcFEU8a5B-h7d0p4g',\n            password: process.env.SECRET,\n        },\n        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },\n    })\n        .then(({ data }) => {\n        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)()), data.access_token));\n    })\n        .catch(console.log);\n});\napp.get('*', (req, res) => {\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));\n});\napp.listen(PORT, () => {\n    console.log(`Server started on http://localhost:${PORT}`);\n});\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Break/Break.tsx":
/*!************************************!*\
  !*** ./src/shared/Break/Break.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Break = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\nconst break_css_1 = __importDefault(__webpack_require__(/*! ./break.css */ \"./src/shared/Break/break.css\"));\nfunction Break(props) {\n    const { inline = false, top = false, size, mobileSize, tabletSize, desktopSize, } = props;\n    return (react_1.default.createElement(\"div\", { className: (0, classnames_1.default)(break_css_1.default[`s${size}`], {\n            [break_css_1.default[`m${mobileSize}`]]: mobileSize,\n        }, {\n            [break_css_1.default[`t${tabletSize}`]]: tabletSize,\n        }, {\n            [break_css_1.default[`d${desktopSize}`]]: desktopSize,\n        }, { [break_css_1.default.inline]: inline }, { [break_css_1.default.top]: top }) }));\n}\nexports.Break = Break;\nBreak.defaultProps = {\n    mobileSize: null,\n    tabletSize: null,\n    desktopSize: null,\n    inline: false,\n    top: false,\n};\n\n\n//# sourceURL=webpack:///./src/shared/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/Break/break.css":
/*!************************************!*\
  !*** ./src/shared/Break/break.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s4\": \"break__s4--rnbuA\",\n\t\"s8\": \"break__s8--2ubV4\",\n\t\"s12\": \"break__s12--3dSW2\",\n\t\"s16\": \"break__s16--2bop2\",\n\t\"s20\": \"break__s20--PBhCB\",\n\t\"inline\": \"break__inline--22pcx\",\n\t\"top\": \"break__top--25ISJ\",\n\t\"m4\": \"break__m4--vcnM6\",\n\t\"m8\": \"break__m8--nERtE\",\n\t\"m12\": \"break__m12--1AOlH\",\n\t\"m16\": \"break__m16--1rVpa\",\n\t\"m20\": \"break__m20--1j3tN\",\n\t\"t4\": \"break__t4--3wfa1\",\n\t\"t8\": \"break__t8--fbYbW\",\n\t\"t12\": \"break__t12--1CwXq\",\n\t\"t16\": \"break__t16--16bgO\",\n\t\"t20\": \"break__t20--1q14V\",\n\t\"d4\": \"break__d4--3l9y9\",\n\t\"d8\": \"break__d8--eorzy\",\n\t\"d2\": \"break__d2--3MYdo\",\n\t\"d16\": \"break__d16--3d4X_\",\n\t\"d20\": \"break__d20--3nrJP\",\n\t\"d12\": \"break__d12--3AVL6\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Break/break.css?");

/***/ }),

/***/ "./src/shared/Break/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Break/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Break */ \"./src/shared/Break/Break.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Break/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Card.tsx":
/*!*******************************************!*\
  !*** ./src/shared/CardList/Card/Card.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Card = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardList/Card/card.css\"));\nconst TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/CardList/Card/TextContent/index.ts\");\nconst Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/CardList/Card/Preview/index.ts\");\nconst Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardList/Card/Menu/index.ts\");\nconst Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/CardList/Card/Controls/index.ts\");\nfunction Card({ postId, author, title, avatarSrc, createdAt, previewImg, rating, }) {\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card },\n        react_1.default.createElement(TextContent_1.TextContent, { postId: postId, avatarSrc: avatarSrc, author: author, createdAt: createdAt, title: title }),\n        react_1.default.createElement(Preview_1.Preview, { previewImg: previewImg }),\n        react_1.default.createElement(Menu_1.Menu, { postId: postId }),\n        react_1.default.createElement(Controls_1.Controls, { rating: rating })));\n}\nexports.Card = Card;\nCard.defaultProps = {\n    postId: null,\n    avatarSrc: null,\n    author: null,\n    createdAt: null,\n    title: null,\n    previewImg: null,\n    rating: null,\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Controls.tsx":
/*!********************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Controls.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Controls = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst controls_css_1 = __importDefault(__webpack_require__(/*! ./controls.css */ \"./src/shared/CardList/Card/Controls/controls.css\"));\nconst icons_1 = __webpack_require__(/*! ../../../icons */ \"./src/shared/icons/index.ts\");\nconst enums_1 = __webpack_require__(/*! ../../../../types/enums */ \"./src/types/enums.ts\");\nconst Icon_1 = __webpack_require__(/*! ../../../Icon */ \"./src/shared/Icon/index.ts\");\nfunction Controls({ rating }) {\n    return (react_1.default.createElement(\"div\", { className: controls_css_1.default.controls },\n        react_1.default.createElement(\"div\", { className: controls_css_1.default.karmaCounter },\n            react_1.default.createElement(\"button\", { className: controls_css_1.default.up, type: 'button' },\n                react_1.default.createElement(icons_1.IconArrowUp, null)),\n            react_1.default.createElement(\"span\", { className: controls_css_1.default.karmaValue }, rating),\n            react_1.default.createElement(\"button\", { className: controls_css_1.default.down, type: 'button' },\n                react_1.default.createElement(icons_1.IconArrowDown, null))),\n        react_1.default.createElement(\"button\", { className: controls_css_1.default.commentsButton, type: 'button' },\n            react_1.default.createElement(Icon_1.Icon, { name: enums_1.EIcons.comments, size: 16 }),\n            react_1.default.createElement(\"span\", { className: controls_css_1.default.commentNumber }, \"13\")),\n        react_1.default.createElement(\"div\", { className: controls_css_1.default.actions },\n            react_1.default.createElement(\"button\", { className: controls_css_1.default.shareButton, type: 'button' },\n                react_1.default.createElement(Icon_1.Icon, { name: enums_1.EIcons.share, size: 20 })),\n            react_1.default.createElement(\"button\", { className: controls_css_1.default.saveButton, type: 'button' },\n                react_1.default.createElement(Icon_1.Icon, { name: enums_1.EIcons.save, size: 20 })))));\n}\nexports.Controls = Controls;\nControls.defaultProps = {\n    rating: null,\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/controls.css":
/*!********************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/controls.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controls__controls--1-dWi\",\n\t\"karmaCounter\": \"controls__karmaCounter--SvsM3\",\n\t\"karmaValue\": \"controls__karmaValue--GdJKQ\",\n\t\"down\": \"controls__down--2mx9d\",\n\t\"commentsButton\": \"controls__commentsButton--290Nn\",\n\t\"commentNumber\": \"controls__commentNumber--3PT7e\",\n\t\"actions\": \"controls__actions--ahe_O\",\n\t\"saveButton\": \"controls__saveButton--z-wT4\",\n\t\"shareButton\": \"controls__shareButton--2becu\",\n\t\"publishedLabel\": \"controls__publishedLabel--1xoeO\",\n\t\"up\": \"controls__up--1nV0P\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/controls.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/CardList/Card/Controls/Controls.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/Menu.tsx":
/*!************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/Menu.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Menu = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardList/Card/Menu/menu.css\"));\nconst Dropdown_1 = __webpack_require__(/*! ../../../../shared/Dropdown */ \"./src/shared/Dropdown/index.ts\");\nconst icons_1 = __webpack_require__(/*! ../../../icons */ \"./src/shared/icons/index.ts\");\nconst MenuDropdown_1 = __webpack_require__(/*! ./MenuDropdown */ \"./src/shared/CardList/Card/Menu/MenuDropdown/index.ts\");\nfunction Menu({ postId }) {\n    var _a;\n    const [isDropdownOpen, setIsDropdownOpen] = (0, react_1.useState)(false);\n    const btnDropdown = document.getElementById(`btnDropdown_${postId}`);\n    const { top, left, right, bottom } = (_a = btnDropdown === null || btnDropdown === void 0 ? void 0 : btnDropdown.getBoundingClientRect()) !== null && _a !== void 0 ? _a : {};\n    const elDistanceToTop = window.pageYOffset + (bottom !== null && bottom !== void 0 ? bottom : 0) + 10;\n    const elDistanceToLeft = window.pageXOffset + (left !== null && left !== void 0 ? left : 0) - 137;\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\n        react_1.default.createElement(Dropdown_1.Dropdown, { onClose: () => setIsDropdownOpen(false), onOpen: () => setIsDropdownOpen(true), isOpen: isDropdownOpen, button: react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton, type: 'button', id: `btnDropdown_${postId}` },\n                react_1.default.createElement(icons_1.IconMenuDots, null)) }, isDropdownOpen && (react_1.default.createElement(MenuDropdown_1.MenuDropdown, { onClose: () => setIsDropdownOpen(false), top: elDistanceToTop, left: elDistanceToLeft })))));\n}\nexports.Menu = Menu;\nMenu.defaultProps = {\n    postId: null,\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/MenuDropdown/MenuDropdown.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/MenuDropdown/MenuDropdown.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MenuDropdown = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\nconst menudropdown_css_1 = __importDefault(__webpack_require__(/*! ./menudropdown.css */ \"./src/shared/CardList/Card/Menu/MenuDropdown/menudropdown.css\"));\nconst GenericList_1 = __webpack_require__(/*! ../../../../GenericList */ \"./src/shared/GenericList/index.ts\");\nconst Icon_1 = __webpack_require__(/*! ../../../../Icon */ \"./src/shared/Icon/index.ts\");\nconst Text_1 = __webpack_require__(/*! ../../../../Text */ \"./src/shared/Text/index.ts\");\nconst enums_1 = __webpack_require__(/*! ../../../../../types/enums */ \"./src/types/enums.ts\");\nconst generateRandomIndex_1 = __webpack_require__(/*! ../../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\nconst merge_1 = __webpack_require__(/*! ../../../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\nconst noop_1 = __webpack_require__(/*! ../../../../../utils/js/noop */ \"./src/utils/js/noop.ts\");\nconst useClickOut_1 = __webpack_require__(/*! ../../../../hooks/useClickOut */ \"./src/shared/hooks/useClickOut.ts\");\nconst classHideItem = `${menudropdown_css_1.default.menuItem} ${menudropdown_css_1.default.mobile}`;\nconst LIST = [\n    {\n        text: (react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: enums_1.EColors.grey99 }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0438\")),\n        icon: react_1.default.createElement(Icon_1.Icon, { name: enums_1.EIcons.comments, mobileSize: 12, size: 14 }),\n        className: classHideItem,\n    },\n    {\n        text: (react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: enums_1.EColors.grey99 }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\n        icon: react_1.default.createElement(Icon_1.Icon, { name: enums_1.EIcons.shareLight, mobileSize: 12, size: 14 }),\n        className: classHideItem,\n    },\n    {\n        text: (react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: enums_1.EColors.grey99 }, \"\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C\")),\n        icon: react_1.default.createElement(Icon_1.Icon, { name: enums_1.EIcons.hide, mobileSize: 12, size: 14 }),\n        className: menudropdown_css_1.default.menuItem,\n    },\n    {\n        text: (react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: enums_1.EColors.grey99 }, \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\")),\n        icon: react_1.default.createElement(Icon_1.Icon, { name: enums_1.EIcons.saveLight, mobileSize: 12, size: 14 }),\n        className: classHideItem,\n    },\n    {\n        text: (react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: enums_1.EColors.grey99 }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\")),\n        icon: react_1.default.createElement(Icon_1.Icon, { name: enums_1.EIcons.complain, mobileSize: 12, size: 14 }),\n        className: menudropdown_css_1.default.menuItem,\n    },\n].map(generateRandomIndex_1.generateId);\nfunction MenuDropdown({ top, left, onClose }) {\n    const [list, setList] = (0, react_1.useState)(LIST);\n    const refDropdown = (0, useClickOut_1.useClickOut)(onClose);\n    const handleItemClick = (id) => {\n        console.log(id);\n    };\n    const node = document.getElementById('dropdown_root');\n    if (!node)\n        return null;\n    return react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { className: menudropdown_css_1.default.dropdown, ref: refDropdown, style: { top: `${top}px`, left: `${left}px` } },\n        react_1.default.createElement(\"ul\", { className: menudropdown_css_1.default.menuItemsList },\n            react_1.default.createElement(GenericList_1.GenericList, { list: list.map((0, merge_1.merge)({\n                    As: 'li',\n                    onClick: handleItemClick,\n                    divider: true,\n                })) })),\n        react_1.default.createElement(\"button\", { type: 'button', className: menudropdown_css_1.default.buttonClose },\n            react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: enums_1.EColors.grey66 }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\"))), node);\n}\nexports.MenuDropdown = MenuDropdown;\nMenuDropdown.defaultProps = {\n    top: 0,\n    left: 0,\n    onClose: noop_1.noop,\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/MenuDropdown/MenuDropdown.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/MenuDropdown/index.ts":
/*!*************************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/MenuDropdown/index.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./MenuDropdown */ \"./src/shared/CardList/Card/Menu/MenuDropdown/MenuDropdown.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/MenuDropdown/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/MenuDropdown/menudropdown.css":
/*!*********************************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/MenuDropdown/menudropdown.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"dropdown\": \"menudropdown__dropdown---7QL0\",\n\t\"menuItemsList\": \"menudropdown__menuItemsList--iwCGN\",\n\t\"menuItem\": \"menudropdown__menuItem--1Di7z\",\n\t\"buttonClose\": \"menudropdown__buttonClose--111e_\",\n\t\"mobile\": \"menudropdown__mobile--3uVe4\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/MenuDropdown/menudropdown.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/index.ts":
/*!************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/CardList/Card/Menu/Menu.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/menu.css":
/*!************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/menu.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--Kvuaj\",\n\t\"menuButton\": \"menu__menuButton--WhNZf\",\n\t\"dropdown\": \"menu__dropdown--po3RG\",\n\t\"menuItemsList\": \"menu__menuItemsList--qW9a0\",\n\t\"menuItem\": \"menu__menuItem--3Tg0P\",\n\t\"buttonClose\": \"menu__buttonClose--3mp1s\",\n\t\"mobile\": \"menu__mobile--2eW0F\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/menu.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/Preview/Preview.tsx":
/*!******************************************************!*\
  !*** ./src/shared/CardList/Card/Preview/Preview.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Preview = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst preview_css_1 = __importDefault(__webpack_require__(/*! ./preview.css */ \"./src/shared/CardList/Card/Preview/preview.css\"));\nfunction Preview({ previewImg }) {\n    return (react_1.default.createElement(\"div\", { className: preview_css_1.default.preview },\n        react_1.default.createElement(\"img\", { className: preview_css_1.default.previewImg, src: previewImg, alt: 'preview' })));\n}\nexports.Preview = Preview;\nPreview.defaultProps = {\n    previewImg: null,\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Preview/index.ts":
/*!***************************************************!*\
  !*** ./src/shared/CardList/Card/Preview/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/CardList/Card/Preview/Preview.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Preview/preview.css":
/*!******************************************************!*\
  !*** ./src/shared/CardList/Card/Preview/preview.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--2tbAa\",\n\t\"previewImg\": \"preview__previewImg--33yAl\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Preview/preview.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/TextContent.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/TextContent.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TextContent = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst date_fns_1 = __webpack_require__(/*! date-fns */ \"date-fns\");\nconst locale_1 = __webpack_require__(/*! date-fns/locale */ \"date-fns/locale\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nconst textcontent_css_1 = __importDefault(__webpack_require__(/*! ./textcontent.css */ \"./src/shared/CardList/Card/TextContent/textcontent.css\"));\nconst getDays_1 = __webpack_require__(/*! ../../../../utils/js/getDays */ \"./src/utils/js/getDays.ts\");\nconst getHours_1 = __webpack_require__(/*! ../../../../utils/js/getHours */ \"./src/utils/js/getHours.ts\");\nfunction TextContent({ postId, avatarSrc, author, createdAt = 0, title, }) {\n    const createdDatePost = (0, date_fns_1.format)(new Date(createdAt), 'dd MMMM yyyy', {\n        locale: locale_1.ru,\n    });\n    const daysAgo = (0, getDays_1.getDays)(createdAt);\n    const hoursAgo = (0, getHours_1.getHours)(createdAt);\n    return (react_1.default.createElement(\"div\", { className: textcontent_css_1.default.textContent },\n        react_1.default.createElement(\"div\", { className: textcontent_css_1.default.metaData },\n            react_1.default.createElement(\"div\", { className: textcontent_css_1.default.userLink },\n                react_1.default.createElement(\"img\", { className: textcontent_css_1.default.avatar, src: avatarSrc, alt: 'avatar' }),\n                react_1.default.createElement(\"a\", { className: textcontent_css_1.default.username, href: '#user-url' }, author)),\n            react_1.default.createElement(\"span\", { className: textcontent_css_1.default.createAt },\n                react_1.default.createElement(\"span\", { className: textcontent_css_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\n                react_1.default.createElement(\"span\", { className: textcontent_css_1.default.publishedDate }, createdDatePost),\n                react_1.default.createElement(\"span\", { className: textcontent_css_1.default.publishedDays }, parseInt(hoursAgo.split(' ')[0], 10) < 24 ? hoursAgo : daysAgo))),\n        react_1.default.createElement(\"h2\", { className: textcontent_css_1.default.title },\n            react_1.default.createElement(react_router_dom_1.Link, { className: textcontent_css_1.default.postLink, id: `btnModal_${postId}`, to: `/posts/${postId}` }, title))));\n}\nexports.TextContent = TextContent;\nTextContent.defaultProps = {\n    postId: null,\n    avatarSrc: null,\n    author: null,\n    createdAt: 0,\n    title: null,\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/CardList/Card/TextContent/TextContent.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/textcontent.css":
/*!**************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/textcontent.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textcontent__textContent--2_NpO\",\n\t\"createAt\": \"textcontent__createAt--1eDi_\",\n\t\"metaData\": \"textcontent__metaData--KoG5L\",\n\t\"userLink\": \"textcontent__userLink--1VRAZ\",\n\t\"avatar\": \"textcontent__avatar--1OzfI\",\n\t\"username\": \"textcontent__username--Zwuf8\",\n\t\"title\": \"textcontent__title--3rPFb\",\n\t\"postLink\": \"textcontent__postLink--3e0Gj\",\n\t\"publishedLabel\": \"textcontent__publishedLabel--3K2Y-\",\n\t\"publishedDate\": \"textcontent__publishedDate--inLN3\",\n\t\"publishedDays\": \"textcontent__publishedDays--3YhSP\",\n\t\"modal\": \"textcontent__modal--A1emO\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/textcontent.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/card.css":
/*!*******************************************!*\
  !*** ./src/shared/CardList/Card/card.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--1msO-\",\n\t\"textContent\": \"card__textContent--Nbh4J\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardList/CardList.tsx":
/*!******************************************!*\
  !*** ./src/shared/CardList/CardList.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CardList = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst cardlist_css_1 = __importDefault(__webpack_require__(/*! ./cardlist.css */ \"./src/shared/CardList/cardlist.css\"));\nconst Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardList/Card/Card.tsx\");\nconst postsContext_1 = __webpack_require__(/*! ../context/postsContext */ \"./src/shared/context/postsContext.tsx\");\nfunction CardList() {\n    const { data, loading, errorLoading, bottomOfList, count, handleClick } = (0, react_1.useContext)(postsContext_1.postsContext);\n    // console.log('postsData >>', data);\n    return (react_1.default.createElement(\"ul\", { className: cardlist_css_1.default.cardList },\n        data.length === 0 && !loading && !errorLoading && (react_1.default.createElement(\"div\", { style: { textAlign: 'center', fontSize: '24px' } }, \"\\u041D\\u0435\\u0442 \\u043D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043F\\u043E\\u0441\\u0442\\u0430\")),\n        data.map((post) => (react_1.default.createElement(Card_1.Card, { key: post.postId, postId: post.postId, avatarSrc: post.avatarSrc, author: post.author, createdAt: post.createdAt, title: post.title, previewImg: post.previewImg, rating: post.rating }))),\n        count === 3 ? (react_1.default.createElement(\"button\", { className: cardlist_css_1.default.button, type: 'button', onClick: handleClick }, \"Load more\")) : (react_1.default.createElement(\"div\", { ref: bottomOfList })),\n        loading && (react_1.default.createElement(\"div\", { style: { textAlign: 'center', fontSize: '24px' } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")),\n        errorLoading && (react_1.default.createElement(\"div\", { role: 'alert', style: { textAlign: 'center', fontSize: '24px' } }, errorLoading))));\n}\nexports.CardList = CardList;\n\n\n//# sourceURL=webpack:///./src/shared/CardList/CardList.tsx?");

/***/ }),

/***/ "./src/shared/CardList/cardlist.css":
/*!******************************************!*\
  !*** ./src/shared/CardList/cardlist.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"button\": \"cardlist__button--3heKa\",\n\t\"cardList\": \"cardlist__cardList--1csLe\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/cardlist.css?");

/***/ }),

/***/ "./src/shared/CardList/index.ts":
/*!**************************************!*\
  !*** ./src/shared/CardList/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CardList */ \"./src/shared/CardList/CardList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardList/index.ts?");

/***/ }),

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentForm = void 0;\n/* eslint-disable react/jsx-props-no-spreading */\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/CommentForm/commentform.css\"));\nfunction CommentForm({ value, onChange, onSubmit, register, errors, touched, }) {\n    var _a;\n    return (react_1.default.createElement(\"form\", { className: commentform_css_1.default.form, onSubmit: onSubmit },\n        react_1.default.createElement(\"label\", { className: commentform_css_1.default.label, \"aria-label\": '\\u041F\\u043E\\u043B\\u0435 \\u0434\\u043B\\u044F \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u044F' },\n            react_1.default.createElement(\"textarea\", Object.assign({ className: commentform_css_1.default.input, value: value }, register('commentText', {\n                onChange,\n            }), { \"aria-invalid\": errors.commentText ? 'true' : undefined }))),\n        touched && errors.commentText && (react_1.default.createElement(\"div\", { className: commentform_css_1.default.error }, (_a = errors.commentText) === null || _a === void 0 ? void 0 : _a.message)),\n        react_1.default.createElement(\"button\", { type: 'submit', className: commentform_css_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\n}\nexports.CommentForm = CommentForm;\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/commentform.css":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/commentform.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"commentform__form--Cs1Oi\",\n\t\"label\": \"commentform__label--1m8e-\",\n\t\"input\": \"commentform__input--2fC-z\",\n\t\"error\": \"commentform__error--1ux_J\",\n\t\"button\": \"commentform__button--35eLT\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/commentform.css?");

/***/ }),

/***/ "./src/shared/CommentForm/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/CommentForm/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/index.ts?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/CommentFormContainer.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/CommentFormContainer/CommentFormContainer.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentFormContainer = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\nconst yup_1 = __webpack_require__(/*! @hookform/resolvers/yup */ \"@hookform/resolvers/yup\");\nconst yup = __importStar(__webpack_require__(/*! yup */ \"yup\"));\nconst CommentForm_1 = __webpack_require__(/*! ../CommentForm */ \"./src/shared/CommentForm/index.ts\");\nconst schema = yup.object({\n    commentText: yup.string().min(4, 'Введите больше 3-х символов'),\n});\nfunction CommentFormContainer() {\n    const [value, setValue] = (0, react_1.useState)('');\n    const [touched, setTouched] = (0, react_1.useState)(false);\n    const { register, handleSubmit, formState: { errors }, reset, } = (0, react_hook_form_1.useForm)({\n        // mode: 'onBlur',\n        resolver: (0, yup_1.yupResolver)(schema),\n    });\n    const handleChange = (event) => {\n        setValue(event.target.value);\n        setTouched(true);\n    };\n    // function handleBlur() {\n    //   setTouched(false);\n    // }\n    const onSubmit = (data) => {\n        setTouched(true);\n        console.log(data.commentText);\n        setValue('');\n        reset();\n    };\n    return (react_1.default.createElement(CommentForm_1.CommentForm, { value: value, onChange: handleChange, onSubmit: handleSubmit(onSubmit), register: register, errors: errors, touched: touched }));\n}\nexports.CommentFormContainer = CommentFormContainer;\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/CommentFormContainer/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentFormContainer */ \"./src/shared/CommentFormContainer/CommentFormContainer.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/index.ts?");

/***/ }),

/***/ "./src/shared/Comments/Comments.tsx":
/*!******************************************!*\
  !*** ./src/shared/Comments/Comments.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Comments = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst comments_css_1 = __importDefault(__webpack_require__(/*! ./comments.css */ \"./src/shared/Comments/comments.css\"));\nconst Icon_1 = __webpack_require__(/*! ../Icon */ \"./src/shared/Icon/index.ts\");\nconst enums_1 = __webpack_require__(/*! ../../types/enums */ \"./src/types/enums.ts\");\nconst Text_1 = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\nconst Break_1 = __webpack_require__(/*! ../Break */ \"./src/shared/Break/index.ts\");\nconst getDays_1 = __webpack_require__(/*! ../../utils/js/getDays */ \"./src/utils/js/getDays.ts\");\nconst getHours_1 = __webpack_require__(/*! ../../utils/js/getHours */ \"./src/utils/js/getHours.ts\");\nconst ReplayForm_1 = __webpack_require__(/*! ../ReplayForm */ \"./src/shared/ReplayForm/index.ts\");\nfunction Comments({ commentId, parentId, author, body, createdAt = 0, }) {\n    const [isReplyFormOpen, setIsReplyFormOpen] = (0, react_1.useState)(false);\n    const daysAgo = (0, getDays_1.getDays)(createdAt);\n    const hoursAgo = (0, getHours_1.getHours)(createdAt);\n    return (react_1.default.createElement(\"div\", { className: comments_css_1.default.commentsContainer },\n        react_1.default.createElement(\"div\", { className: comments_css_1.default.authorContainer },\n            react_1.default.createElement(\"div\", { className: comments_css_1.default.author }, author),\n            react_1.default.createElement(\"div\", { className: comments_css_1.default.createdAt }, parseInt(hoursAgo.split(' ')[0], 10) < 24 ? hoursAgo : daysAgo),\n            react_1.default.createElement(\"div\", { className: comments_css_1.default.badge }, \"\\u041B\\u0438\\u0433\\u0430 \\u044E\\u0440\\u0438\\u0441\\u0442\\u043E\\u0432\")),\n        react_1.default.createElement(\"div\", { className: comments_css_1.default.body }, body),\n        isReplyFormOpen && react_1.default.createElement(ReplayForm_1.ReplyForm, null),\n        react_1.default.createElement(\"button\", { type: 'button', className: comments_css_1.default.buttonSend, onClick: () => setIsReplyFormOpen(true) },\n            react_1.default.createElement(Icon_1.Icon, { name: enums_1.EIcons.comments, size: 14 }),\n            react_1.default.createElement(Break_1.Break, { size: 4 }),\n            react_1.default.createElement(Text_1.Text, { size: 14, color: enums_1.EColors.grey99 }, \"\\u041E\\u0442\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C\"))));\n}\nexports.Comments = Comments;\nComments.defaultProps = {\n    commentId: null,\n    parentId: null,\n    author: null,\n    body: null,\n    createdAt: 0,\n};\n\n\n//# sourceURL=webpack:///./src/shared/Comments/Comments.tsx?");

/***/ }),

/***/ "./src/shared/Comments/comments.css":
/*!******************************************!*\
  !*** ./src/shared/Comments/comments.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"authorContainer\": \"comments__authorContainer--3_Q8R\",\n\t\"author\": \"comments__author--GSLz1\",\n\t\"createdAt\": \"comments__createdAt--29q-C\",\n\t\"badge\": \"comments__badge--2HkMa\",\n\t\"body\": \"comments__body--2QZCh\",\n\t\"commentsContainer\": \"comments__commentsContainer--u3KI-\",\n\t\"buttonSend\": \"comments__buttonSend--3eL78\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Comments/comments.css?");

/***/ }),

/***/ "./src/shared/Comments/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Comments/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Comments */ \"./src/shared/Comments/Comments.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Comments/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Content = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\nfunction Content({ children }) {\n    return react_1.default.createElement(\"main\", { className: content_css_1.default.content }, children);\n}\nexports.Content = Content;\nContent.defaultProps = {\n    children: null,\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2O9-S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Dropdown = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\"));\nconst noop_1 = __webpack_require__(/*! ../../utils/js/noop */ \"./src/utils/js/noop.ts\");\nfunction Dropdown({ button, children, isOpen, onClose = noop_1.noop, onOpen = noop_1.noop, }) {\n    const [isDropdownOpen, setIsDropdownOpen] = (0, react_1.useState)(isOpen);\n    (0, react_1.useEffect)(() => setIsDropdownOpen(isOpen), [isOpen]);\n    (0, react_1.useEffect)(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen]);\n    const handleOpen = () => {\n        if (isOpen !== undefined) {\n            setIsDropdownOpen(!isDropdownOpen);\n        }\n    };\n    return (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container },\n        react_1.default.createElement(\"div\", { role: 'button', tabIndex: 0, onClick: handleOpen, onKeyDown: (event) => {\n                if (event.key === 'Enter' || event.key === ' ') {\n                    handleOpen();\n                }\n            } }, button),\n        isDropdownOpen && (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer },\n            react_1.default.createElement(\"div\", { role: 'menuitem', className: dropdown_css_1.default.list, onClick: () => setIsDropdownOpen(false), onKeyDown: (event) => {\n                    if (event.key === 'Escape' || event.key === 'Tab') {\n                        setIsDropdownOpen(false);\n                    }\n                }, tabIndex: 0 }, children)))));\n}\nexports.Dropdown = Dropdown;\nDropdown.defaultProps = {\n    isOpen: false,\n    onOpen: noop_1.noop,\n    onClose: noop_1.noop,\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.css":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--a5Jzh\",\n\t\"listContainer\": \"dropdown__listContainer--YYYB3\",\n\t\"list\": \"dropdown__list--23slg\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/GenericList/GenericList.tsx":
/*!************************************************!*\
  !*** ./src/shared/GenericList/GenericList.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.GenericList = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst genericlist_css_1 = __importDefault(__webpack_require__(/*! ./genericlist.css */ \"./src/shared/GenericList/genericlist.css\"));\nconst noop_1 = __webpack_require__(/*! ../../utils/js/noop */ \"./src/utils/js/noop.ts\");\nfunction GenericList({ list }) {\n    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(({ As = 'div', text, onClick = noop_1.noop, className, id, href, divider = false, icon, }) => {\n        return (react_1.default.createElement(As, { className: className, onClick: () => onClick(id), key: id, href: href },\n            icon,\n            react_1.default.createElement(\"span\", null, text),\n            divider && react_1.default.createElement(\"span\", { className: genericlist_css_1.default.divider })));\n    })));\n}\nexports.GenericList = GenericList;\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/GenericList.tsx?");

/***/ }),

/***/ "./src/shared/GenericList/genericlist.css":
/*!************************************************!*\
  !*** ./src/shared/GenericList/genericlist.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"divider\": \"genericlist__divider--2GxxU\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/genericlist.css?");

/***/ }),

/***/ "./src/shared/GenericList/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/GenericList/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./GenericList */ \"./src/shared/GenericList/GenericList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\nconst SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\nconst ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\nconst SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\nfunction Header() {\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\n}\nexports.Header = Header;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SearchBlock = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\nconst UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\nconst useUserData_1 = __webpack_require__(/*! ../../hooks/useUserData */ \"./src/shared/hooks/useUserData.ts\");\nfunction SearchBlock() {\n    const { data, loading } = (0, useUserData_1.useUserData)();\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));\n}\nexports.SearchBlock = SearchBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserBlock = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\"));\nconst Icon_1 = __webpack_require__(/*! ../../../Icon */ \"./src/shared/Icon/index.ts\");\nconst enums_1 = __webpack_require__(/*! ../../../../types/enums */ \"./src/types/enums.ts\");\nconst Break_1 = __webpack_require__(/*! ../../../Break */ \"./src/shared/Break/index.ts\");\nconst Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\nfunction UserBlock({ avatarSrc, username, loading }) {\n    return (react_1.default.createElement(\"a\", { href: `https://www.reddit.com/api/v1/authorize?client_id=${'pmDxCkcFEU8a5B-h7d0p4g'}&response_type=code&state=random_string&redirect_uri=https://railway.app/project/9bb076ed-b290-413e-8ab0-fc0378a2b5f7/auth&duration=permanent&scope=read submit identity`, className: userblock_css_1.default.userBox },\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc ? (react_1.default.createElement(\"img\", { src: avatarSrc, alt: 'user avatar', className: userblock_css_1.default.avatarImage })) : (react_1.default.createElement(Icon_1.Icon, { size: 50, name: enums_1.EIcons.anon }))),\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.username },\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\n            loading ? (react_1.default.createElement(Text_1.Text, { size: 28, color: enums_1.EColors.grey99 }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")) : (react_1.default.createElement(Text_1.Text, { size: 28, color: username ? enums_1.EColors.black : enums_1.EColors.grey99 }, username || 'Аноним')))));\n}\nexports.UserBlock = UserBlock;\nUserBlock.defaultProps = {\n    avatarSrc: null,\n    username: null,\n    loading: false,\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblock__userBox--24rEF\",\n\t\"avatarBox\": \"userblock__avatarBox--2OTfi\",\n\t\"avatarImage\": \"userblock__avatarImage--2ryXC\",\n\t\"username\": \"userblock__username--3bLc0\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--3aDPv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SortBlock = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\nfunction SortBlock() {\n    return react_1.default.createElement(\"div\", { className: sortblock_css_1.default.sortBlock }, \"sorting dropdown\");\n}\nexports.SortBlock = SortBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortblock__sortBlock--141aZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ThreadTitle = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Header/ThreadTitle/threadtitle.css\"));\nfunction ThreadTitle() {\n    return react_1.default.createElement(\"h1\", { className: threadtitle_css_1.default.threadTitle }, \"Header\");\n}\nexports.ThreadTitle = ThreadTitle;\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--oxugx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Icon = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\nconst icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\nconst enums_1 = __webpack_require__(/*! ../../types/enums */ \"./src/types/enums.ts\");\nconst icons_1 = __webpack_require__(/*! ../icons */ \"./src/shared/icons/index.ts\");\nconst IconSaveLight_1 = __webpack_require__(/*! ../icons/IconSaveLight */ \"./src/shared/icons/IconSaveLight.tsx\");\nconst icons = {\n    [enums_1.EIcons.hide]: react_1.default.createElement(icons_1.IconHide, null),\n    [enums_1.EIcons.comments]: react_1.default.createElement(icons_1.IconComments, null),\n    [enums_1.EIcons.save]: react_1.default.createElement(icons_1.IconSave, null),\n    [enums_1.EIcons.saveLight]: react_1.default.createElement(IconSaveLight_1.IconSaveLight, null),\n    [enums_1.EIcons.share]: react_1.default.createElement(icons_1.IconShare, null),\n    [enums_1.EIcons.shareLight]: react_1.default.createElement(icons_1.IconShareLight, null),\n    [enums_1.EIcons.complain]: react_1.default.createElement(icons_1.IconComplain, null),\n    [enums_1.EIcons.menuDots]: react_1.default.createElement(icons_1.IconMenuDots, null),\n    [enums_1.EIcons.anon]: react_1.default.createElement(icons_1.IconAnon, null),\n    [enums_1.EIcons.arrowDown]: react_1.default.createElement(icons_1.IconArrowDown, null),\n    [enums_1.EIcons.arrowUp]: react_1.default.createElement(icons_1.IconArrowUp, null),\n};\nfunction getIcon(key) {\n    if (key === undefined) {\n        return undefined;\n    }\n    return icons[key];\n}\nfunction Icon(props) {\n    const { size, mobileSize, tabletSize, desktopSize, name = enums_1.EIcons.hide, } = props;\n    const classes = (0, classnames_1.default)(icon_css_1.default[`s${size}`], {\n        [icon_css_1.default[`m${mobileSize}`]]: mobileSize,\n    }, {\n        [icon_css_1.default[`t${tabletSize}`]]: tabletSize,\n    }, {\n        [icon_css_1.default[`d${desktopSize}`]]: desktopSize,\n    });\n    return react_1.default.createElement(\"span\", { className: classes }, getIcon(name));\n}\nexports.Icon = Icon;\nIcon.defaultProps = {\n    size: null,\n    mobileSize: null,\n    tabletSize: null,\n    desktopSize: null,\n};\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/icon.css":
/*!**********************************!*\
  !*** ./src/shared/Icon/icon.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s50\": \"icon__s50--3qS3F\",\n\t\"s28\": \"icon__s28--2LTHN\",\n\t\"s20\": \"icon__s20--1h1Sg\",\n\t\"s16\": \"icon__s16--NYdak\",\n\t\"s14\": \"icon__s14--m4nyp\",\n\t\"s12\": \"icon__s12--LuYYL\",\n\t\"s10\": \"icon__s10--6UHq6\",\n\t\"black\": \"icon__black--1FC-N\",\n\t\"white\": \"icon__white--w_CCO\",\n\t\"orange\": \"icon__orange--2-WBH\",\n\t\"green\": \"icon__green--O3Yne\",\n\t\"greyF3\": \"icon__greyF3--1yOuv\",\n\t\"greyF4\": \"icon__greyF4--3S1TL\",\n\t\"greyEC\": \"icon__greyEC--lnEy6\",\n\t\"greyD9\": \"icon__greyD9--3FD59\",\n\t\"greyC4\": \"icon__greyC4--3r5XN\",\n\t\"grey99\": \"icon__grey99--137fk\",\n\t\"grey66\": \"icon__grey66--3hzw3\",\n\t\"m50\": \"icon__m50--1yBFW\",\n\t\"m28\": \"icon__m28--1atJZ\",\n\t\"m20\": \"icon__m20--22ACs\",\n\t\"m16\": \"icon__m16--1W2nF\",\n\t\"m14\": \"icon__m14--Pdbj_\",\n\t\"m12\": \"icon__m12--1-U0b\",\n\t\"m10\": \"icon__m10--2A792\",\n\t\"t50\": \"icon__t50--cIkH5\",\n\t\"t28\": \"icon__t28--2499c\",\n\t\"t20\": \"icon__t20--uj2iv\",\n\t\"t16\": \"icon__t16--2OInr\",\n\t\"t14\": \"icon__t14--1aldr\",\n\t\"t12\": \"icon__t12--3KfvD\",\n\t\"t10\": \"icon__t10--1yy-4\",\n\t\"d50\": \"icon__d50--Zzyqu\",\n\t\"d28\": \"icon__d28--2hxtm\",\n\t\"d20\": \"icon__d20--3J3ju\",\n\t\"d16\": \"icon__d16--3Gdce\",\n\t\"d14\": \"icon__d14--2AAv4\",\n\t\"d12\": \"icon__d12--29ZTk\",\n\t\"d10\": \"icon__d10--3846z\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Icon/icon.css?");

/***/ }),

/***/ "./src/shared/Icon/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Icon */ \"./src/shared/Icon/Icon.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Layout = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\nconst { layout } = layout_css_1.default;\nfunction Layout({ children }) {\n    return react_1.default.createElement(\"div\", { className: layout }, children);\n}\nexports.Layout = Layout;\nLayout.defaultProps = {\n    children: null,\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/Page404/Page404.tsx":
/*!****************************************!*\
  !*** ./src/shared/Page404/Page404.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Page404 = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst page404_css_1 = __importDefault(__webpack_require__(/*! ./page404.css */ \"./src/shared/Page404/page404.css\"));\nfunction Page404() {\n    return (react_1.default.createElement(\"div\", { className: page404_css_1.default.page },\n        react_1.default.createElement(\"div\", { className: page404_css_1.default.container },\n            react_1.default.createElement(\"div\", { className: page404_css_1.default.number }, \"404\"),\n            react_1.default.createElement(\"div\", { className: page404_css_1.default.string }, \"Not Found\"))));\n}\nexports.Page404 = Page404;\n\n\n//# sourceURL=webpack:///./src/shared/Page404/Page404.tsx?");

/***/ }),

/***/ "./src/shared/Page404/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Page404/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Page404 */ \"./src/shared/Page404/Page404.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Page404/index.ts?");

/***/ }),

/***/ "./src/shared/Page404/page404.css":
/*!****************************************!*\
  !*** ./src/shared/Page404/page404.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"page\": \"page404__page--13GYD\",\n\t\"container\": \"page404__container--2NHoK\",\n\t\"number\": \"page404__number--1bSer\",\n\t\"string\": \"page404__string--6pIBs\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Page404/page404.css?");

/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Post = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nconst post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/Post/post.css\"));\nconst Comments_1 = __webpack_require__(/*! ../Comments */ \"./src/shared/Comments/index.ts\");\nconst useCommentsData_1 = __webpack_require__(/*! ../hooks/useCommentsData */ \"./src/shared/hooks/useCommentsData.ts\");\nconst IconClose_1 = __webpack_require__(/*! ../icons/IconClose */ \"./src/shared/icons/IconClose.tsx\");\nconst CommentFormContainer_1 = __webpack_require__(/*! ../CommentFormContainer */ \"./src/shared/CommentFormContainer/index.ts\");\nconst postsContext_1 = __webpack_require__(/*! ../context/postsContext */ \"./src/shared/context/postsContext.tsx\");\nfunction Post() {\n    var _a;\n    const [postId, setPostId] = (0, react_1.useState)('');\n    const commentsData = (0, useCommentsData_1.useCommentsData)(postId)[0];\n    const ref = (0, react_1.useRef)(null);\n    const history = (0, react_router_dom_1.useHistory)();\n    const { data } = (0, react_1.useContext)(postsContext_1.postsContext);\n    let title = '';\n    data.forEach((post) => {\n        if (postId === post.postId) {\n            title = post.title;\n        }\n    });\n    (0, react_1.useEffect)(() => {\n        function handleClick(event) {\n            var _a;\n            if (event.target instanceof Node &&\n                !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\n                history.push('/posts');\n            }\n        }\n        document.addEventListener('click', handleClick);\n        if (window.location.pathname) {\n            setPostId(window.location.pathname.split('/')[2]);\n        }\n        return () => {\n            document.removeEventListener('click', handleClick);\n        };\n    }, [history]);\n    const node = document.getElementById('modal_root');\n    if (!node)\n        return null;\n    const btnModal = document.getElementById(`btnModal_${postId}`);\n    const { top } = (_a = btnModal === null || btnModal === void 0 ? void 0 : btnModal.getBoundingClientRect()) !== null && _a !== void 0 ? _a : {};\n    const elDistanceToTop = window.scrollY + (top !== null && top !== void 0 ? top : 0);\n    return react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref, style: { top: `${elDistanceToTop}px` } },\n        react_1.default.createElement(\"div\", { className: post_css_1.default.topPost },\n            react_1.default.createElement(\"h2\", { className: post_css_1.default.title }, title),\n            react_1.default.createElement(\"button\", { type: 'button', className: post_css_1.default.close, onClick: () => history.push('/posts') },\n                react_1.default.createElement(IconClose_1.IconClose, null))),\n        react_1.default.createElement(\"div\", { className: post_css_1.default.content },\n            react_1.default.createElement(\"p\", { className: post_css_1.default.description }, \"\\u0415\\u0441\\u0442\\u044C \\u043D\\u0430\\u0434 \\u0447\\u0435\\u043C \\u0437\\u0430\\u0434\\u0443\\u043C\\u0430\\u0442\\u044C\\u0441\\u044F: \\u0442\\u0449\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u044B\\u0435 \\u0438\\u0441\\u0441\\u043B\\u0435\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F \\u043A\\u043E\\u043D\\u043A\\u0443\\u0440\\u0435\\u043D\\u0442\\u043E\\u0432 \\u043F\\u0440\\u0435\\u0434\\u0441\\u0442\\u0430\\u0432\\u043B\\u044F\\u044E\\u0442 \\u0441\\u043E\\u0431\\u043E\\u0439 \\u043D\\u0435 \\u0447\\u0442\\u043E \\u0438\\u043D\\u043E\\u0435, \\u043A\\u0430\\u043A \\u043A\\u0432\\u0438\\u043D\\u0442\\u044D\\u0441\\u0441\\u0435\\u043D\\u0446\\u0438\\u044E \\u043F\\u043E\\u0431\\u0435\\u0434\\u044B \\u043C\\u0430\\u0440\\u043A\\u0435\\u0442\\u0438\\u043D\\u0433\\u0430 \\u043D\\u0430\\u0434 \\u0440\\u0430\\u0437\\u0443\\u043C\\u043E\\u043C \\u0438 \\u0434\\u043E\\u043B\\u0436\\u043D\\u044B \\u0431\\u044B\\u0442\\u044C \\u0430\\u0441\\u0441\\u043E\\u0446\\u0438\\u0430\\u0442\\u0438\\u0432\\u043D\\u043E \\u0440\\u0430\\u0441\\u043F\\u0440\\u0435\\u0434\\u0435\\u043B\\u0435\\u043D\\u044B \\u043F\\u043E \\u043E\\u0442\\u0440\\u0430\\u0441\\u043B\\u044F\\u043C. \\u041F\\u0440\\u0435\\u0436\\u0434\\u0435 \\u0432\\u0441\\u0435\\u0433\\u043E, \\u043D\\u0430\\u0447\\u0430\\u043B\\u043E \\u043F\\u043E\\u0432\\u0441\\u0435\\u0434\\u043D\\u0435\\u0432\\u043D\\u043E\\u0439 \\u0440\\u0430\\u0431\\u043E\\u0442\\u044B \\u043F\\u043E \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u044E \\u043F\\u043E\\u0437\\u0438\\u0446\\u0438\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0437\\u043D\\u0430\\u0447\\u043D\\u043E \\u0444\\u0438\\u043A\\u0441\\u0438\\u0440\\u0443\\u0435\\u0442 \\u043D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C \\u043A\\u043B\\u0430\\u0441\\u0442\\u0435\\u0440\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438 \\u0443\\u0441\\u0438\\u043B\\u0438\\u0439. \\u041D\\u043E \\u0441\\u0442\\u043E\\u0440\\u043E\\u043D\\u043D\\u0438\\u043A\\u0438 \\u0442\\u043E\\u0442\\u0430\\u043B\\u0438\\u0442\\u0430\\u0440\\u0438\\u0437\\u043C\\u0430 \\u0432 \\u043D\\u0430\\u0443\\u043A\\u0435 \\u0438 \\u043F\\u043E \\u0441\\u0435\\u0439 \\u0434\\u0435\\u043D\\u044C \\u043E\\u0441\\u0442\\u0430\\u044E\\u0442\\u0441\\u044F \\u0443\\u0434\\u0435\\u043B\\u043E\\u043C \\u043B\\u0438\\u0431\\u0435\\u0440\\u0430\\u043B\\u043E\\u0432, \\u043A\\u043E\\u0442\\u043E\\u0440\\u044B\\u0435 \\u0436\\u0430\\u0436\\u0434\\u0443\\u0442 \\u0431\\u044B\\u0442\\u044C \\u043F\\u0440\\u0435\\u0432\\u0440\\u0430\\u0449\\u0435\\u043D\\u044B \\u0432 \\u043F\\u043E\\u0441\\u043C\\u0435\\u0448\\u0438\\u0449\\u0435, \\u0445\\u043E\\u0442\\u044F \\u0441\\u0430\\u043C\\u043E \\u0438\\u0445 \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043F\\u0440\\u0438\\u043D\\u043E\\u0441\\u0438\\u0442 \\u043D\\u0435\\u0441\\u043E\\u043C\\u043D\\u0435\\u043D\\u043D\\u0443\\u044E \\u043F\\u043E\\u043B\\u044C\\u0437\\u0443 \\u043E\\u0431\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443.\"),\n            react_1.default.createElement(\"p\", { className: post_css_1.default.description }, \"\\u0411\\u0435\\u0437\\u0443\\u0441\\u043B\\u043E\\u0432\\u043D\\u043E, \\u0433\\u043B\\u0443\\u0431\\u043E\\u043A\\u0438\\u0439 \\u0443\\u0440\\u043E\\u0432\\u0435\\u043D\\u044C \\u043F\\u043E\\u0433\\u0440\\u0443\\u0436\\u0435\\u043D\\u0438\\u044F \\u0441\\u043E\\u0437\\u0434\\u0430\\u0451\\u0442 \\u043D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C \\u0432\\u043A\\u043B\\u044E\\u0447\\u0435\\u043D\\u0438\\u044F \\u0432 \\u043F\\u0440\\u043E\\u0438\\u0437\\u0432\\u043E\\u0434\\u0441\\u0442\\u0432\\u0435\\u043D\\u043D\\u044B\\u0439 \\u043F\\u043B\\u0430\\u043D \\u0446\\u0435\\u043B\\u043E\\u0433\\u043E \\u0440\\u044F\\u0434\\u0430 \\u0432\\u043D\\u0435\\u043E\\u0447\\u0435\\u0440\\u0435\\u0434\\u043D\\u044B\\u0445 \\u043C\\u0435\\u0440\\u043E\\u043F\\u0440\\u0438\\u044F\\u0442\\u0438\\u0439 \\u0441 \\u0443\\u0447\\u0451\\u0442\\u043E\\u043C \\u043A\\u043E\\u043C\\u043F\\u043B\\u0435\\u043A\\u0441\\u0430 \\u0441\\u0438\\u0441\\u0442\\u0435\\u043C\\u044B \\u043C\\u0430\\u0441\\u0441\\u043E\\u0432\\u043E\\u0433\\u043E \\u0443\\u0447\\u0430\\u0441\\u0442\\u0438\\u044F. \\u0412\\u043D\\u0435\\u0437\\u0430\\u043F\\u043D\\u043E, \\u0441\\u0434\\u0435\\u043B\\u0430\\u043D\\u043D\\u044B\\u0435 \\u043D\\u0430 \\u0431\\u0430\\u0437\\u0435 \\u0438\\u043D\\u0442\\u0435\\u0440\\u043D\\u0435\\u0442-\\u0430\\u043D\\u0430\\u043B\\u0438\\u0442\\u0438\\u043A\\u0438 \\u0432\\u044B\\u0432\\u043E\\u0434\\u044B \\u043E\\u0441\\u0432\\u0435\\u0449\\u0430\\u044E\\u0442 \\u0447\\u0440\\u0435\\u0437\\u0432\\u044B\\u0447\\u0430\\u0439\\u043D\\u043E \\u0438\\u043D\\u0442\\u0435\\u0440\\u0435\\u0441\\u043D\\u044B\\u0435 \\u043E\\u0441\\u043E\\u0431\\u0435\\u043D\\u043D\\u043E\\u0441\\u0442\\u0438 \\u043A\\u0430\\u0440\\u0442\\u0438\\u043D\\u044B \\u0432 \\u0446\\u0435\\u043B\\u043E\\u043C, \\u043E\\u0434\\u043D\\u0430\\u043A\\u043E \\u043A\\u043E\\u043D\\u043A\\u0440\\u0435\\u0442\\u043D\\u044B\\u0435 \\u0432\\u044B\\u0432\\u043E\\u0434\\u044B, \\u0440\\u0430\\u0437\\u0443\\u043C\\u0435\\u0435\\u0442\\u0441\\u044F, \\u043E\\u043F\\u0438\\u0441\\u0430\\u043D\\u044B \\u043C\\u0430\\u043A\\u0441\\u0438\\u043C\\u0430\\u043B\\u044C\\u043D\\u043E \\u043F\\u043E\\u0434\\u0440\\u043E\\u0431\\u043D\\u043E.\"),\n            react_1.default.createElement(\"p\", { className: post_css_1.default.description }, \"\\u0420\\u0430\\u0437\\u043D\\u043E\\u043E\\u0431\\u0440\\u0430\\u0437\\u043D\\u044B\\u0439 \\u0438 \\u0431\\u043E\\u0433\\u0430\\u0442\\u044B\\u0439 \\u043E\\u043F\\u044B\\u0442 \\u0433\\u043E\\u0432\\u043E\\u0440\\u0438\\u0442 \\u043D\\u0430\\u043C, \\u0447\\u0442\\u043E \\u0432\\u044B\\u0431\\u0440\\u0430\\u043D\\u043D\\u044B\\u0439 \\u043D\\u0430\\u043C\\u0438 \\u0438\\u043D\\u043D\\u043E\\u0432\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u044B\\u0439 \\u043F\\u0443\\u0442\\u044C \\u043E\\u0431\\u0435\\u0441\\u043F\\u0435\\u0447\\u0438\\u0432\\u0430\\u0435\\u0442 \\u0448\\u0438\\u0440\\u043E\\u043A\\u043E\\u043C\\u0443 \\u043A\\u0440\\u0443\\u0433\\u0443 (\\u0441\\u043F\\u0435\\u0446\\u0438\\u0430\\u043B\\u0438\\u0441\\u0442\\u043E\\u0432) \\u0443\\u0447\\u0430\\u0441\\u0442\\u0438\\u0435 \\u0432 \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u0438 \\u043D\\u043E\\u0432\\u044B\\u0445 \\u043F\\u0440\\u0438\\u043D\\u0446\\u0438\\u043F\\u043E\\u0432 \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F \\u043C\\u0430\\u0442\\u0435\\u0440\\u0438\\u0430\\u043B\\u044C\\u043D\\u043E-\\u0442\\u0435\\u0445\\u043D\\u0438\\u0447\\u0435\\u0441\\u043A\\u043E\\u0439 \\u0438 \\u043A\\u0430\\u0434\\u0440\\u043E\\u0432\\u043E\\u0439 \\u0431\\u0430\\u0437\\u044B. \\u0422\\u0430\\u043A\\u0436\\u0435 \\u043A\\u0430\\u043A \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443\\u044E\\u0449\\u0430\\u044F \\u0442\\u0435\\u043E\\u0440\\u0438\\u044F \\u0432 \\u0437\\u043D\\u0430\\u0447\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0439 \\u0441\\u0442\\u0435\\u043F\\u0435\\u043D\\u0438 \\u043E\\u0431\\u0443\\u0441\\u043B\\u043E\\u0432\\u043B\\u0438\\u0432\\u0430\\u0435\\u0442 \\u0432\\u0430\\u0436\\u043D\\u043E\\u0441\\u0442\\u044C \\u0431\\u043B\\u0430\\u0433\\u043E\\u043F\\u0440\\u0438\\u044F\\u0442\\u043D\\u044B\\u0445 \\u043F\\u0435\\u0440\\u0441\\u043F\\u0435\\u043A\\u0442\\u0438\\u0432. \\u0414\\u043B\\u044F \\u0441\\u043E\\u0432\\u0440\\u0435\\u043C\\u0435\\u043D\\u043D\\u043E\\u0433\\u043E \\u043C\\u0438\\u0440\\u0430 \\u043A\\u043E\\u043D\\u0441\\u0443\\u043B\\u044C\\u0442\\u0430\\u0446\\u0438\\u044F \\u0441 \\u0448\\u0438\\u0440\\u043E\\u043A\\u0438\\u043C \\u0430\\u043A\\u0442\\u0438\\u0432\\u043E\\u043C \\u043E\\u0434\\u043D\\u043E\\u0437\\u043D\\u0430\\u0447\\u043D\\u043E \\u043E\\u043F\\u0440\\u0435\\u0434\\u0435\\u043B\\u044F\\u0435\\u0442 \\u043A\\u0430\\u0436\\u0434\\u043E\\u0433\\u043E \\u0443\\u0447\\u0430\\u0441\\u0442\\u043D\\u0438\\u043A\\u0430 \\u043A\\u0430\\u043A \\u0441\\u043F\\u043E\\u0441\\u043E\\u0431\\u043D\\u043E\\u0433\\u043E \\u043F\\u0440\\u0438\\u043D\\u0438\\u043C\\u0430\\u0442\\u044C \\u0441\\u043E\\u0431\\u0441\\u0442\\u0432\\u0435\\u043D\\u043D\\u044B\\u0435 \\u0440\\u0435\\u0448\\u0435\\u043D\\u0438\\u044F \\u043A\\u0430\\u0441\\u0430\\u0435\\u043C\\u043E \\u043F\\u0440\\u0438\\u043E\\u0440\\u0438\\u0442\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438 \\u0440\\u0430\\u0437\\u0443\\u043C\\u0430 \\u043D\\u0430\\u0434 \\u044D\\u043C\\u043E\\u0446\\u0438\\u044F\\u043C\\u0438!\")),\n        react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, null),\n        react_1.default.createElement(\"div\", { className: post_css_1.default.sortContainer },\n            react_1.default.createElement(\"label\", { className: post_css_1.default.labelComment, htmlFor: 'sortComments' }, \"\\u0421\\u043E\\u0440\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C \\u043F\\u043E:\"),\n            react_1.default.createElement(\"select\", { className: post_css_1.default.selectComment, name: 'sortComments', id: 'sortComments' },\n                react_1.default.createElement(\"option\", { value: '\\u041B\\u0443\\u0447\\u0448\\u0438\\u0435' }, \"\\u041B\\u0443\\u0447\\u0448\\u0438\\u0435\"),\n                react_1.default.createElement(\"option\", { value: '\\u041D\\u043E\\u0432\\u044B\\u0435' }, \"\\u041D\\u043E\\u0432\\u044B\\u0435\"))),\n        react_1.default.createElement(\"div\", { className: post_css_1.default.divider }),\n        commentsData.map((item) => (react_1.default.createElement(Comments_1.Comments, { key: item.commentId, commentId: item.commentId, author: item.author, parentId: item.parentId, body: item.body, createdAt: item.createdAt })))), node);\n}\nexports.Post = Post;\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Post/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Post/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/Post/Post.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Post/index.ts?");

/***/ }),

/***/ "./src/shared/Post/post.css":
/*!**********************************!*\
  !*** ./src/shared/Post/post.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"post__modal--yRo-c\",\n\t\"topPost\": \"post__topPost--3zsH_\",\n\t\"title\": \"post__title--xhpd2\",\n\t\"content\": \"post__content--2gFMc\",\n\t\"description\": \"post__description--1s0lz\",\n\t\"close\": \"post__close--1HSqz\",\n\t\"sortContainer\": \"post__sortContainer--2081u\",\n\t\"labelComment\": \"post__labelComment--2Nust\",\n\t\"selectComment\": \"post__selectComment--3jumu\",\n\t\"divider\": \"post__divider--2etHm\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/post.css?");

/***/ }),

/***/ "./src/shared/ReplayForm/ReplyForm.tsx":
/*!*********************************************!*\
  !*** ./src/shared/ReplayForm/ReplyForm.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ReplyForm = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst replyform_css_1 = __importDefault(__webpack_require__(/*! ./replyform.css */ \"./src/shared/ReplayForm/replyform.css\"));\nconst replyContext_1 = __webpack_require__(/*! ../context/replyContext */ \"./src/shared/context/replyContext.ts\");\nfunction ReplyForm() {\n    const refReply = (0, react_1.useRef)(null);\n    const { value, onChange } = (0, react_1.useContext)(replyContext_1.replyContext);\n    // ! uncontrolled\n    // const [defaultValue, setDefaultValue] = useState('');\n    // useEffect(() => {\n    //   return setDefaultValue('Michael Rogov, ');\n    // }, []);\n    (0, react_1.useEffect)(() => {\n        return onChange('Michael Rogov, ');\n    }, [onChange]);\n    (0, react_1.useEffect)(() => {\n        var _a;\n        return (_a = refReply.current) === null || _a === void 0 ? void 0 : _a.focus();\n    }, []);\n    function handleChange(event) {\n        onChange(event.target.value);\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n        console.log(value);\n    }\n    return (react_1.default.createElement(\"form\", { className: replyform_css_1.default.form, onSubmit: handleSubmit },\n        react_1.default.createElement(\"textarea\", { className: replyform_css_1.default.input, ref: refReply, \n            // defaultValue={defaultValue}\n            value: value, onChange: handleChange }),\n        react_1.default.createElement(\"button\", { type: 'submit', className: replyform_css_1.default.button }, \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\")));\n}\nexports.ReplyForm = ReplyForm;\n\n\n//# sourceURL=webpack:///./src/shared/ReplayForm/ReplyForm.tsx?");

/***/ }),

/***/ "./src/shared/ReplayForm/index.ts":
/*!****************************************!*\
  !*** ./src/shared/ReplayForm/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ReplyForm */ \"./src/shared/ReplayForm/ReplyForm.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/ReplayForm/index.ts?");

/***/ }),

/***/ "./src/shared/ReplayForm/replyform.css":
/*!*********************************************!*\
  !*** ./src/shared/ReplayForm/replyform.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"replyform__form--LEv2O\",\n\t\"input\": \"replyform__input--1l_YH\",\n\t\"button\": \"replyform__button--2MZ2L\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/ReplayForm/replyform.css?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Text = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\nconst text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\"));\nconst enums_1 = __webpack_require__(/*! ../../types/enums */ \"./src/types/enums.ts\");\nfunction Text(props) {\n    const { As = 'span', children, size, bold = false, mobileSize, tabletSize, desktopSize, color = enums_1.EColors.black, } = props;\n    const classes = (0, classnames_1.default)(text_css_1.default[`s${size}`], { [text_css_1.default.bold]: bold }, {\n        [text_css_1.default[`m${mobileSize}`]]: mobileSize,\n    }, {\n        [text_css_1.default[`t${tabletSize}`]]: tabletSize,\n    }, {\n        [text_css_1.default[`d${desktopSize}`]]: desktopSize,\n    }, text_css_1.default[color]);\n    return react_1.default.createElement(As, { className: classes }, children);\n}\nexports.Text = Text;\nText.defaultProps = {\n    As: 'span',\n    children: null,\n    mobileSize: null,\n    tabletSize: null,\n    desktopSize: null,\n    color: null,\n    bold: false,\n};\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Text/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/Text/Text.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Text/index.ts?");

/***/ }),

/***/ "./src/shared/Text/text.css":
/*!**********************************!*\
  !*** ./src/shared/Text/text.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s28\": \"text__s28--Puvgs\",\n\t\"s20\": \"text__s20--3Xq66\",\n\t\"s16\": \"text__s16--G_lUr\",\n\t\"s14\": \"text__s14--jvCoO\",\n\t\"s12\": \"text__s12--2S2T2\",\n\t\"s10\": \"text__s10--DYLfy\",\n\t\"bold\": \"text__bold--gb02H\",\n\t\"black\": \"text__black--1zchg\",\n\t\"white\": \"text__white--13JGE\",\n\t\"orange\": \"text__orange--1RyAM\",\n\t\"green\": \"text__green--3mYQn\",\n\t\"greyF3\": \"text__greyF3--2Lfsi\",\n\t\"greyF4\": \"text__greyF4--V0fR0\",\n\t\"greyEC\": \"text__greyEC--2krZR\",\n\t\"greyD9\": \"text__greyD9--7iRFr\",\n\t\"greyC4\": \"text__greyC4--3oiNM\",\n\t\"grey99\": \"text__grey99--35u3B\",\n\t\"grey66\": \"text__grey66--373uw\",\n\t\"m28\": \"text__m28--2u2zs\",\n\t\"m20\": \"text__m20--1gFlM\",\n\t\"m16\": \"text__m16--cSY4u\",\n\t\"m14\": \"text__m14--s6pnr\",\n\t\"m12\": \"text__m12--1W0av\",\n\t\"m10\": \"text__m10--UtIkW\",\n\t\"t28\": \"text__t28--A4rHF\",\n\t\"t20\": \"text__t20--78tCz\",\n\t\"t16\": \"text__t16--nkVMz\",\n\t\"t14\": \"text__t14--1Rj72\",\n\t\"t12\": \"text__t12--7txjW\",\n\t\"t10\": \"text__t10--n2R7f\",\n\t\"d28\": \"text__d28--3oIok\",\n\t\"d20\": \"text__d20--uwHxr\",\n\t\"d16\": \"text__d16--1Pwd1\",\n\t\"d14\": \"text__d14--3Futo\",\n\t\"d12\": \"text__d12--5X_qc\",\n\t\"d10\": \"text__d10--3pWnc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.css?");

/***/ }),

/***/ "./src/shared/context/postsContext.tsx":
/*!*********************************************!*\
  !*** ./src/shared/context/postsContext.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PostsContextProvider = exports.postsContext = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst usePostsData_1 = __webpack_require__(/*! ../hooks/usePostsData */ \"./src/shared/hooks/usePostsData.ts\");\nconst noop_1 = __webpack_require__(/*! ../../utils/js/noop */ \"./src/utils/js/noop.ts\");\nexports.postsContext = react_1.default.createContext({\n    data: [],\n    loading: false,\n    errorLoading: '',\n    bottomOfList: react_1.default.createRef(),\n    count: 0,\n    handleClick: noop_1.noop,\n});\nfunction PostsContextProvider({ children, }) {\n    const { data, loading, errorLoading, bottomOfList, count, handleClick } = (0, usePostsData_1.usePostsData)();\n    const contextValue = (0, react_1.useMemo)(() => ({\n        data,\n        loading,\n        errorLoading,\n        bottomOfList,\n        count,\n        handleClick,\n    }), [data, loading, errorLoading, bottomOfList, count, handleClick]);\n    return (react_1.default.createElement(exports.postsContext.Provider, { value: contextValue }, children));\n}\nexports.PostsContextProvider = PostsContextProvider;\n\n\n//# sourceURL=webpack:///./src/shared/context/postsContext.tsx?");

/***/ }),

/***/ "./src/shared/context/replyContext.ts":
/*!********************************************!*\
  !*** ./src/shared/context/replyContext.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.replyContext = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst noop_1 = __webpack_require__(/*! ../../utils/js/noop */ \"./src/utils/js/noop.ts\");\nexports.replyContext = react_1.default.createContext({\n    value: '',\n    onChange: noop_1.noop,\n});\n\n\n//# sourceURL=webpack:///./src/shared/context/replyContext.ts?");

/***/ }),

/***/ "./src/shared/hooks/useClickOut.ts":
/*!*****************************************!*\
  !*** ./src/shared/hooks/useClickOut.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useClickOut = void 0;\nconst react_1 = __webpack_require__(/*! react */ \"react\");\nfunction useClickOut(onClose) {\n    const ref = (0, react_1.useRef)(null);\n    (0, react_1.useEffect)(() => {\n        function handleClick(event) {\n            var _a;\n            if (event.target instanceof Node &&\n                !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\n                onClose === null || onClose === void 0 ? void 0 : onClose();\n            }\n        }\n        document.addEventListener('click', handleClick);\n        return () => {\n            document.removeEventListener('click', handleClick);\n        };\n    }, []);\n    return ref;\n}\nexports.useClickOut = useClickOut;\n\n\n//# sourceURL=webpack:///./src/shared/hooks/useClickOut.ts?");

/***/ }),

/***/ "./src/shared/hooks/useCommentsData.ts":
/*!*********************************************!*\
  !*** ./src/shared/hooks/useCommentsData.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useCommentsData = void 0;\nconst react_1 = __webpack_require__(/*! react */ \"react\");\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nfunction useCommentsData(postId) {\n    const [data, setData] = (0, react_1.useState)([]);\n    const token = (0, react_redux_1.useSelector)((state) => state.token.token);\n    const dispatch = (0, react_redux_1.useDispatch)();\n    (0, react_1.useEffect)(() => {\n        dispatch({ type: 'COMMENTS_REQUEST' });\n        if (!token || token === 'undefined')\n            return;\n        axios_1.default\n            .get(`https://oauth.reddit.com/comments/${postId}`, {\n            headers: { Authorization: `bearer ${token}` },\n        })\n            .then((res) => {\n            var _a;\n            const commentsData = (_a = res.data) === null || _a === void 0 ? void 0 : _a[1].data.children.map((item) => ({\n                commentId: item.data.id,\n                parentId: item.data.parent_id,\n                author: item.data.author,\n                body: item.data.body,\n                createdAt: item.data.created_utc,\n            }));\n            setData(commentsData);\n            dispatch({ type: 'COMMENTS_REQUEST_SUCCESS' });\n        })\n            .catch((error) => {\n            console.log(String(error));\n            dispatch({ type: 'COMMENTS_REQUEST_ERROR' });\n        });\n    }, [token, postId, dispatch]);\n    return [data];\n}\nexports.useCommentsData = useCommentsData;\n\n\n//# sourceURL=webpack:///./src/shared/hooks/useCommentsData.ts?");

/***/ }),

/***/ "./src/shared/hooks/usePostsData.ts":
/*!******************************************!*\
  !*** ./src/shared/hooks/usePostsData.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.usePostsData = void 0;\n/* eslint-disable camelcase */\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nconst react_1 = __webpack_require__(/*! react */ \"react\");\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nfunction usePostsData() {\n    const [data, setData] = (0, react_1.useState)([]);\n    const [nextAfter, setNextAfter] = (0, react_1.useState)('');\n    const [loading, setLoading] = (0, react_1.useState)(false);\n    const [errorLoading, setErrorLoading] = (0, react_1.useState)('');\n    const [count, setCount] = (0, react_1.useState)(0);\n    const token = (0, react_redux_1.useSelector)((state) => state.token.token);\n    const dispatch = (0, react_redux_1.useDispatch)();\n    const bottomOfList = (0, react_1.useRef)(null);\n    const handleClick = () => {\n        setCount(0);\n    };\n    (0, react_1.useEffect)(() => {\n        dispatch({ type: 'POSTS_REQUEST' });\n        if (!token || token === 'undefined')\n            return;\n        function load() {\n            return __awaiter(this, void 0, void 0, function* () {\n                setLoading(true);\n                setErrorLoading('');\n                try {\n                    const res = yield axios_1.default.get('https://oauth.reddit.com/best.json?sr_detail=true', {\n                        headers: { Authorization: `bearer ${token}` },\n                        params: {\n                            limit: 10,\n                            after: nextAfter,\n                        },\n                    });\n                    const postsData = res.data.data.children.map((item) => {\n                        var _a;\n                        return ({\n                            postId: item.data.id,\n                            title: item.data.title,\n                            author: item.data.author,\n                            avatarSrc: item.data.sr_detail.icon_img\n                                ? item.data.sr_detail.icon_img\n                                : 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg',\n                            previewImg: item.data.preview\n                                ? (_a = item.data.preview.images) === null || _a === void 0 ? void 0 : _a[0].source.url.replace(/(&amp;)/g, '&')\n                                : 'https://i.ibb.co/HtCW9GN/noimage.png',\n                            createdAt: item.data.sr_detail.created_utc,\n                            rating: item.data.ups,\n                        });\n                    });\n                    setData((prevChildren) => prevChildren.concat(...postsData));\n                    const { after } = res.data.data;\n                    setNextAfter(after);\n                    if (count < 3) {\n                        const acc = count + 1;\n                        setCount(acc);\n                    }\n                    dispatch({ type: 'POSTS_REQUEST_SUCCESS' });\n                    setLoading(false);\n                }\n                catch (error) {\n                    setErrorLoading(String(error));\n                    dispatch({ type: 'POSTS_REQUEST_ERROR' });\n                    setLoading(false);\n                }\n                return undefined;\n            });\n        }\n        const observer = new IntersectionObserver((entries) => {\n            if (entries[0].isIntersecting) {\n                load();\n            }\n        }, {\n            rootMargin: '10px',\n        });\n        if (bottomOfList.current) {\n            observer.observe(bottomOfList.current);\n        }\n        // eslint-disable-next-line consistent-return\n        return () => {\n            if (bottomOfList.current) {\n                observer.unobserve(bottomOfList.current);\n            }\n        };\n    }, [token, dispatch, nextAfter, count]);\n    return { data, loading, errorLoading, bottomOfList, count, handleClick };\n}\nexports.usePostsData = usePostsData;\n\n\n//# sourceURL=webpack:///./src/shared/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/shared/hooks/useUserData.ts":
/*!*****************************************!*\
  !*** ./src/shared/hooks/useUserData.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useUserData = void 0;\nconst react_1 = __webpack_require__(/*! react */ \"react\");\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/shared/store/me/actions.ts\");\nfunction useUserData() {\n    const data = (0, react_redux_1.useSelector)((state) => state.me.data);\n    const loading = (0, react_redux_1.useSelector)((state) => state.me.loading);\n    const token = (0, react_redux_1.useSelector)((state) => state.token.token);\n    const dispatch = (0, react_redux_1.useDispatch)();\n    (0, react_1.useEffect)(() => {\n        if (!token || token === 'undefined')\n            return;\n        dispatch((0, actions_1.meRequestAsync)());\n    }, [token, dispatch]);\n    return {\n        data,\n        loading,\n    };\n}\nexports.useUserData = useUserData;\n\n\n//# sourceURL=webpack:///./src/shared/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/shared/icons/IconAnon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/IconAnon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconAnon = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconAnon() {\n    return (react_1.default.createElement(\"svg\", { viewBox: '0 0 50 50', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },\n        react_1.default.createElement(\"path\", { d: 'M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z', fill: '#D9D9D9' })));\n}\nexports.IconAnon = IconAnon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconAnon.tsx?");

/***/ }),

/***/ "./src/shared/icons/IconArrowDown.tsx":
/*!********************************************!*\
  !*** ./src/shared/icons/IconArrowDown.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconArrowDown = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconArrowDown() {\n    return (react_1.default.createElement(\"svg\", { width: '19', height: '10', viewBox: '0 0 19 10', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },\n        react_1.default.createElement(\"path\", { d: 'M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z', fill: '#D9D9D9' })));\n}\nexports.IconArrowDown = IconArrowDown;\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconArrowDown.tsx?");

/***/ }),

/***/ "./src/shared/icons/IconArrowUp.tsx":
/*!******************************************!*\
  !*** ./src/shared/icons/IconArrowUp.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconArrowUp = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconArrowUp() {\n    return (react_1.default.createElement(\"svg\", { width: '19', height: '10', viewBox: '0 0 19 10', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },\n        react_1.default.createElement(\"path\", { d: 'M9.5 0L0 10H19L9.5 0Z', fill: '#C4C4C4' })));\n}\nexports.IconArrowUp = IconArrowUp;\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconArrowUp.tsx?");

/***/ }),

/***/ "./src/shared/icons/IconClose.tsx":
/*!****************************************!*\
  !*** ./src/shared/icons/IconClose.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconClose = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconClose() {\n    return (react_1.default.createElement(\"svg\", { width: '21', height: '21', viewBox: '0 0 21 21', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },\n        react_1.default.createElement(\"path\", { d: 'M19.7991 3.05176e-05L20.7419 0.942838L0.94289 20.7418L8.27312e-05 19.799L19.7991 3.05176e-05Z', fill: '#ADADAD' }),\n        react_1.default.createElement(\"path\", { d: 'M20.7418 19.799L19.799 20.7418L2.47121e-05 0.942798L0.942833 -1.04904e-05L20.7418 19.799Z', fill: '#ADADAD' })));\n}\nexports.IconClose = IconClose;\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconClose.tsx?");

/***/ }),

/***/ "./src/shared/icons/IconComments.tsx":
/*!*******************************************!*\
  !*** ./src/shared/icons/IconComments.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconComments = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconComments() {\n    return (react_1.default.createElement(\"svg\", { viewBox: '0 0 15 15', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },\n        react_1.default.createElement(\"path\", { d: 'M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z', fill: '#C4C4C4' })));\n}\nexports.IconComments = IconComments;\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconComments.tsx?");

/***/ }),

/***/ "./src/shared/icons/IconComplain.tsx":
/*!*******************************************!*\
  !*** ./src/shared/icons/IconComplain.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconComplain = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconComplain() {\n    return (react_1.default.createElement(\"svg\", { viewBox: '0 0 14 12', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },\n        react_1.default.createElement(\"path\", { d: 'M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z', fill: '#999999' })));\n}\nexports.IconComplain = IconComplain;\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconComplain.tsx?");

/***/ }),

/***/ "./src/shared/icons/IconHide.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/IconHide.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconHide = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconHide() {\n    return (react_1.default.createElement(\"svg\", { viewBox: '0 0 12 12', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },\n        react_1.default.createElement(\"path\", { d: 'M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z', fill: '#999999' })));\n}\nexports.IconHide = IconHide;\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconHide.tsx?");

/***/ }),

/***/ "./src/shared/icons/IconMenuDots.tsx":
/*!*******************************************!*\
  !*** ./src/shared/icons/IconMenuDots.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconMenuDots = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconMenuDots() {\n    return (react_1.default.createElement(\"svg\", { width: '5', height: '20', viewBox: '0 0 5 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },\n        react_1.default.createElement(\"circle\", { cx: '2.5', cy: '2.5', r: '2.5', fill: '#D9D9D9' }),\n        react_1.default.createElement(\"circle\", { cx: '2.5', cy: '10', r: '2.5', fill: '#D9D9D9' }),\n        react_1.default.createElement(\"circle\", { cx: '2.5', cy: '17.5', r: '2.5', fill: '#D9D9D9' })));\n}\nexports.IconMenuDots = IconMenuDots;\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconMenuDots.tsx?");

/***/ }),

/***/ "./src/shared/icons/IconSave.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/IconSave.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconSave = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconSave() {\n    return (react_1.default.createElement(\"svg\", { viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },\n        react_1.default.createElement(\"circle\", { cx: '10', cy: '10', r: '10', fill: '#C4C4C4' }),\n        react_1.default.createElement(\"path\", { d: 'M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z', fill: 'white' })));\n}\nexports.IconSave = IconSave;\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconSave.tsx?");

/***/ }),

/***/ "./src/shared/icons/IconSaveLight.tsx":
/*!********************************************!*\
  !*** ./src/shared/icons/IconSaveLight.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconSaveLight = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconSaveLight() {\n    return (react_1.default.createElement(\"svg\", { viewBox: '0 0 14 14', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },\n        react_1.default.createElement(\"path\", { d: 'M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z', fill: '#979797' })));\n}\nexports.IconSaveLight = IconSaveLight;\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconSaveLight.tsx?");

/***/ }),

/***/ "./src/shared/icons/IconShare.tsx":
/*!****************************************!*\
  !*** ./src/shared/icons/IconShare.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconShare = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconShare() {\n    return (react_1.default.createElement(\"svg\", { viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },\n        react_1.default.createElement(\"circle\", { cx: '10', cy: '10', r: '10', fill: '#C4C4C4' }),\n        react_1.default.createElement(\"path\", { d: 'M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z', fill: 'white' })));\n}\nexports.IconShare = IconShare;\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconShare.tsx?");

/***/ }),

/***/ "./src/shared/icons/IconShareLight.tsx":
/*!*********************************************!*\
  !*** ./src/shared/icons/IconShareLight.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconShareLight = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconShareLight() {\n    return (react_1.default.createElement(\"svg\", { viewBox: '0 0 12 14', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },\n        react_1.default.createElement(\"path\", { d: 'M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z', fill: '#999999' })));\n}\nexports.IconShareLight = IconShareLight;\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconShareLight.tsx?");

/***/ }),

/***/ "./src/shared/icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./IconArrowDown */ \"./src/shared/icons/IconArrowDown.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./IconArrowUp */ \"./src/shared/icons/IconArrowUp.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./IconComments */ \"./src/shared/icons/IconComments.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./IconComplain */ \"./src/shared/icons/IconComplain.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./IconHide */ \"./src/shared/icons/IconHide.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./IconMenuDots */ \"./src/shared/icons/IconMenuDots.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./IconSave */ \"./src/shared/icons/IconSave.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./IconShare */ \"./src/shared/icons/IconShare.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./IconShareLight */ \"./src/shared/icons/IconShareLight.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./IconSaveLight */ \"./src/shared/icons/IconSaveLight.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./IconAnon */ \"./src/shared/icons/IconAnon.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/icons/index.ts?");

/***/ }),

/***/ "./src/shared/store/me/actions.ts":
/*!****************************************!*\
  !*** ./src/shared/store/me/actions.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nexports.ME_REQUEST = 'ME_REQUEST';\nconst meRequest = () => ({\n    type: exports.ME_REQUEST,\n});\nexports.meRequest = meRequest;\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\nconst meRequestSuccess = (data) => ({\n    type: exports.ME_REQUEST_SUCCESS,\n    data,\n});\nexports.meRequestSuccess = meRequestSuccess;\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\nconst meRequestError = (error) => ({\n    type: exports.ME_REQUEST_ERROR,\n    error,\n});\nexports.meRequestError = meRequestError;\nconst meRequestAsync = () => (dispatch, getState) => {\n    dispatch((0, exports.meRequest)());\n    axios_1.default\n        .get('https://oauth.reddit.com/api/v1/me.json', {\n        headers: { Authorization: `bearer ${getState().token.token}` },\n    })\n        .then((res) => {\n        const userData = res.data;\n        const icon = userData.icon_img.split('?')[0];\n        dispatch((0, exports.meRequestSuccess)({ name: userData.name, iconImg: icon }));\n    })\n        .catch((error) => {\n        console.log(error);\n        dispatch((0, exports.meRequestError)(String(error)));\n    });\n};\nexports.meRequestAsync = meRequestAsync;\n\n\n//# sourceURL=webpack:///./src/shared/store/me/actions.ts?");

/***/ }),

/***/ "./src/shared/store/me/reducer.ts":
/*!****************************************!*\
  !*** ./src/shared/store/me/reducer.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.meReducer = void 0;\nconst actions_1 = __webpack_require__(/*! ./actions */ \"./src/shared/store/me/actions.ts\");\nconst meReducer = (state, action) => {\n    switch (action.type) {\n        case actions_1.ME_REQUEST:\n            return Object.assign(Object.assign({}, state), { loading: true });\n        case actions_1.ME_REQUEST_ERROR:\n            return Object.assign(Object.assign({}, state), { error: action.error, loading: false });\n        case actions_1.ME_REQUEST_SUCCESS:\n            return Object.assign(Object.assign({}, state), { data: action.data, loading: false });\n        default:\n            return state;\n    }\n};\nexports.meReducer = meReducer;\n\n\n//# sourceURL=webpack:///./src/shared/store/me/reducer.ts?");

/***/ }),

/***/ "./src/shared/store/reducer.ts":
/*!*************************************!*\
  !*** ./src/shared/store/reducer.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.rootReducer = exports.updateComment = void 0;\nconst actions_1 = __webpack_require__(/*! ./me/actions */ \"./src/shared/store/me/actions.ts\");\nconst reducer_1 = __webpack_require__(/*! ./me/reducer */ \"./src/shared/store/me/reducer.ts\");\nconst reducer_2 = __webpack_require__(/*! ./token/reducer */ \"./src/shared/store/token/reducer.ts\");\nconst actions_2 = __webpack_require__(/*! ./token/actions */ \"./src/shared/store/token/actions.ts\");\nconst initialState = {\n    commentText: 'Привет, Skillbox!',\n    token: {\n        loading: false,\n        error: '',\n        token: '',\n    },\n    me: {\n        loading: false,\n        error: '',\n        data: {},\n    },\n};\nconst UPDATE_COMMENT = 'UPDATE_COMMENT';\nconst updateComment = (text) => ({\n    type: UPDATE_COMMENT,\n    text,\n});\nexports.updateComment = updateComment;\nconst rootReducer = (state = initialState, action) => {\n    switch (action.type) {\n        case UPDATE_COMMENT:\n            return Object.assign(Object.assign({}, state), { commentText: action.text });\n        case actions_1.ME_REQUEST:\n        case actions_1.ME_REQUEST_SUCCESS:\n        case actions_1.ME_REQUEST_ERROR:\n            return Object.assign(Object.assign({}, state), { me: (0, reducer_1.meReducer)(state.me, action) });\n        case actions_2.TOKEN_REQUEST:\n        case actions_2.TOKEN_REQUEST_SUCCESS:\n        case actions_2.TOKEN_REQUEST_ERROR:\n            return Object.assign(Object.assign({}, state), { token: (0, reducer_2.tokenReducer)(state.token, action) });\n        default:\n            return state;\n    }\n};\nexports.rootReducer = rootReducer;\n\n\n//# sourceURL=webpack:///./src/shared/store/reducer.ts?");

/***/ }),

/***/ "./src/shared/store/token/actions.ts":
/*!*******************************************!*\
  !*** ./src/shared/store/token/actions.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.saveToken = exports.tokenRequestError = exports.TOKEN_REQUEST_ERROR = exports.tokenRequestSuccess = exports.TOKEN_REQUEST_SUCCESS = exports.tokenRequest = exports.TOKEN_REQUEST = void 0;\nexports.TOKEN_REQUEST = 'TOKEN_REQUEST';\nconst tokenRequest = () => ({\n    type: exports.TOKEN_REQUEST,\n});\nexports.tokenRequest = tokenRequest;\nexports.TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS';\nconst tokenRequestSuccess = (token) => ({\n    type: exports.TOKEN_REQUEST_SUCCESS,\n    token,\n});\nexports.tokenRequestSuccess = tokenRequestSuccess;\nexports.TOKEN_REQUEST_ERROR = 'TOKEN_REQUEST_ERROR';\nconst tokenRequestError = (error) => ({\n    type: exports.TOKEN_REQUEST_ERROR,\n    error,\n});\nexports.tokenRequestError = tokenRequestError;\nconst saveToken = () => (dispatch, getState) => {\n    try {\n        dispatch((0, exports.tokenRequest)());\n        // localStorage.clear();\n        const token = localStorage.getItem('token') || window.__token__;\n        if (token && token !== 'undefined') {\n            localStorage.setItem('token', token);\n            dispatch((0, exports.tokenRequestSuccess)(token));\n        }\n    }\n    catch (error) {\n        dispatch((0, exports.tokenRequestError)(String(error)));\n    }\n};\nexports.saveToken = saveToken;\n\n\n//# sourceURL=webpack:///./src/shared/store/token/actions.ts?");

/***/ }),

/***/ "./src/shared/store/token/reducer.ts":
/*!*******************************************!*\
  !*** ./src/shared/store/token/reducer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.tokenReducer = void 0;\nconst actions_1 = __webpack_require__(/*! ./actions */ \"./src/shared/store/token/actions.ts\");\nconst tokenReducer = (state, action) => {\n    switch (action.type) {\n        case actions_1.TOKEN_REQUEST:\n            return Object.assign(Object.assign({}, state), { loading: true });\n        case actions_1.TOKEN_REQUEST_ERROR:\n            return Object.assign(Object.assign({}, state), { error: action.error, loading: false });\n        case actions_1.TOKEN_REQUEST_SUCCESS:\n            return Object.assign(Object.assign({}, state), { token: action.token, loading: false });\n        default:\n            return state;\n    }\n};\nexports.tokenReducer = tokenReducer;\n\n\n//# sourceURL=webpack:///./src/shared/store/token/reducer.ts?");

/***/ }),

/***/ "./src/types/enums.ts":
/*!****************************!*\
  !*** ./src/types/enums.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.EIcons = exports.EColors = void 0;\n/* eslint-disable no-shadow */\nvar EColors;\n(function (EColors) {\n    EColors[\"black\"] = \"black\";\n    EColors[\"white\"] = \"white\";\n    EColors[\"orange\"] = \"orange\";\n    EColors[\"green\"] = \"green\";\n    EColors[\"greyF3\"] = \"greyF3\";\n    EColors[\"greyF4\"] = \"greyF4\";\n    EColors[\"greyEC\"] = \"greyEC\";\n    EColors[\"greyD9\"] = \"greyD9\";\n    EColors[\"greyC4\"] = \"greyC4\";\n    EColors[\"grey99\"] = \"grey99\";\n    EColors[\"grey66\"] = \"grey66\";\n})(EColors = exports.EColors || (exports.EColors = {}));\nvar EIcons;\n(function (EIcons) {\n    EIcons[\"hide\"] = \"hide\";\n    EIcons[\"comments\"] = \"comments\";\n    EIcons[\"share\"] = \"share\";\n    EIcons[\"shareLight\"] = \"shareLight\";\n    EIcons[\"save\"] = \"save\";\n    EIcons[\"saveLight\"] = \"saveLight\";\n    EIcons[\"complain\"] = \"complain\";\n    EIcons[\"arrowUp\"] = \"arrowUp\";\n    EIcons[\"arrowDown\"] = \"arrowDown\";\n    EIcons[\"menuDots\"] = \"menuDots\";\n    EIcons[\"anon\"] = \"anon\";\n})(EIcons = exports.EIcons || (exports.EIcons = {}));\n\n\n//# sourceURL=webpack:///./src/types/enums.ts?");

/***/ }),

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.assoc = void 0;\nfunction assoc(key, value) {\n    return (obj) => (Object.assign(Object.assign({}, obj), { [key]: value }));\n}\nexports.assoc = assoc;\n\n\n//# sourceURL=webpack:///./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/js/getDays.ts":
/*!*********************************!*\
  !*** ./src/utils/js/getDays.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.getDays = void 0;\nconst date_fns_1 = __webpack_require__(/*! date-fns */ \"date-fns\");\nfunction getDays(timestamp) {\n    let daysAsString = (0, date_fns_1.differenceInDays)(new Date(), new Date(timestamp)).toString();\n    if (parseInt(daysAsString, 10) % 10 === 1)\n        daysAsString += ' день назад';\n    else if (parseInt(daysAsString, 10) % 10 === 2 ||\n        parseInt(daysAsString, 10) % 10 === 3 ||\n        parseInt(daysAsString, 10) % 10 === 4)\n        daysAsString += ' дня назад';\n    else\n        daysAsString += ' дней назад';\n    return daysAsString;\n}\nexports.getDays = getDays;\n\n\n//# sourceURL=webpack:///./src/utils/js/getDays.ts?");

/***/ }),

/***/ "./src/utils/js/getHours.ts":
/*!**********************************!*\
  !*** ./src/utils/js/getHours.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.getHours = void 0;\nconst date_fns_1 = __webpack_require__(/*! date-fns */ \"date-fns\");\nfunction getHours(timestamp) {\n    let hoursAsString = (0, date_fns_1.differenceInHours)(new Date(), new Date(timestamp)).toString();\n    if (parseInt(hoursAsString, 10) % 10 === 1)\n        hoursAsString += ' час назад';\n    else if (parseInt(hoursAsString, 10) % 10 === 2 ||\n        parseInt(hoursAsString, 10) % 10 === 3 ||\n        parseInt(hoursAsString, 10) % 10 === 4)\n        hoursAsString += ' часа назад';\n    else\n        hoursAsString += ' часов назад';\n    return hoursAsString;\n}\nexports.getHours = getHours;\n\n\n//# sourceURL=webpack:///./src/utils/js/getHours.ts?");

/***/ }),

/***/ "./src/utils/js/merge.ts":
/*!*******************************!*\
  !*** ./src/utils/js/merge.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.merge = void 0;\nfunction merge(obj) {\n    return (obj2) => (Object.assign(Object.assign({}, obj), obj2));\n}\nexports.merge = merge;\n\n\n//# sourceURL=webpack:///./src/utils/js/merge.ts?");

/***/ }),

/***/ "./src/utils/js/noop.ts":
/*!******************************!*\
  !*** ./src/utils/js/noop.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.noop = void 0;\n// eslint-disable-next-line @typescript-eslint/no-empty-function\nconst noop = () => { };\nexports.noop = noop;\n\n\n//# sourceURL=webpack:///./src/utils/js/noop.ts?");

/***/ }),

/***/ "./src/utils/react/generateRandomIndex.ts":
/*!************************************************!*\
  !*** ./src/utils/react/generateRandomIndex.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.generateId = exports.assignId = exports.generateRandomString = void 0;\nconst assoc_1 = __webpack_require__(/*! ../js/assoc */ \"./src/utils/js/assoc.ts\");\nconst generateRandomString = () => Math.random().toString(36).substring(2, 15);\nexports.generateRandomString = generateRandomString;\nexports.assignId = (0, assoc_1.assoc)('id', (0, exports.generateRandomString)());\nconst generateId = (obj) => (0, assoc_1.assoc)('id', (0, exports.generateRandomString)())(obj);\nexports.generateId = generateId;\n\n\n//# sourceURL=webpack:///./src/utils/react/generateRandomIndex.ts?");

/***/ }),

/***/ "@hookform/resolvers/yup":
/*!******************************************!*\
  !*** external "@hookform/resolvers/yup" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@hookform/resolvers/yup\");\n\n//# sourceURL=webpack:///external_%22@hookform/resolvers/yup%22?");

/***/ }),

/***/ "@redux-devtools/extension":
/*!********************************************!*\
  !*** external "@redux-devtools/extension" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@redux-devtools/extension\");\n\n//# sourceURL=webpack:///external_%22@redux-devtools/extension%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns\");\n\n//# sourceURL=webpack:///external_%22date-fns%22?");

/***/ }),

/***/ "date-fns/locale":
/*!**********************************!*\
  !*** external "date-fns/locale" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns/locale\");\n\n//# sourceURL=webpack:///external_%22date-fns/locale%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hook-form\");\n\n//# sourceURL=webpack:///external_%22react-hook-form%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"yup\");\n\n//# sourceURL=webpack:///external_%22yup%22?");

/***/ })

/******/ });