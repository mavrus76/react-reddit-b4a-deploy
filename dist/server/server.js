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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EIcons = exports.EColors = void 0;
/* eslint-disable no-shadow */
var EColors;
(function (EColors) {
    EColors["black"] = "black";
    EColors["white"] = "white";
    EColors["orange"] = "orange";
    EColors["green"] = "green";
    EColors["greyF3"] = "greyF3";
    EColors["greyF4"] = "greyF4";
    EColors["greyEC"] = "greyEC";
    EColors["greyD9"] = "greyD9";
    EColors["greyC4"] = "greyC4";
    EColors["grey99"] = "grey99";
    EColors["grey66"] = "grey66";
})(EColors = exports.EColors || (exports.EColors = {}));
var EIcons;
(function (EIcons) {
    EIcons["hide"] = "hide";
    EIcons["comments"] = "comments";
    EIcons["share"] = "share";
    EIcons["shareLight"] = "shareLight";
    EIcons["save"] = "save";
    EIcons["saveLight"] = "saveLight";
    EIcons["complain"] = "complain";
    EIcons["arrowUp"] = "arrowUp";
    EIcons["arrowDown"] = "arrowDown";
    EIcons["menuDots"] = "menuDots";
    EIcons["anon"] = "anon";
})(EIcons = exports.EIcons || (exports.EIcons = {}));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = void 0;
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => { };
exports.noop = noop;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(44), exports);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(46), exports);
__exportStar(__webpack_require__(47), exports);
__exportStar(__webpack_require__(48), exports);
__exportStar(__webpack_require__(49), exports);
__exportStar(__webpack_require__(50), exports);
__exportStar(__webpack_require__(51), exports);
__exportStar(__webpack_require__(52), exports);
__exportStar(__webpack_require__(53), exports);
__exportStar(__webpack_require__(54), exports);
__exportStar(__webpack_require__(14), exports);
__exportStar(__webpack_require__(55), exports);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(58), exports);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;
const axios_1 = __importDefault(__webpack_require__(3));
exports.ME_REQUEST = 'ME_REQUEST';
const meRequest = () => ({
    type: exports.ME_REQUEST,
});
exports.meRequest = meRequest;
exports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
const meRequestSuccess = (data) => ({
    type: exports.ME_REQUEST_SUCCESS,
    data,
});
exports.meRequestSuccess = meRequestSuccess;
exports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
const meRequestError = (error) => ({
    type: exports.ME_REQUEST_ERROR,
    error,
});
exports.meRequestError = meRequestError;
const meRequestAsync = () => (dispatch, getState) => {
    dispatch((0, exports.meRequest)());
    axios_1.default
        .get('https://oauth.reddit.com/api/v1/me.json', {
        headers: { Authorization: `bearer ${getState().token.token}` },
    })
        .then((res) => {
        const userData = res.data;
        const icon = userData.icon_img.split('?')[0];
        dispatch((0, exports.meRequestSuccess)({ name: userData.name, iconImg: icon }));
    })
        .catch((error) => {
        console.log(error);
        dispatch((0, exports.meRequestError)(String(error)));
    });
};
exports.meRequestAsync = meRequestAsync;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsContextProvider = exports.postsContext = void 0;
const react_1 = __importStar(__webpack_require__(0));
const usePostsData_1 = __webpack_require__(101);
const noop_1 = __webpack_require__(2);
exports.postsContext = react_1.default.createContext({
    data: [],
    loading: false,
    errorLoading: '',
    bottomOfList: react_1.default.createRef(),
    count: 0,
    handleClick: noop_1.noop,
});
function PostsContextProvider({ children, }) {
    const { data, loading, errorLoading, bottomOfList, count, handleClick } = (0, usePostsData_1.usePostsData)();
    const contextValue = (0, react_1.useMemo)(() => ({
        data,
        loading,
        errorLoading,
        bottomOfList,
        count,
        handleClick,
    }), [data, loading, errorLoading, bottomOfList, count, handleClick]);
    return (react_1.default.createElement(exports.postsContext.Provider, { value: contextValue }, children));
}
exports.PostsContextProvider = PostsContextProvider;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToken = exports.tokenRequestError = exports.TOKEN_REQUEST_ERROR = exports.tokenRequestSuccess = exports.TOKEN_REQUEST_SUCCESS = exports.tokenRequest = exports.TOKEN_REQUEST = void 0;
exports.TOKEN_REQUEST = 'TOKEN_REQUEST';
const tokenRequest = () => ({
    type: exports.TOKEN_REQUEST,
});
exports.tokenRequest = tokenRequest;
exports.TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS';
const tokenRequestSuccess = (token) => ({
    type: exports.TOKEN_REQUEST_SUCCESS,
    token,
});
exports.tokenRequestSuccess = tokenRequestSuccess;
exports.TOKEN_REQUEST_ERROR = 'TOKEN_REQUEST_ERROR';
const tokenRequestError = (error) => ({
    type: exports.TOKEN_REQUEST_ERROR,
    error,
});
exports.tokenRequestError = tokenRequestError;
const saveToken = () => (dispatch, getState) => {
    try {
        dispatch((0, exports.tokenRequest)());
        // localStorage.clear();
        const token = localStorage.getItem('token') || window.__token__;
        if (token && token !== 'undefined') {
            localStorage.setItem('token', token);
            dispatch((0, exports.tokenRequestSuccess)(token));
        }
    }
    catch (error) {
        dispatch((0, exports.tokenRequestError)(String(error)));
    }
};
exports.saveToken = saveToken;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconSaveLight = void 0;
const react_1 = __importDefault(__webpack_require__(0));
function IconSaveLight() {
    return (react_1.default.createElement("svg", { viewBox: '0 0 14 14', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        react_1.default.createElement("path", { d: 'M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z', fill: '#979797' })));
}
exports.IconSaveLight = IconSaveLight;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(56), exports);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDays = void 0;
const date_fns_1 = __webpack_require__(11);
function getDays(timestamp) {
    let daysAsString = (0, date_fns_1.differenceInDays)(new Date(), new Date(timestamp)).toString();
    if (parseInt(daysAsString, 10) % 10 === 1)
        daysAsString += ' день назад';
    else if (parseInt(daysAsString, 10) % 10 === 2 ||
        parseInt(daysAsString, 10) % 10 === 3 ||
        parseInt(daysAsString, 10) % 10 === 4)
        daysAsString += ' дня назад';
    else
        daysAsString += ' дней назад';
    return daysAsString;
}
exports.getDays = getDays;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getHours = void 0;
const date_fns_1 = __webpack_require__(11);
function getHours(timestamp) {
    let hoursAsString = (0, date_fns_1.differenceInHours)(new Date(), new Date(timestamp)).toString();
    if (parseInt(hoursAsString, 10) % 10 === 1)
        hoursAsString += ' час назад';
    else if (parseInt(hoursAsString, 10) % 10 === 2 ||
        parseInt(hoursAsString, 10) % 10 === 3 ||
        parseInt(hoursAsString, 10) % 10 === 4)
        hoursAsString += ' часа назад';
    else
        hoursAsString += ' часов назад';
    return hoursAsString;
}
exports.getHours = getHours;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replyContext = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const noop_1 = __webpack_require__(2);
exports.replyContext = react_1.default.createContext({
    value: '',
    onChange: noop_1.noop,
});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(__webpack_require__(21));
const server_1 = __importDefault(__webpack_require__(22));
const axios_1 = __importDefault(__webpack_require__(3));
const compression_1 = __importDefault(__webpack_require__(23));
const helmet_1 = __importDefault(__webpack_require__(24));
const App_1 = __webpack_require__(25);
const indexTemplate_1 = __webpack_require__(127);
const PORT = process.env.PORT || 3000;
const IS_DEV = "production" !== 'production';
const app = (0, express_1.default)();
if (!IS_DEV) {
    app.use((0, compression_1.default)());
    app.use((0, helmet_1.default)({
        contentSecurityPolicy: false,
    }));
}
app.use('/static', express_1.default.static('./dist/client'));
app.get('/auth', (req, res) => {
    axios_1.default
        .post('https://www.reddit.com/api/v1/access_token', `grant_type=authorization_code&code=${req.query.code}&redirect_uri=https://reactredditb4adeploy4-mav76rus.b4a.run/auth`, {
        auth: {
            username: 'undefined',
            password: process.env.SECRET,
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
        .then(({ data }) => {
        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)()), data.access_token));
    })
        .catch(console.log);
});
app.get('*', (req, res) => {
    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));
});
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importStar(__webpack_require__(0));
__webpack_require__(26);
const root_1 = __webpack_require__(28);
const redux_1 = __webpack_require__(29);
const extension_1 = __webpack_require__(30);
const react_redux_1 = __webpack_require__(4);
const redux_thunk_1 = __importDefault(__webpack_require__(31));
const react_router_dom_1 = __webpack_require__(6);
const Layout_1 = __webpack_require__(32);
const Header_1 = __webpack_require__(35);
const Content_1 = __webpack_require__(67);
const CardList_1 = __webpack_require__(70);
const postsContext_1 = __webpack_require__(12);
const reducer_1 = __webpack_require__(102);
const actions_1 = __webpack_require__(13);
const replyContext_1 = __webpack_require__(19);
const Post_1 = __webpack_require__(105);
const Page404_1 = __webpack_require__(124);
const store = (0, redux_1.createStore)(reducer_1.rootReducer, (0, extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));
function AppComponent() {
    const [replyValue, setReplyValue] = (0, react_1.useState)('');
    const ReplyProvider = replyContext_1.replyContext.Provider;
    const [mounted, setMounted] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setMounted(true);
        store.dispatch((0, actions_1.saveToken)());
    }, []);
    return (react_1.default.createElement(react_redux_1.Provider, { store: store }, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(postsContext_1.PostsContextProvider, null,
            react_1.default.createElement(ReplyProvider, { value: {
                    value: replyValue,
                    onChange: setReplyValue,
                } },
                react_1.default.createElement(Layout_1.Layout, null,
                    react_1.default.createElement(Header_1.Header, null),
                    react_1.default.createElement(Content_1.Content, null,
                        react_1.default.createElement(react_router_dom_1.Switch, null,
                            react_1.default.createElement(react_router_dom_1.Route, { path: '/posts/:id' },
                                react_1.default.createElement(Post_1.Post, null)),
                            react_1.default.createElement(react_router_dom_1.Route, { path: '/' },
                                react_1.default.createElement(CardList_1.CardList, null)),
                            react_1.default.createElement(react_router_dom_1.Route, { path: '*' },
                                react_1.default.createElement(Page404_1.Page404, null)),
                            react_1.default.createElement(react_router_dom_1.Route, { path: '/' },
                                react_1.default.createElement(react_router_dom_1.Redirect, { to: '/posts' })),
                            react_1.default.createElement(react_router_dom_1.Route, { path: '/auth' },
                                react_1.default.createElement(react_router_dom_1.Redirect, { to: '/posts' })))))))))));
}
exports.App = (0, root_1.hot)(() => react_1.default.createElement(AppComponent, null));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
exports.push([module.i, ":root {\n  --black: #333;\n  --white: #fff;\n  --orange: #cc6633;\n  --green: #a4cc33;\n  --greyF3: #f3f3f3;\n  --greyF4: #f4f4f4;\n  --greyEC: #ececec;\n  --greyD9: #d9d9d9;\n  --greyC4: #c4c4c4;\n  --grey99: #999;\n  --grey66: #666;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', serif;\n  font-size: 14px;\n  line-height: 16px;\n  background-color: var(--greyF4);\n}\n\n* {\n  box-sizing: border-box;\n  color: var(--grey66);\n  -webkit-font-smoothing: antialiased;\n  -webkit-osx-font-smoothing: grayscale;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton {\n  border: 0;\n  padding: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@redux-devtools/extension");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(33), exports);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const layout_css_1 = __importDefault(__webpack_require__(34));
const { layout } = layout_css_1.default;
function Layout({ children }) {
    return react_1.default.createElement("div", { className: layout }, children);
}
exports.Layout = Layout;
Layout.defaultProps = {
    children: null,
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout__layout--2fANc"
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(36), exports);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const header_css_1 = __importDefault(__webpack_require__(37));
const SearchBlock_1 = __webpack_require__(38);
const ThreadTitle_1 = __webpack_require__(61);
const SortBlock_1 = __webpack_require__(64);
function Header() {
    return (react_1.default.createElement("header", { className: header_css_1.default.header },
        react_1.default.createElement(SearchBlock_1.SearchBlock, null),
        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),
        react_1.default.createElement(SortBlock_1.SortBlock, null)));
}
exports.Header = Header;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header__header--bAgyG"
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(39), exports);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBlock = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const searchblock_css_1 = __importDefault(__webpack_require__(40));
const UserBlock_1 = __webpack_require__(41);
const useUserData_1 = __webpack_require__(60);
function SearchBlock() {
    const { data, loading } = (0, useUserData_1.useUserData)();
    return (react_1.default.createElement("div", { className: searchblock_css_1.default.searchBlock },
        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));
}
exports.SearchBlock = SearchBlock;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"searchBlock": "searchblock__searchBlock--3aDPv"
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(42), exports);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBlock = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const userblock_css_1 = __importDefault(__webpack_require__(43));
const Icon_1 = __webpack_require__(5);
const enums_1 = __webpack_require__(1);
const Break_1 = __webpack_require__(15);
const Text_1 = __webpack_require__(9);
function UserBlock({ avatarSrc, username, loading }) {
    return (react_1.default.createElement("a", { href: `https://www.reddit.com/api/v1/authorize?client_id=${'undefined'}&response_type=code&state=random_string&redirect_uri=https://reactredditb4adeploy4-mav76rus.b4a.run/auth&duration=permanent&scope=read submit identity`, className: userblock_css_1.default.userBox },
        react_1.default.createElement("div", { className: userblock_css_1.default.avatarBox }, avatarSrc ? (react_1.default.createElement("img", { src: avatarSrc, alt: 'user avatar', className: userblock_css_1.default.avatarImage })) : (react_1.default.createElement(Icon_1.Icon, { size: 50, name: enums_1.EIcons.anon }))),
        react_1.default.createElement("div", { className: userblock_css_1.default.username },
            react_1.default.createElement(Break_1.Break, { size: 12 }),
            loading ? (react_1.default.createElement(Text_1.Text, { size: 28, color: enums_1.EColors.grey99 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")) : (react_1.default.createElement(Text_1.Text, { size: 28, color: username ? enums_1.EColors.black : enums_1.EColors.grey99 }, username || 'Аноним')))));
}
exports.UserBlock = UserBlock;
UserBlock.defaultProps = {
    avatarSrc: null,
    username: null,
    loading: false,
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userBox": "userblock__userBox--24rEF",
	"avatarBox": "userblock__avatarBox--2OTfi",
	"avatarImage": "userblock__avatarImage--2ryXC",
	"username": "userblock__username--3bLc0"
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const classnames_1 = __importDefault(__webpack_require__(7));
const icon_css_1 = __importDefault(__webpack_require__(45));
const enums_1 = __webpack_require__(1);
const icons_1 = __webpack_require__(8);
const IconSaveLight_1 = __webpack_require__(14);
const icons = {
    [enums_1.EIcons.hide]: react_1.default.createElement(icons_1.IconHide, null),
    [enums_1.EIcons.comments]: react_1.default.createElement(icons_1.IconComments, null),
    [enums_1.EIcons.save]: react_1.default.createElement(icons_1.IconSave, null),
    [enums_1.EIcons.saveLight]: react_1.default.createElement(IconSaveLight_1.IconSaveLight, null),
    [enums_1.EIcons.share]: react_1.default.createElement(icons_1.IconShare, null),
    [enums_1.EIcons.shareLight]: react_1.default.createElement(icons_1.IconShareLight, null),
    [enums_1.EIcons.complain]: react_1.default.createElement(icons_1.IconComplain, null),
    [enums_1.EIcons.menuDots]: react_1.default.createElement(icons_1.IconMenuDots, null),
    [enums_1.EIcons.anon]: react_1.default.createElement(icons_1.IconAnon, null),
    [enums_1.EIcons.arrowDown]: react_1.default.createElement(icons_1.IconArrowDown, null),
    [enums_1.EIcons.arrowUp]: react_1.default.createElement(icons_1.IconArrowUp, null),
};
function getIcon(key) {
    if (key === undefined) {
        return undefined;
    }
    return icons[key];
}
function Icon(props) {
    const { size, mobileSize, tabletSize, desktopSize, name = enums_1.EIcons.hide, } = props;
    const classes = (0, classnames_1.default)(icon_css_1.default[`s${size}`], {
        [icon_css_1.default[`m${mobileSize}`]]: mobileSize,
    }, {
        [icon_css_1.default[`t${tabletSize}`]]: tabletSize,
    }, {
        [icon_css_1.default[`d${desktopSize}`]]: desktopSize,
    });
    return react_1.default.createElement("span", { className: classes }, getIcon(name));
}
exports.Icon = Icon;
Icon.defaultProps = {
    size: null,
    mobileSize: null,
    tabletSize: null,
    desktopSize: null,
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s50": "icon__s50--3qS3F",
	"s28": "icon__s28--2LTHN",
	"s20": "icon__s20--1h1Sg",
	"s16": "icon__s16--NYdak",
	"s14": "icon__s14--m4nyp",
	"s12": "icon__s12--LuYYL",
	"s10": "icon__s10--6UHq6",
	"black": "icon__black--1FC-N",
	"white": "icon__white--w_CCO",
	"orange": "icon__orange--2-WBH",
	"green": "icon__green--O3Yne",
	"greyF3": "icon__greyF3--1yOuv",
	"greyF4": "icon__greyF4--3S1TL",
	"greyEC": "icon__greyEC--lnEy6",
	"greyD9": "icon__greyD9--3FD59",
	"greyC4": "icon__greyC4--3r5XN",
	"grey99": "icon__grey99--137fk",
	"grey66": "icon__grey66--3hzw3",
	"m50": "icon__m50--1yBFW",
	"m28": "icon__m28--1atJZ",
	"m20": "icon__m20--22ACs",
	"m16": "icon__m16--1W2nF",
	"m14": "icon__m14--Pdbj_",
	"m12": "icon__m12--1-U0b",
	"m10": "icon__m10--2A792",
	"t50": "icon__t50--cIkH5",
	"t28": "icon__t28--2499c",
	"t20": "icon__t20--uj2iv",
	"t16": "icon__t16--2OInr",
	"t14": "icon__t14--1aldr",
	"t12": "icon__t12--3KfvD",
	"t10": "icon__t10--1yy-4",
	"d50": "icon__d50--Zzyqu",
	"d28": "icon__d28--2hxtm",
	"d20": "icon__d20--3J3ju",
	"d16": "icon__d16--3Gdce",
	"d14": "icon__d14--2AAv4",
	"d12": "icon__d12--29ZTk",
	"d10": "icon__d10--3846z"
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconArrowDown = void 0;
const react_1 = __importDefault(__webpack_require__(0));
function IconArrowDown() {
    return (react_1.default.createElement("svg", { width: '19', height: '10', viewBox: '0 0 19 10', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        react_1.default.createElement("path", { d: 'M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z', fill: '#D9D9D9' })));
}
exports.IconArrowDown = IconArrowDown;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconArrowUp = void 0;
const react_1 = __importDefault(__webpack_require__(0));
function IconArrowUp() {
    return (react_1.default.createElement("svg", { width: '19', height: '10', viewBox: '0 0 19 10', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        react_1.default.createElement("path", { d: 'M9.5 0L0 10H19L9.5 0Z', fill: '#C4C4C4' })));
}
exports.IconArrowUp = IconArrowUp;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconComments = void 0;
const react_1 = __importDefault(__webpack_require__(0));
function IconComments() {
    return (react_1.default.createElement("svg", { viewBox: '0 0 15 15', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        react_1.default.createElement("path", { d: 'M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z', fill: '#C4C4C4' })));
}
exports.IconComments = IconComments;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconComplain = void 0;
const react_1 = __importDefault(__webpack_require__(0));
function IconComplain() {
    return (react_1.default.createElement("svg", { viewBox: '0 0 14 12', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        react_1.default.createElement("path", { d: 'M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z', fill: '#999999' })));
}
exports.IconComplain = IconComplain;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconHide = void 0;
const react_1 = __importDefault(__webpack_require__(0));
function IconHide() {
    return (react_1.default.createElement("svg", { viewBox: '0 0 12 12', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        react_1.default.createElement("path", { d: 'M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z', fill: '#999999' })));
}
exports.IconHide = IconHide;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconMenuDots = void 0;
const react_1 = __importDefault(__webpack_require__(0));
function IconMenuDots() {
    return (react_1.default.createElement("svg", { width: '5', height: '20', viewBox: '0 0 5 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        react_1.default.createElement("circle", { cx: '2.5', cy: '2.5', r: '2.5', fill: '#D9D9D9' }),
        react_1.default.createElement("circle", { cx: '2.5', cy: '10', r: '2.5', fill: '#D9D9D9' }),
        react_1.default.createElement("circle", { cx: '2.5', cy: '17.5', r: '2.5', fill: '#D9D9D9' })));
}
exports.IconMenuDots = IconMenuDots;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconSave = void 0;
const react_1 = __importDefault(__webpack_require__(0));
function IconSave() {
    return (react_1.default.createElement("svg", { viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        react_1.default.createElement("circle", { cx: '10', cy: '10', r: '10', fill: '#C4C4C4' }),
        react_1.default.createElement("path", { d: 'M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z', fill: 'white' })));
}
exports.IconSave = IconSave;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconShare = void 0;
const react_1 = __importDefault(__webpack_require__(0));
function IconShare() {
    return (react_1.default.createElement("svg", { viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        react_1.default.createElement("circle", { cx: '10', cy: '10', r: '10', fill: '#C4C4C4' }),
        react_1.default.createElement("path", { d: 'M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z', fill: 'white' })));
}
exports.IconShare = IconShare;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconShareLight = void 0;
const react_1 = __importDefault(__webpack_require__(0));
function IconShareLight() {
    return (react_1.default.createElement("svg", { viewBox: '0 0 12 14', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        react_1.default.createElement("path", { d: 'M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z', fill: '#999999' })));
}
exports.IconShareLight = IconShareLight;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconAnon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
function IconAnon() {
    return (react_1.default.createElement("svg", { viewBox: '0 0 50 50', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        react_1.default.createElement("path", { d: 'M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z', fill: '#D9D9D9' })));
}
exports.IconAnon = IconAnon;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Break = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const classnames_1 = __importDefault(__webpack_require__(7));
const break_css_1 = __importDefault(__webpack_require__(57));
function Break(props) {
    const { inline = false, top = false, size, mobileSize, tabletSize, desktopSize, } = props;
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)(break_css_1.default[`s${size}`], {
            [break_css_1.default[`m${mobileSize}`]]: mobileSize,
        }, {
            [break_css_1.default[`t${tabletSize}`]]: tabletSize,
        }, {
            [break_css_1.default[`d${desktopSize}`]]: desktopSize,
        }, { [break_css_1.default.inline]: inline }, { [break_css_1.default.top]: top }) }));
}
exports.Break = Break;
Break.defaultProps = {
    mobileSize: null,
    tabletSize: null,
    desktopSize: null,
    inline: false,
    top: false,
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s4": "break__s4--rnbuA",
	"s8": "break__s8--2ubV4",
	"s12": "break__s12--3dSW2",
	"s16": "break__s16--2bop2",
	"s20": "break__s20--PBhCB",
	"inline": "break__inline--22pcx",
	"top": "break__top--25ISJ",
	"m4": "break__m4--vcnM6",
	"m8": "break__m8--nERtE",
	"m12": "break__m12--1AOlH",
	"m16": "break__m16--1rVpa",
	"m20": "break__m20--1j3tN",
	"t4": "break__t4--3wfa1",
	"t8": "break__t8--fbYbW",
	"t12": "break__t12--1CwXq",
	"t16": "break__t16--16bgO",
	"t20": "break__t20--1q14V",
	"d4": "break__d4--3l9y9",
	"d8": "break__d8--eorzy",
	"d2": "break__d2--3MYdo",
	"d16": "break__d16--3d4X_",
	"d20": "break__d20--3nrJP",
	"d12": "break__d12--3AVL6"
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const classnames_1 = __importDefault(__webpack_require__(7));
const text_css_1 = __importDefault(__webpack_require__(59));
const enums_1 = __webpack_require__(1);
function Text(props) {
    const { As = 'span', children, size, bold = false, mobileSize, tabletSize, desktopSize, color = enums_1.EColors.black, } = props;
    const classes = (0, classnames_1.default)(text_css_1.default[`s${size}`], { [text_css_1.default.bold]: bold }, {
        [text_css_1.default[`m${mobileSize}`]]: mobileSize,
    }, {
        [text_css_1.default[`t${tabletSize}`]]: tabletSize,
    }, {
        [text_css_1.default[`d${desktopSize}`]]: desktopSize,
    }, text_css_1.default[color]);
    return react_1.default.createElement(As, { className: classes }, children);
}
exports.Text = Text;
Text.defaultProps = {
    As: 'span',
    children: null,
    mobileSize: null,
    tabletSize: null,
    desktopSize: null,
    color: null,
    bold: false,
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s28": "text__s28--Puvgs",
	"s20": "text__s20--3Xq66",
	"s16": "text__s16--G_lUr",
	"s14": "text__s14--jvCoO",
	"s12": "text__s12--2S2T2",
	"s10": "text__s10--DYLfy",
	"bold": "text__bold--gb02H",
	"black": "text__black--1zchg",
	"white": "text__white--13JGE",
	"orange": "text__orange--1RyAM",
	"green": "text__green--3mYQn",
	"greyF3": "text__greyF3--2Lfsi",
	"greyF4": "text__greyF4--V0fR0",
	"greyEC": "text__greyEC--2krZR",
	"greyD9": "text__greyD9--7iRFr",
	"greyC4": "text__greyC4--3oiNM",
	"grey99": "text__grey99--35u3B",
	"grey66": "text__grey66--373uw",
	"m28": "text__m28--2u2zs",
	"m20": "text__m20--1gFlM",
	"m16": "text__m16--cSY4u",
	"m14": "text__m14--s6pnr",
	"m12": "text__m12--1W0av",
	"m10": "text__m10--UtIkW",
	"t28": "text__t28--A4rHF",
	"t20": "text__t20--78tCz",
	"t16": "text__t16--nkVMz",
	"t14": "text__t14--1Rj72",
	"t12": "text__t12--7txjW",
	"t10": "text__t10--n2R7f",
	"d28": "text__d28--3oIok",
	"d20": "text__d20--uwHxr",
	"d16": "text__d16--1Pwd1",
	"d14": "text__d14--3Futo",
	"d12": "text__d12--5X_qc",
	"d10": "text__d10--3pWnc"
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
const react_1 = __webpack_require__(0);
const react_redux_1 = __webpack_require__(4);
const actions_1 = __webpack_require__(10);
function useUserData() {
    const data = (0, react_redux_1.useSelector)((state) => state.me.data);
    const loading = (0, react_redux_1.useSelector)((state) => state.me.loading);
    const token = (0, react_redux_1.useSelector)((state) => state.token.token);
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        if (!token || token === 'undefined')
            return;
        dispatch((0, actions_1.meRequestAsync)());
    }, [token, dispatch]);
    return {
        data,
        loading,
    };
}
exports.useUserData = useUserData;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(62), exports);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadTitle = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const threadtitle_css_1 = __importDefault(__webpack_require__(63));
function ThreadTitle() {
    return react_1.default.createElement("h1", { className: threadtitle_css_1.default.threadTitle }, "Header");
}
exports.ThreadTitle = ThreadTitle;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"threadTitle": "threadtitle__threadTitle--oxugx"
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(65), exports);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortBlock = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const sortblock_css_1 = __importDefault(__webpack_require__(66));
function SortBlock() {
    return react_1.default.createElement("div", { className: sortblock_css_1.default.sortBlock }, "sorting dropdown");
}
exports.SortBlock = SortBlock;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sortBlock": "sortblock__sortBlock--141aZ"
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(68), exports);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const content_css_1 = __importDefault(__webpack_require__(69));
function Content({ children }) {
    return react_1.default.createElement("main", { className: content_css_1.default.content }, children);
}
exports.Content = Content;
Content.defaultProps = {
    children: null,
};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "content__content--2O9-S"
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(71), exports);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardList = void 0;
const react_1 = __importStar(__webpack_require__(0));
const cardlist_css_1 = __importDefault(__webpack_require__(72));
const Card_1 = __webpack_require__(73);
const postsContext_1 = __webpack_require__(12);
function CardList() {
    const { data, loading, errorLoading, bottomOfList, count, handleClick } = (0, react_1.useContext)(postsContext_1.postsContext);
    // console.log('postsData >>', data);
    return (react_1.default.createElement("ul", { className: cardlist_css_1.default.cardList },
        data.length === 0 && !loading && !errorLoading && (react_1.default.createElement("div", { style: { textAlign: 'center', fontSize: '24px' } }, "\u041D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0430")),
        data.map((post) => (react_1.default.createElement(Card_1.Card, { key: post.postId, postId: post.postId, avatarSrc: post.avatarSrc, author: post.author, createdAt: post.createdAt, title: post.title, previewImg: post.previewImg, rating: post.rating }))),
        count === 3 ? (react_1.default.createElement("button", { className: cardlist_css_1.default.button, type: 'button', onClick: handleClick }, "Load more")) : (react_1.default.createElement("div", { ref: bottomOfList })),
        loading && (react_1.default.createElement("div", { style: { textAlign: 'center', fontSize: '24px' } }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")),
        errorLoading && (react_1.default.createElement("div", { role: 'alert', style: { textAlign: 'center', fontSize: '24px' } }, errorLoading))));
}
exports.CardList = CardList;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "cardlist__button--3heKa",
	"cardList": "cardlist__cardList--1csLe"
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const card_css_1 = __importDefault(__webpack_require__(74));
const TextContent_1 = __webpack_require__(75);
const Preview_1 = __webpack_require__(79);
const Menu_1 = __webpack_require__(82);
const Controls_1 = __webpack_require__(98);
function Card({ postId, author, title, avatarSrc, createdAt, previewImg, rating, }) {
    return (react_1.default.createElement("li", { className: card_css_1.default.card },
        react_1.default.createElement(TextContent_1.TextContent, { postId: postId, avatarSrc: avatarSrc, author: author, createdAt: createdAt, title: title }),
        react_1.default.createElement(Preview_1.Preview, { previewImg: previewImg }),
        react_1.default.createElement(Menu_1.Menu, { postId: postId }),
        react_1.default.createElement(Controls_1.Controls, { rating: rating })));
}
exports.Card = Card;
Card.defaultProps = {
    postId: null,
    avatarSrc: null,
    author: null,
    createdAt: null,
    title: null,
    previewImg: null,
    rating: null,
};


/***/ }),
/* 74 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "card__card--1msO-",
	"textContent": "card__textContent--Nbh4J"
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(76), exports);


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextContent = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const date_fns_1 = __webpack_require__(11);
const locale_1 = __webpack_require__(77);
const react_router_dom_1 = __webpack_require__(6);
const textcontent_css_1 = __importDefault(__webpack_require__(78));
const getDays_1 = __webpack_require__(16);
const getHours_1 = __webpack_require__(17);
function TextContent({ postId, avatarSrc, author, createdAt = 0, title, }) {
    const createdDatePost = (0, date_fns_1.format)(new Date(createdAt), 'dd MMMM yyyy', {
        locale: locale_1.ru,
    });
    const daysAgo = (0, getDays_1.getDays)(createdAt);
    const hoursAgo = (0, getHours_1.getHours)(createdAt);
    return (react_1.default.createElement("div", { className: textcontent_css_1.default.textContent },
        react_1.default.createElement("div", { className: textcontent_css_1.default.metaData },
            react_1.default.createElement("div", { className: textcontent_css_1.default.userLink },
                react_1.default.createElement("img", { className: textcontent_css_1.default.avatar, src: avatarSrc, alt: 'avatar' }),
                react_1.default.createElement("a", { className: textcontent_css_1.default.username, href: '#user-url' }, author)),
            react_1.default.createElement("span", { className: textcontent_css_1.default.createAt },
                react_1.default.createElement("span", { className: textcontent_css_1.default.publishedLabel }, "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E "),
                react_1.default.createElement("span", { className: textcontent_css_1.default.publishedDate }, createdDatePost),
                react_1.default.createElement("span", { className: textcontent_css_1.default.publishedDays }, parseInt(hoursAgo.split(' ')[0], 10) < 24 ? hoursAgo : daysAgo))),
        react_1.default.createElement("h2", { className: textcontent_css_1.default.title },
            react_1.default.createElement(react_router_dom_1.Link, { className: textcontent_css_1.default.postLink, id: `btnModal_${postId}`, to: `/posts/${postId}` }, title))));
}
exports.TextContent = TextContent;
TextContent.defaultProps = {
    postId: null,
    avatarSrc: null,
    author: null,
    createdAt: 0,
    title: null,
};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("date-fns/locale");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textContent": "textcontent__textContent--2_NpO",
	"createAt": "textcontent__createAt--1eDi_",
	"metaData": "textcontent__metaData--KoG5L",
	"userLink": "textcontent__userLink--1VRAZ",
	"avatar": "textcontent__avatar--1OzfI",
	"username": "textcontent__username--Zwuf8",
	"title": "textcontent__title--3rPFb",
	"postLink": "textcontent__postLink--3e0Gj",
	"publishedLabel": "textcontent__publishedLabel--3K2Y-",
	"publishedDate": "textcontent__publishedDate--inLN3",
	"publishedDays": "textcontent__publishedDays--3YhSP",
	"modal": "textcontent__modal--A1emO"
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(80), exports);


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const preview_css_1 = __importDefault(__webpack_require__(81));
function Preview({ previewImg }) {
    return (react_1.default.createElement("div", { className: preview_css_1.default.preview },
        react_1.default.createElement("img", { className: preview_css_1.default.previewImg, src: previewImg, alt: 'preview' })));
}
exports.Preview = Preview;
Preview.defaultProps = {
    previewImg: null,
};


/***/ }),
/* 81 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"preview": "preview__preview--2tbAa",
	"previewImg": "preview__previewImg--33yAl"
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(83), exports);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const react_1 = __importStar(__webpack_require__(0));
const menu_css_1 = __importDefault(__webpack_require__(84));
const Dropdown_1 = __webpack_require__(85);
const icons_1 = __webpack_require__(8);
const MenuDropdown_1 = __webpack_require__(88);
function Menu({ postId }) {
    var _a;
    const [isDropdownOpen, setIsDropdownOpen] = (0, react_1.useState)(false);
    const btnDropdown = document.getElementById(`btnDropdown_${postId}`);
    const { top, left, right, bottom } = (_a = btnDropdown === null || btnDropdown === void 0 ? void 0 : btnDropdown.getBoundingClientRect()) !== null && _a !== void 0 ? _a : {};
    const elDistanceToTop = window.pageYOffset + (bottom !== null && bottom !== void 0 ? bottom : 0) + 10;
    const elDistanceToLeft = window.pageXOffset + (left !== null && left !== void 0 ? left : 0) - 137;
    return (react_1.default.createElement("div", { className: menu_css_1.default.menu },
        react_1.default.createElement(Dropdown_1.Dropdown, { onClose: () => setIsDropdownOpen(false), onOpen: () => setIsDropdownOpen(true), isOpen: isDropdownOpen, button: react_1.default.createElement("button", { className: menu_css_1.default.menuButton, type: 'button', id: `btnDropdown_${postId}` },
                react_1.default.createElement(icons_1.IconMenuDots, null)) }, isDropdownOpen && (react_1.default.createElement(MenuDropdown_1.MenuDropdown, { onClose: () => setIsDropdownOpen(false), top: elDistanceToTop, left: elDistanceToLeft })))));
}
exports.Menu = Menu;
Menu.defaultProps = {
    postId: null,
};


/***/ }),
/* 84 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menu": "menu__menu--Kvuaj",
	"menuButton": "menu__menuButton--WhNZf",
	"dropdown": "menu__dropdown--po3RG",
	"menuItemsList": "menu__menuItemsList--qW9a0",
	"menuItem": "menu__menuItem--3Tg0P",
	"buttonClose": "menu__buttonClose--3mp1s",
	"mobile": "menu__mobile--2eW0F"
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(86), exports);


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
const react_1 = __importStar(__webpack_require__(0));
const dropdown_css_1 = __importDefault(__webpack_require__(87));
const noop_1 = __webpack_require__(2);
function Dropdown({ button, children, isOpen, onClose = noop_1.noop, onOpen = noop_1.noop, }) {
    const [isDropdownOpen, setIsDropdownOpen] = (0, react_1.useState)(isOpen);
    (0, react_1.useEffect)(() => setIsDropdownOpen(isOpen), [isOpen]);
    (0, react_1.useEffect)(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen]);
    const handleOpen = () => {
        if (isOpen !== undefined) {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };
    return (react_1.default.createElement("div", { className: dropdown_css_1.default.container },
        react_1.default.createElement("div", { role: 'button', tabIndex: 0, onClick: handleOpen, onKeyDown: (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    handleOpen();
                }
            } }, button),
        isDropdownOpen && (react_1.default.createElement("div", { className: dropdown_css_1.default.listContainer },
            react_1.default.createElement("div", { role: 'menuitem', className: dropdown_css_1.default.list, onClick: () => setIsDropdownOpen(false), onKeyDown: (event) => {
                    if (event.key === 'Escape' || event.key === 'Tab') {
                        setIsDropdownOpen(false);
                    }
                }, tabIndex: 0 }, children)))));
}
exports.Dropdown = Dropdown;
Dropdown.defaultProps = {
    isOpen: false,
    onOpen: noop_1.noop,
    onClose: noop_1.noop,
};


/***/ }),
/* 87 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "dropdown__container--a5Jzh",
	"listContainer": "dropdown__listContainer--YYYB3",
	"list": "dropdown__list--23slg"
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(89), exports);


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuDropdown = void 0;
const react_1 = __importStar(__webpack_require__(0));
const react_dom_1 = __importDefault(__webpack_require__(18));
const menudropdown_css_1 = __importDefault(__webpack_require__(90));
const GenericList_1 = __webpack_require__(91);
const Icon_1 = __webpack_require__(5);
const Text_1 = __webpack_require__(9);
const enums_1 = __webpack_require__(1);
const generateRandomIndex_1 = __webpack_require__(94);
const merge_1 = __webpack_require__(96);
const noop_1 = __webpack_require__(2);
const useClickOut_1 = __webpack_require__(97);
const classHideItem = `${menudropdown_css_1.default.menuItem} ${menudropdown_css_1.default.mobile}`;
const LIST = [
    {
        text: (react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: enums_1.EColors.grey99 }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438")),
        icon: react_1.default.createElement(Icon_1.Icon, { name: enums_1.EIcons.comments, mobileSize: 12, size: 14 }),
        className: classHideItem,
    },
    {
        text: (react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: enums_1.EColors.grey99 }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F")),
        icon: react_1.default.createElement(Icon_1.Icon, { name: enums_1.EIcons.shareLight, mobileSize: 12, size: 14 }),
        className: classHideItem,
    },
    {
        text: (react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: enums_1.EColors.grey99 }, "\u0421\u043A\u0440\u044B\u0442\u044C")),
        icon: react_1.default.createElement(Icon_1.Icon, { name: enums_1.EIcons.hide, mobileSize: 12, size: 14 }),
        className: menudropdown_css_1.default.menuItem,
    },
    {
        text: (react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: enums_1.EColors.grey99 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")),
        icon: react_1.default.createElement(Icon_1.Icon, { name: enums_1.EIcons.saveLight, mobileSize: 12, size: 14 }),
        className: classHideItem,
    },
    {
        text: (react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: enums_1.EColors.grey99 }, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F")),
        icon: react_1.default.createElement(Icon_1.Icon, { name: enums_1.EIcons.complain, mobileSize: 12, size: 14 }),
        className: menudropdown_css_1.default.menuItem,
    },
].map(generateRandomIndex_1.generateId);
function MenuDropdown({ top, left, onClose }) {
    const [list, setList] = (0, react_1.useState)(LIST);
    const refDropdown = (0, useClickOut_1.useClickOut)(onClose);
    const handleItemClick = (id) => {
        console.log(id);
    };
    const node = document.getElementById('dropdown_root');
    if (!node)
        return null;
    return react_dom_1.default.createPortal(react_1.default.createElement("div", { className: menudropdown_css_1.default.dropdown, ref: refDropdown, style: { top: `${top}px`, left: `${left}px` } },
        react_1.default.createElement("ul", { className: menudropdown_css_1.default.menuItemsList },
            react_1.default.createElement(GenericList_1.GenericList, { list: list.map((0, merge_1.merge)({
                    As: 'li',
                    onClick: handleItemClick,
                    divider: true,
                })) })),
        react_1.default.createElement("button", { type: 'button', className: menudropdown_css_1.default.buttonClose },
            react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: enums_1.EColors.grey66 }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))), node);
}
exports.MenuDropdown = MenuDropdown;
MenuDropdown.defaultProps = {
    top: 0,
    left: 0,
    onClose: noop_1.noop,
};


/***/ }),
/* 90 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"dropdown": "menudropdown__dropdown---7QL0",
	"menuItemsList": "menudropdown__menuItemsList--iwCGN",
	"menuItem": "menudropdown__menuItem--1Di7z",
	"buttonClose": "menudropdown__buttonClose--111e_",
	"mobile": "menudropdown__mobile--3uVe4"
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(92), exports);


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericList = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const genericlist_css_1 = __importDefault(__webpack_require__(93));
const noop_1 = __webpack_require__(2);
function GenericList({ list }) {
    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(({ As = 'div', text, onClick = noop_1.noop, className, id, href, divider = false, icon, }) => {
        return (react_1.default.createElement(As, { className: className, onClick: () => onClick(id), key: id, href: href },
            icon,
            react_1.default.createElement("span", null, text),
            divider && react_1.default.createElement("span", { className: genericlist_css_1.default.divider })));
    })));
}
exports.GenericList = GenericList;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"divider": "genericlist__divider--2GxxU"
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = exports.assignId = exports.generateRandomString = void 0;
const assoc_1 = __webpack_require__(95);
const generateRandomString = () => Math.random().toString(36).substring(2, 15);
exports.generateRandomString = generateRandomString;
exports.assignId = (0, assoc_1.assoc)('id', (0, exports.generateRandomString)());
const generateId = (obj) => (0, assoc_1.assoc)('id', (0, exports.generateRandomString)())(obj);
exports.generateId = generateId;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.assoc = void 0;
function assoc(key, value) {
    return (obj) => (Object.assign(Object.assign({}, obj), { [key]: value }));
}
exports.assoc = assoc;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(obj) {
    return (obj2) => (Object.assign(Object.assign({}, obj), obj2));
}
exports.merge = merge;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useClickOut = void 0;
const react_1 = __webpack_require__(0);
function useClickOut(onClose) {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node &&
                !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }
        }
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    return ref;
}
exports.useClickOut = useClickOut;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(99), exports);


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const controls_css_1 = __importDefault(__webpack_require__(100));
const icons_1 = __webpack_require__(8);
const enums_1 = __webpack_require__(1);
const Icon_1 = __webpack_require__(5);
function Controls({ rating }) {
    return (react_1.default.createElement("div", { className: controls_css_1.default.controls },
        react_1.default.createElement("div", { className: controls_css_1.default.karmaCounter },
            react_1.default.createElement("button", { className: controls_css_1.default.up, type: 'button' },
                react_1.default.createElement(icons_1.IconArrowUp, null)),
            react_1.default.createElement("span", { className: controls_css_1.default.karmaValue }, rating),
            react_1.default.createElement("button", { className: controls_css_1.default.down, type: 'button' },
                react_1.default.createElement(icons_1.IconArrowDown, null))),
        react_1.default.createElement("button", { className: controls_css_1.default.commentsButton, type: 'button' },
            react_1.default.createElement(Icon_1.Icon, { name: enums_1.EIcons.comments, size: 16 }),
            react_1.default.createElement("span", { className: controls_css_1.default.commentNumber }, "13")),
        react_1.default.createElement("div", { className: controls_css_1.default.actions },
            react_1.default.createElement("button", { className: controls_css_1.default.shareButton, type: 'button' },
                react_1.default.createElement(Icon_1.Icon, { name: enums_1.EIcons.share, size: 20 })),
            react_1.default.createElement("button", { className: controls_css_1.default.saveButton, type: 'button' },
                react_1.default.createElement(Icon_1.Icon, { name: enums_1.EIcons.save, size: 20 })))));
}
exports.Controls = Controls;
Controls.defaultProps = {
    rating: null,
};


/***/ }),
/* 100 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"controls": "controls__controls--1-dWi",
	"karmaCounter": "controls__karmaCounter--SvsM3",
	"karmaValue": "controls__karmaValue--GdJKQ",
	"down": "controls__down--2mx9d",
	"commentsButton": "controls__commentsButton--290Nn",
	"commentNumber": "controls__commentNumber--3PT7e",
	"actions": "controls__actions--ahe_O",
	"saveButton": "controls__saveButton--z-wT4",
	"shareButton": "controls__shareButton--2becu",
	"publishedLabel": "controls__publishedLabel--1xoeO",
	"up": "controls__up--1nV0P"
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePostsData = void 0;
/* eslint-disable camelcase */
const axios_1 = __importDefault(__webpack_require__(3));
const react_1 = __webpack_require__(0);
const react_redux_1 = __webpack_require__(4);
function usePostsData() {
    const [data, setData] = (0, react_1.useState)([]);
    const [nextAfter, setNextAfter] = (0, react_1.useState)('');
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [errorLoading, setErrorLoading] = (0, react_1.useState)('');
    const [count, setCount] = (0, react_1.useState)(0);
    const token = (0, react_redux_1.useSelector)((state) => state.token.token);
    const dispatch = (0, react_redux_1.useDispatch)();
    const bottomOfList = (0, react_1.useRef)(null);
    const handleClick = () => {
        setCount(0);
    };
    (0, react_1.useEffect)(() => {
        dispatch({ type: 'POSTS_REQUEST' });
        if (!token || token === 'undefined')
            return;
        function load() {
            return __awaiter(this, void 0, void 0, function* () {
                setLoading(true);
                setErrorLoading('');
                try {
                    const res = yield axios_1.default.get('https://oauth.reddit.com/best.json?sr_detail=true', {
                        headers: { Authorization: `bearer ${token}` },
                        params: {
                            limit: 10,
                            after: nextAfter,
                        },
                    });
                    const postsData = res.data.data.children.map((item) => {
                        var _a;
                        return ({
                            postId: item.data.id,
                            title: item.data.title,
                            author: item.data.author,
                            avatarSrc: item.data.sr_detail.icon_img
                                ? item.data.sr_detail.icon_img
                                : 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg',
                            previewImg: item.data.preview
                                ? (_a = item.data.preview.images) === null || _a === void 0 ? void 0 : _a[0].source.url.replace(/(&amp;)/g, '&')
                                : 'https://i.ibb.co/HtCW9GN/noimage.png',
                            createdAt: item.data.sr_detail.created_utc,
                            rating: item.data.ups,
                        });
                    });
                    setData((prevChildren) => prevChildren.concat(...postsData));
                    const { after } = res.data.data;
                    setNextAfter(after);
                    if (count < 3) {
                        const acc = count + 1;
                        setCount(acc);
                    }
                    dispatch({ type: 'POSTS_REQUEST_SUCCESS' });
                    setLoading(false);
                }
                catch (error) {
                    setErrorLoading(String(error));
                    dispatch({ type: 'POSTS_REQUEST_ERROR' });
                    setLoading(false);
                }
                return undefined;
            });
        }
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                load();
            }
        }, {
            rootMargin: '10px',
        });
        if (bottomOfList.current) {
            observer.observe(bottomOfList.current);
        }
        // eslint-disable-next-line consistent-return
        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        };
    }, [token, dispatch, nextAfter, count]);
    return { data, loading, errorLoading, bottomOfList, count, handleClick };
}
exports.usePostsData = usePostsData;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = exports.updateComment = void 0;
const actions_1 = __webpack_require__(10);
const reducer_1 = __webpack_require__(103);
const reducer_2 = __webpack_require__(104);
const actions_2 = __webpack_require__(13);
const initialState = {
    commentText: 'Привет, Skillbox!',
    token: {
        loading: false,
        error: '',
        token: '',
    },
    me: {
        loading: false,
        error: '',
        data: {},
    },
};
const UPDATE_COMMENT = 'UPDATE_COMMENT';
const updateComment = (text) => ({
    type: UPDATE_COMMENT,
    text,
});
exports.updateComment = updateComment;
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return Object.assign(Object.assign({}, state), { commentText: action.text });
        case actions_1.ME_REQUEST:
        case actions_1.ME_REQUEST_SUCCESS:
        case actions_1.ME_REQUEST_ERROR:
            return Object.assign(Object.assign({}, state), { me: (0, reducer_1.meReducer)(state.me, action) });
        case actions_2.TOKEN_REQUEST:
        case actions_2.TOKEN_REQUEST_SUCCESS:
        case actions_2.TOKEN_REQUEST_ERROR:
            return Object.assign(Object.assign({}, state), { token: (0, reducer_2.tokenReducer)(state.token, action) });
        default:
            return state;
    }
};
exports.rootReducer = rootReducer;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.meReducer = void 0;
const actions_1 = __webpack_require__(10);
const meReducer = (state, action) => {
    switch (action.type) {
        case actions_1.ME_REQUEST:
            return Object.assign(Object.assign({}, state), { loading: true });
        case actions_1.ME_REQUEST_ERROR:
            return Object.assign(Object.assign({}, state), { error: action.error, loading: false });
        case actions_1.ME_REQUEST_SUCCESS:
            return Object.assign(Object.assign({}, state), { data: action.data, loading: false });
        default:
            return state;
    }
};
exports.meReducer = meReducer;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenReducer = void 0;
const actions_1 = __webpack_require__(13);
const tokenReducer = (state, action) => {
    switch (action.type) {
        case actions_1.TOKEN_REQUEST:
            return Object.assign(Object.assign({}, state), { loading: true });
        case actions_1.TOKEN_REQUEST_ERROR:
            return Object.assign(Object.assign({}, state), { error: action.error, loading: false });
        case actions_1.TOKEN_REQUEST_SUCCESS:
            return Object.assign(Object.assign({}, state), { token: action.token, loading: false });
        default:
            return state;
    }
};
exports.tokenReducer = tokenReducer;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(106), exports);


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const react_1 = __importStar(__webpack_require__(0));
const react_dom_1 = __importDefault(__webpack_require__(18));
const react_router_dom_1 = __webpack_require__(6);
const post_css_1 = __importDefault(__webpack_require__(107));
const Comments_1 = __webpack_require__(108);
const useCommentsData_1 = __webpack_require__(114);
const IconClose_1 = __webpack_require__(115);
const CommentFormContainer_1 = __webpack_require__(116);
const postsContext_1 = __webpack_require__(12);
function Post() {
    var _a;
    const [postId, setPostId] = (0, react_1.useState)('');
    const commentsData = (0, useCommentsData_1.useCommentsData)(postId)[0];
    const ref = (0, react_1.useRef)(null);
    const history = (0, react_router_dom_1.useHistory)();
    const { data } = (0, react_1.useContext)(postsContext_1.postsContext);
    let title = '';
    data.forEach((post) => {
        if (postId === post.postId) {
            title = post.title;
        }
    });
    (0, react_1.useEffect)(() => {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node &&
                !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                history.push('/posts');
            }
        }
        document.addEventListener('click', handleClick);
        if (window.location.pathname) {
            setPostId(window.location.pathname.split('/')[2]);
        }
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [history]);
    const node = document.getElementById('modal_root');
    if (!node)
        return null;
    const btnModal = document.getElementById(`btnModal_${postId}`);
    const { top } = (_a = btnModal === null || btnModal === void 0 ? void 0 : btnModal.getBoundingClientRect()) !== null && _a !== void 0 ? _a : {};
    const elDistanceToTop = window.scrollY + (top !== null && top !== void 0 ? top : 0);
    return react_dom_1.default.createPortal(react_1.default.createElement("div", { className: post_css_1.default.modal, ref: ref, style: { top: `${elDistanceToTop}px` } },
        react_1.default.createElement("div", { className: post_css_1.default.topPost },
            react_1.default.createElement("h2", { className: post_css_1.default.title }, title),
            react_1.default.createElement("button", { type: 'button', className: post_css_1.default.close, onClick: () => history.push('/posts') },
                react_1.default.createElement(IconClose_1.IconClose, null))),
        react_1.default.createElement("div", { className: post_css_1.default.content },
            react_1.default.createElement("p", { className: post_css_1.default.description }, "\u0415\u0441\u0442\u044C \u043D\u0430\u0434 \u0447\u0435\u043C \u0437\u0430\u0434\u0443\u043C\u0430\u0442\u044C\u0441\u044F: \u0442\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0441\u043E\u0431\u043E\u0439 \u043D\u0435 \u0447\u0442\u043E \u0438\u043D\u043E\u0435, \u043A\u0430\u043A \u043A\u0432\u0438\u043D\u0442\u044D\u0441\u0441\u0435\u043D\u0446\u0438\u044E \u043F\u043E\u0431\u0435\u0434\u044B \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430 \u043D\u0430\u0434 \u0440\u0430\u0437\u0443\u043C\u043E\u043C \u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u043F\u043E \u043E\u0442\u0440\u0430\u0441\u043B\u044F\u043C. \u041F\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043E, \u043D\u0430\u0447\u0430\u043B\u043E \u043F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043E\u0434\u043D\u043E\u0437\u043D\u0430\u0447\u043D\u043E \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u044C \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0443\u0441\u0438\u043B\u0438\u0439. \u041D\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u043A\u0438 \u0442\u043E\u0442\u0430\u043B\u0438\u0442\u0430\u0440\u0438\u0437\u043C\u0430 \u0432 \u043D\u0430\u0443\u043A\u0435 \u0438 \u043F\u043E \u0441\u0435\u0439 \u0434\u0435\u043D\u044C \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0443\u0434\u0435\u043B\u043E\u043C \u043B\u0438\u0431\u0435\u0440\u0430\u043B\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0436\u0430\u0436\u0434\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0435\u043D\u044B \u0432 \u043F\u043E\u0441\u043C\u0435\u0448\u0438\u0449\u0435, \u0445\u043E\u0442\u044F \u0441\u0430\u043C\u043E \u0438\u0445 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442 \u043D\u0435\u0441\u043E\u043C\u043D\u0435\u043D\u043D\u0443\u044E \u043F\u043E\u043B\u044C\u0437\u0443 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0443."),
            react_1.default.createElement("p", { className: post_css_1.default.description }, "\u0411\u0435\u0437\u0443\u0441\u043B\u043E\u0432\u043D\u043E, \u0433\u043B\u0443\u0431\u043E\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u043E\u0433\u0440\u0443\u0436\u0435\u043D\u0438\u044F \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u044C \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0432 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u043B\u0430\u043D \u0446\u0435\u043B\u043E\u0433\u043E \u0440\u044F\u0434\u0430 \u0432\u043D\u0435\u043E\u0447\u0435\u0440\u0435\u0434\u043D\u044B\u0445 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u0441 \u0443\u0447\u0451\u0442\u043E\u043C \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043C\u0430\u0441\u0441\u043E\u0432\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u0438\u044F. \u0412\u043D\u0435\u0437\u0430\u043F\u043D\u043E, \u0441\u0434\u0435\u043B\u0430\u043D\u043D\u044B\u0435 \u043D\u0430 \u0431\u0430\u0437\u0435 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438 \u0432\u044B\u0432\u043E\u0434\u044B \u043E\u0441\u0432\u0435\u0449\u0430\u044E\u0442 \u0447\u0440\u0435\u0437\u0432\u044B\u0447\u0430\u0439\u043D\u043E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u044B \u0432 \u0446\u0435\u043B\u043E\u043C, \u043E\u0434\u043D\u0430\u043A\u043E \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u0432\u044B\u0432\u043E\u0434\u044B, \u0440\u0430\u0437\u0443\u043C\u0435\u0435\u0442\u0441\u044F, \u043E\u043F\u0438\u0441\u0430\u043D\u044B \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E."),
            react_1.default.createElement("p", { className: post_css_1.default.description }, "\u0420\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0438 \u0431\u043E\u0433\u0430\u0442\u044B\u0439 \u043E\u043F\u044B\u0442 \u0433\u043E\u0432\u043E\u0440\u0438\u0442 \u043D\u0430\u043C, \u0447\u0442\u043E \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043D\u0430\u043C\u0438 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043F\u0443\u0442\u044C \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0448\u0438\u0440\u043E\u043A\u043E\u043C\u0443 \u043A\u0440\u0443\u0433\u0443 (\u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432) \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u043D\u043E\u0432\u044B\u0445 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u043E\u0432 \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u043E-\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0438 \u043A\u0430\u0434\u0440\u043E\u0432\u043E\u0439 \u0431\u0430\u0437\u044B. \u0422\u0430\u043A\u0436\u0435 \u043A\u0430\u043A \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0430\u044F \u0442\u0435\u043E\u0440\u0438\u044F \u0432 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0441\u0442\u0435\u043F\u0435\u043D\u0438 \u043E\u0431\u0443\u0441\u043B\u043E\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u0432\u0430\u0436\u043D\u043E\u0441\u0442\u044C \u0431\u043B\u0430\u0433\u043E\u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0445 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432. \u0414\u043B\u044F \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u043C\u0438\u0440\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u0441 \u0448\u0438\u0440\u043E\u043A\u0438\u043C \u0430\u043A\u0442\u0438\u0432\u043E\u043C \u043E\u0434\u043D\u043E\u0437\u043D\u0430\u0447\u043D\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430 \u043A\u0430\u043A \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043A\u0430\u0441\u0430\u0435\u043C\u043E \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0440\u0430\u0437\u0443\u043C\u0430 \u043D\u0430\u0434 \u044D\u043C\u043E\u0446\u0438\u044F\u043C\u0438!")),
        react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, null),
        react_1.default.createElement("div", { className: post_css_1.default.sortContainer },
            react_1.default.createElement("label", { className: post_css_1.default.labelComment, htmlFor: 'sortComments' }, "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E:"),
            react_1.default.createElement("select", { className: post_css_1.default.selectComment, name: 'sortComments', id: 'sortComments' },
                react_1.default.createElement("option", { value: '\u041B\u0443\u0447\u0448\u0438\u0435' }, "\u041B\u0443\u0447\u0448\u0438\u0435"),
                react_1.default.createElement("option", { value: '\u041D\u043E\u0432\u044B\u0435' }, "\u041D\u043E\u0432\u044B\u0435"))),
        react_1.default.createElement("div", { className: post_css_1.default.divider }),
        commentsData.map((item) => (react_1.default.createElement(Comments_1.Comments, { key: item.commentId, commentId: item.commentId, author: item.author, parentId: item.parentId, body: item.body, createdAt: item.createdAt })))), node);
}
exports.Post = Post;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modal": "post__modal--yRo-c",
	"topPost": "post__topPost--3zsH_",
	"title": "post__title--xhpd2",
	"content": "post__content--2gFMc",
	"description": "post__description--1s0lz",
	"close": "post__close--1HSqz",
	"sortContainer": "post__sortContainer--2081u",
	"labelComment": "post__labelComment--2Nust",
	"selectComment": "post__selectComment--3jumu",
	"divider": "post__divider--2etHm"
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(109), exports);


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comments = void 0;
const react_1 = __importStar(__webpack_require__(0));
const comments_css_1 = __importDefault(__webpack_require__(110));
const Icon_1 = __webpack_require__(5);
const enums_1 = __webpack_require__(1);
const Text_1 = __webpack_require__(9);
const Break_1 = __webpack_require__(15);
const getDays_1 = __webpack_require__(16);
const getHours_1 = __webpack_require__(17);
const ReplayForm_1 = __webpack_require__(111);
function Comments({ commentId, parentId, author, body, createdAt = 0, }) {
    const [isReplyFormOpen, setIsReplyFormOpen] = (0, react_1.useState)(false);
    const daysAgo = (0, getDays_1.getDays)(createdAt);
    const hoursAgo = (0, getHours_1.getHours)(createdAt);
    return (react_1.default.createElement("div", { className: comments_css_1.default.commentsContainer },
        react_1.default.createElement("div", { className: comments_css_1.default.authorContainer },
            react_1.default.createElement("div", { className: comments_css_1.default.author }, author),
            react_1.default.createElement("div", { className: comments_css_1.default.createdAt }, parseInt(hoursAgo.split(' ')[0], 10) < 24 ? hoursAgo : daysAgo),
            react_1.default.createElement("div", { className: comments_css_1.default.badge }, "\u041B\u0438\u0433\u0430 \u044E\u0440\u0438\u0441\u0442\u043E\u0432")),
        react_1.default.createElement("div", { className: comments_css_1.default.body }, body),
        isReplyFormOpen && react_1.default.createElement(ReplayForm_1.ReplyForm, null),
        react_1.default.createElement("button", { type: 'button', className: comments_css_1.default.buttonSend, onClick: () => setIsReplyFormOpen(true) },
            react_1.default.createElement(Icon_1.Icon, { name: enums_1.EIcons.comments, size: 14 }),
            react_1.default.createElement(Break_1.Break, { size: 4 }),
            react_1.default.createElement(Text_1.Text, { size: 14, color: enums_1.EColors.grey99 }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"))));
}
exports.Comments = Comments;
Comments.defaultProps = {
    commentId: null,
    parentId: null,
    author: null,
    body: null,
    createdAt: 0,
};


/***/ }),
/* 110 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"authorContainer": "comments__authorContainer--3_Q8R",
	"author": "comments__author--GSLz1",
	"createdAt": "comments__createdAt--29q-C",
	"badge": "comments__badge--2HkMa",
	"body": "comments__body--2QZCh",
	"commentsContainer": "comments__commentsContainer--u3KI-",
	"buttonSend": "comments__buttonSend--3eL78"
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(112), exports);


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyForm = void 0;
const react_1 = __importStar(__webpack_require__(0));
const replyform_css_1 = __importDefault(__webpack_require__(113));
const replyContext_1 = __webpack_require__(19);
function ReplyForm() {
    const refReply = (0, react_1.useRef)(null);
    const { value, onChange } = (0, react_1.useContext)(replyContext_1.replyContext);
    // ! uncontrolled
    // const [defaultValue, setDefaultValue] = useState('');
    // useEffect(() => {
    //   return setDefaultValue('Michael Rogov, ');
    // }, []);
    (0, react_1.useEffect)(() => {
        return onChange('Michael Rogov, ');
    }, [onChange]);
    (0, react_1.useEffect)(() => {
        var _a;
        return (_a = refReply.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    function handleChange(event) {
        onChange(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(value);
    }
    return (react_1.default.createElement("form", { className: replyform_css_1.default.form, onSubmit: handleSubmit },
        react_1.default.createElement("textarea", { className: replyform_css_1.default.input, ref: refReply, 
            // defaultValue={defaultValue}
            value: value, onChange: handleChange }),
        react_1.default.createElement("button", { type: 'submit', className: replyform_css_1.default.button }, "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C")));
}
exports.ReplyForm = ReplyForm;


/***/ }),
/* 113 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "replyform__form--LEv2O",
	"input": "replyform__input--1l_YH",
	"button": "replyform__button--2MZ2L"
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCommentsData = void 0;
const react_1 = __webpack_require__(0);
const axios_1 = __importDefault(__webpack_require__(3));
const react_redux_1 = __webpack_require__(4);
function useCommentsData(postId) {
    const [data, setData] = (0, react_1.useState)([]);
    const token = (0, react_redux_1.useSelector)((state) => state.token.token);
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        dispatch({ type: 'COMMENTS_REQUEST' });
        if (!token || token === 'undefined')
            return;
        axios_1.default
            .get(`https://oauth.reddit.com/comments/${postId}`, {
            headers: { Authorization: `bearer ${token}` },
        })
            .then((res) => {
            var _a;
            const commentsData = (_a = res.data) === null || _a === void 0 ? void 0 : _a[1].data.children.map((item) => ({
                commentId: item.data.id,
                parentId: item.data.parent_id,
                author: item.data.author,
                body: item.data.body,
                createdAt: item.data.created_utc,
            }));
            setData(commentsData);
            dispatch({ type: 'COMMENTS_REQUEST_SUCCESS' });
        })
            .catch((error) => {
            console.log(String(error));
            dispatch({ type: 'COMMENTS_REQUEST_ERROR' });
        });
    }, [token, postId, dispatch]);
    return [data];
}
exports.useCommentsData = useCommentsData;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconClose = void 0;
const react_1 = __importDefault(__webpack_require__(0));
function IconClose() {
    return (react_1.default.createElement("svg", { width: '21', height: '21', viewBox: '0 0 21 21', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        react_1.default.createElement("path", { d: 'M19.7991 3.05176e-05L20.7419 0.942838L0.94289 20.7418L8.27312e-05 19.799L19.7991 3.05176e-05Z', fill: '#ADADAD' }),
        react_1.default.createElement("path", { d: 'M20.7418 19.799L19.799 20.7418L2.47121e-05 0.942798L0.942833 -1.04904e-05L20.7418 19.799Z', fill: '#ADADAD' })));
}
exports.IconClose = IconClose;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(117), exports);


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentFormContainer = void 0;
const react_1 = __importStar(__webpack_require__(0));
const react_hook_form_1 = __webpack_require__(118);
const yup_1 = __webpack_require__(119);
const yup = __importStar(__webpack_require__(120));
const CommentForm_1 = __webpack_require__(121);
const schema = yup.object({
    commentText: yup.string().min(4, 'Введите больше 3-х символов'),
});
function CommentFormContainer() {
    const [value, setValue] = (0, react_1.useState)('');
    const [touched, setTouched] = (0, react_1.useState)(false);
    const { register, handleSubmit, formState: { errors }, reset, } = (0, react_hook_form_1.useForm)({
        // mode: 'onBlur',
        resolver: (0, yup_1.yupResolver)(schema),
    });
    const handleChange = (event) => {
        setValue(event.target.value);
        setTouched(true);
    };
    // function handleBlur() {
    //   setTouched(false);
    // }
    const onSubmit = (data) => {
        setTouched(true);
        console.log(data.commentText);
        setValue('');
        reset();
    };
    return (react_1.default.createElement(CommentForm_1.CommentForm, { value: value, onChange: handleChange, onSubmit: handleSubmit(onSubmit), register: register, errors: errors, touched: touched }));
}
exports.CommentFormContainer = CommentFormContainer;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = require("@hookform/resolvers/yup");

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(122), exports);


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentForm = void 0;
/* eslint-disable react/jsx-props-no-spreading */
const react_1 = __importDefault(__webpack_require__(0));
const commentform_css_1 = __importDefault(__webpack_require__(123));
function CommentForm({ value, onChange, onSubmit, register, errors, touched, }) {
    var _a;
    return (react_1.default.createElement("form", { className: commentform_css_1.default.form, onSubmit: onSubmit },
        react_1.default.createElement("label", { className: commentform_css_1.default.label, "aria-label": '\u041F\u043E\u043B\u0435 \u0434\u043B\u044F \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F' },
            react_1.default.createElement("textarea", Object.assign({ className: commentform_css_1.default.input, value: value }, register('commentText', {
                onChange,
            }), { "aria-invalid": errors.commentText ? 'true' : undefined }))),
        touched && errors.commentText && (react_1.default.createElement("div", { className: commentform_css_1.default.error }, (_a = errors.commentText) === null || _a === void 0 ? void 0 : _a.message)),
        react_1.default.createElement("button", { type: 'submit', className: commentform_css_1.default.button }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")));
}
exports.CommentForm = CommentForm;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "commentform__form--Cs1Oi",
	"label": "commentform__label--1m8e-",
	"input": "commentform__input--2fC-z",
	"error": "commentform__error--1ux_J",
	"button": "commentform__button--35eLT"
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(125), exports);


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page404 = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const page404_css_1 = __importDefault(__webpack_require__(126));
function Page404() {
    return (react_1.default.createElement("div", { className: page404_css_1.default.page },
        react_1.default.createElement("div", { className: page404_css_1.default.container },
            react_1.default.createElement("div", { className: page404_css_1.default.number }, "404"),
            react_1.default.createElement("div", { className: page404_css_1.default.string }, "Not Found"))));
}
exports.Page404 = Page404;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"page": "page404__page--13GYD",
	"container": "page404__container--2NHoK",
	"number": "page404__number--1bSer",
	"string": "page404__string--6pIBs"
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
const indexTemplate = (content, token) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <title>Reddit</title>
    <script>
      window.__token__ = '${token}'
    </script>
    <script src='/static/client.js' type='application/javascript'></script>
  </head>

  <body>
    <div id="app_root">${content}</div>
    <div id="modal_root"></div>
    <div id="dropdown_root"></div>
  </body>
</html>
`;
exports.indexTemplate = indexTemplate;


/***/ })
/******/ ]);