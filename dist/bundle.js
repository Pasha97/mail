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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.components.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.components.ts":
/*!***************************!*\
  !*** ./app.components.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./module.components.ts */ "./module.components.ts");
__webpack_require__(/*! ./select.components.ts */ "./select.components.ts");
var width, color, elem, lenta;
setTimeout(function dateTime() {
    var d = new Date(), day = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"], month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"], date = document.getElementById("date");
    date.innerHTML = d.getDate() + " " + month[d.getMonth()] + ", " + day[d.getDay()] + "   " + (d.getHours() < 10 ? '0' : '') + d.getHours() + ":" + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes() + ":" + (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();
    setTimeout(dateTime, 1000);
}, 1000);
function goToTop(scrollPosition) {
    var up = document.querySelector(".up");
    if (scrollPosition >= 500) {
        up.style.visibility = "visible";
        up.style.transition = "3s";
        up.style.opacity = "1";
        up.onclick = function UpPage() {
            window.scrollBy(0, -100);
            if (window.pageYOffset > 0) {
                requestAnimationFrame(UpPage);
                up.style.transition = "";
                up.style.opacity = "";
                up.style.visibility = "";
            }
        };
    }
    else {
        up.style.transition = "";
        up.style.opacity = "";
        up.style.visibility = "";
    }
}
var onScroll = debounce(function () {
    return __awaiter(this, void 0, void 0, function () {
        var bottom_1, scrollMax, ScrollPosition, loader, promise, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    bottom_1 = document.querySelector(".container__bottom"), scrollMax = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight), ScrollPosition = Math.round(document.documentElement.scrollTop);
                    goToTop(ScrollPosition);
                    if (!((ScrollPosition + window.innerHeight) === scrollMax)) return [3 /*break*/, 2];
                    loader = document.querySelector(".loader");
                    loader.style.visibility = "visible";
                    loader.style.opacity = "1";
                    createLenta();
                    promise = new Promise(function (resolve, reject) {
                        setTimeout(function () { return resolve(bottom_1.appendChild(lenta)); }, 2000);
                    });
                    return [4 /*yield*/, promise];
                case 1:
                    _a.sent();
                    clearStyle(loader, "opacity, visibility");
                    _a.label = 2;
                case 2: return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    alert("Error");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}, 250);
addEventListener("scroll", onScroll);
//HELPS
function getRandomWidth() {
    var allwidth = [200, 300, 250];
    return allwidth[Math.floor(Math.random() * allwidth.length)];
}
function getRandomColor() {
    var r = Math.floor(Math.random() * 255), g = Math.floor(Math.random() * 255), b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
function createElem() {
    width = getRandomWidth();
    color = getRandomColor();
    elem = document.createElement("div");
    elem.className = "lenta__elem";
    elem.style.width = getRandomWidth() + "px";
    elem.style.background = "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
    return elem;
}
function createLenta() {
    lenta = document.createElement("div");
    lenta.className = "lenta";
    for (var i = 0; i < 3; i++) {
        lenta.appendChild(createElem());
    }
}
var element, styles;
// function clearStyle(a: HTMLElement): any {
//
//     return a.setAttribute("style", " ");
// }
function clearStyle(element, styles) {
    var getStyleBlock = getComputedStyle(element), arrStyle = styles.split(", ");
    for (var i = 0; i < getStyleBlock.length; i++) {
        for (var j = 0; j < arrStyle.length; j++) {
            if (getStyleBlock[i] === arrStyle[j]) {
                getStyleBlock[i];
            }
        }
    }
}
//debounce//
function debounce(func, wait) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () { return func.apply(context, args); }, wait);
    };
}
var login = document.querySelector(".login-yandex");
login.addEventListener('mousemove', debounce(function () {
    console.log("debaunce");
}, 250));
//throttle//
function throttle(func, limit) {
    var lastFunc, lastRan;
    return function () {
        var context = this;
        var args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        }
        else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}
login.addEventListener('touchmove', throttle(function () {
    console.log("trottle");
}, 2000));
//resize//
function resize(func, limit) {
    var timer;
    return function () {
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(func, limit);
    };
}
window.addEventListener('resize', resize(function () {
    console.log("resize");
}, 1000));


/***/ }),

/***/ "./module.components.ts":
/*!******************************!*\
  !*** ./module.components.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

console.log("Module");


/***/ }),

/***/ "./select.components.ts":
/*!******************************!*\
  !*** ./select.components.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

console.log("Select");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlLmNvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VsZWN0LmNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsNEVBQWdDO0FBQ2hDLDRFQUFnQztBQUVoQyxJQUFJLEtBQWEsRUFBRSxLQUFlLEVBQUUsSUFBaUIsRUFBRSxLQUFrQixDQUFDO0FBRTFFLFVBQVUsQ0FBQztJQUNQLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLEVBQ2QsR0FBRyxHQUFhLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFF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QkFBZ0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO0lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQzNMVixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNBdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC5jb21wb25lbnRzLnRzXCIpO1xuIiwiaW1wb3J0IFwiLi9tb2R1bGUuY29tcG9uZW50cy50c1wiO1xyXG5pbXBvcnQgXCIuL3NlbGVjdC5jb21wb25lbnRzLnRzXCI7XHJcblxyXG5sZXQgd2lkdGg6IG51bWJlciwgY29sb3I6IG51bWJlcltdLCBlbGVtOiBIVE1MRWxlbWVudCwgbGVudGE6IEhUTUxFbGVtZW50O1xyXG5cclxuc2V0VGltZW91dChmdW5jdGlvbiBkYXRlVGltZSgpOiB2b2lkIHtcclxuICAgIGxldCBkID0gbmV3IERhdGUoKSxcclxuICAgICAgICBkYXk6IHN0cmluZ1tdID0gW1wi0JLQvtGB0LrRgNC10YHQtdC90YzQtVwiLCBcItCf0L7QvdC10LTQtdC70YzQvdC40LpcIiwgXCLQktGC0L7RgNC90LjQulwiLCBcItCh0YDQtdC00LBcIiwgXCLQp9C10YLQstC10YDQs1wiLCBcItCf0Y/RgtC90LjRhtCwXCIsIFwi0KHRg9Cx0LHQvtGC0LBcIl0sXHJcbiAgICAgICAgbW9udGg6IHN0cmluZ1tdID0gW1wi0Y/QvdCy0LDRgNGPXCIsIFwi0YTQtdCy0YDQsNC70Y9cIiwgXCLQvNCw0YDRgtCwXCIsIFwi0LDQv9GA0LXQu9GPXCIsIFwi0LzQsNGPXCIsIFwi0LjRjtC90Y9cIiwgXCLQuNGO0LvRj1wiLCBcItCw0LLQs9GD0YHRgtCwXCIsIFwi0YHQtdC90YLRj9Cx0YDRj1wiLCBcItC+0LrRgtGP0LHRgNGPXCIsIFwi0L3QvtGP0LHRgNGPXCIsIFwi0LTQtdC60LDQsdGA0Y9cIl0sXHJcbiAgICAgICAgZGF0ZTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIik7XHJcblxyXG4gICAgZGF0ZS5pbm5lckhUTUwgPSBgJHtkLmdldERhdGUoKX0gJHttb250aFtkLmdldE1vbnRoKCldfSwgJHtkYXlbZC5nZXREYXkoKV19ICAgJHsoZC5nZXRIb3VycygpIDwgMTAgPyAnMCcgOiAnJyl9JHtkLmdldEhvdXJzKCl9OiR7KGQuZ2V0TWludXRlcygpIDwgMTAgPyAnMCcgOiAnJyl9JHtkLmdldE1pbnV0ZXMoKX06JHsoZC5nZXRTZWNvbmRzKCkgPCAxMCA/ICcwJyA6ICcnKX0ke2QuZ2V0U2Vjb25kcygpfWA7XHJcblxyXG4gICAgc2V0VGltZW91dChkYXRlVGltZSwgMTAwMCk7XHJcbn0sIDEwMDApO1xyXG5cclxuXHJcbmZ1bmN0aW9uICAgZ29Ub1RvcChzY3JvbGxQb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBsZXQgdXA6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cFwiKTtcclxuXHJcbiAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPj0gNTAwKSB7XHJcbiAgICAgICAgdXAuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgIHVwLnN0eWxlLnRyYW5zaXRpb24gPSBcIjNzXCI7XHJcbiAgICAgICAgdXAuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgIHVwLm9uY2xpY2sgPSBmdW5jdGlvbiBVcFBhZ2UoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAtMTAwKTtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShVcFBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdXAuc3R5bGUudHJhbnNpdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB1cC5zdHlsZS5vcGFjaXR5ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHVwLnN0eWxlLnZpc2liaWxpdHkgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB1cC5zdHlsZS50cmFuc2l0aW9uID0gXCJcIjtcclxuICAgICAgICB1cC5zdHlsZS5vcGFjaXR5ID0gXCJcIjtcclxuICAgICAgICB1cC5zdHlsZS52aXNpYmlsaXR5ID0gXCJcIjtcclxuICAgIH1cclxufVxyXG5cclxubGV0IG9uU2Nyb2xsID0gZGVib3VuY2UoYXN5bmMgZnVuY3Rpb24gKCk6dm9pZHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGJvdHRvbTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lcl9fYm90dG9tXCIpLFxyXG4gICAgICAgICAgICBzY3JvbGxNYXg6IG51bWJlciA9IE1hdGgubWF4KFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBTY3JvbGxQb3NpdGlvbjogbnVtYmVyID0gTWF0aC5yb3VuZChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKTtcclxuXHJcbiAgICAgICAgZ29Ub1RvcChTY3JvbGxQb3NpdGlvbik7XHJcblxyXG4gICAgICAgIGlmICgoU2Nyb2xsUG9zaXRpb24gKyB3aW5kb3cuaW5uZXJIZWlnaHQpID09PSBzY3JvbGxNYXgpIHtcclxuICAgICAgICAgICAgbGV0IGxvYWRlcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRlclwiKTtcclxuICAgICAgICAgICAgbG9hZGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICAgICAgbG9hZGVyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZUxlbnRhKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShib3R0b20uYXBwZW5kQ2hpbGQobGVudGEpKSwgMjAwMClcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBwcm9taXNlO1xyXG4gICAgICAgICAgICBjbGVhclN0eWxlKGxvYWRlciwgXCJvcGFjaXR5LCB2aXNpYmlsaXR5XCIpO1xyXG4gICAgICAgICAgICAvLyBjbGVhclN0eWxlKGxvYWRlcixcInZpc2liaWxpdHlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgYWxlcnQoXCJFcnJvclwiKTtcclxuICAgIH1cclxufSwgMjUwKTtcclxuXHJcbmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xyXG5cclxuXHJcbi8vSEVMUFNcclxuXHJcbmZ1bmN0aW9uIGdldFJhbmRvbVdpZHRoKCk6IG51bWJlciB7XHJcbiAgICBsZXQgYWxsd2lkdGg6IG51bWJlcltdID0gWzIwMCwgMzAwLCAyNTBdO1xyXG4gICAgcmV0dXJuIGFsbHdpZHRoW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFsbHdpZHRoLmxlbmd0aCldO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmFuZG9tQ29sb3IoKTogbnVtYmVyW10ge1xyXG4gICAgbGV0IHI6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSksXHJcbiAgICAgICAgZzogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KSxcclxuICAgICAgICBiOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpO1xyXG4gICAgcmV0dXJuIFtyLCBnLCBiXTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRWxlbSgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICB3aWR0aCA9ICBnZXRSYW5kb21XaWR0aCgpO1xyXG4gICAgY29sb3IgPSBnZXRSYW5kb21Db2xvcigpO1xyXG4gICAgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbGVtLmNsYXNzTmFtZSA9IFwibGVudGFfX2VsZW1cIjtcclxuICAgIGVsZW0uc3R5bGUud2lkdGggPSAgZ2V0UmFuZG9tV2lkdGgoKSArIFwicHhcIjtcclxuICAgIGVsZW0uc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiKFwiICsgY29sb3JbMF0gKyBcIixcIiArIGNvbG9yWzFdICsgXCIsXCIgKyBjb2xvclsyXSArIFwiKVwiO1xyXG4gICAgcmV0dXJuIGVsZW07XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMZW50YSgpOiB2b2lkIHtcclxuICAgIGxlbnRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxlbnRhLmNsYXNzTmFtZSA9IFwibGVudGFcIjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgbGVudGEuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbSgpKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzdHlsZXM6IHN0cmluZztcclxuXHJcbi8vIGZ1bmN0aW9uIGNsZWFyU3R5bGUoYTogSFRNTEVsZW1lbnQpOiBhbnkge1xyXG4vL1xyXG4vLyAgICAgcmV0dXJuIGEuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCIgXCIpO1xyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBjbGVhclN0eWxlKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzdHlsZXM6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IGdldFN0eWxlQmxvY2s6IENTU1N0eWxlRGVjbGFyYXRpb24gPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLFxyXG4gICAgICAgIGFyclN0eWxlOiBzdHJpbmdbXSA9IHN0eWxlcy5zcGxpdChcIiwgXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZXRTdHlsZUJsb2NrLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJTdHlsZS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoZ2V0U3R5bGVCbG9ja1tpXSA9PT0gYXJyU3R5bGVbal0pIHtcclxuICAgICAgICAgICAgICAgIGdldFN0eWxlQmxvY2tbaV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vZGVib3VuY2UvL1xyXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jOiBhbnksIHdhaXQ6IG51bWJlcikge1xyXG4gICAgbGV0IHRpbWVvdXQ6IG51bWJlcjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLFxyXG4gICAgICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpLCB3YWl0KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmxldCBsb2dpbjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luLXlhbmRleFwiKTtcclxuXHJcbmxvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZGViYXVuY2VcIik7XHJcbn0sIDI1MCkpO1xyXG5cclxuXHJcbi8vdGhyb3R0bGUvL1xyXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jOiBhbnksIGxpbWl0OiBudW1iZXIpIHtcclxuICAgIGxldCBsYXN0RnVuYzogYW55LFxyXG4gICAgICAgIGxhc3RSYW46IG51bWJlcjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgICBpZiAoIWxhc3RSYW4pIHtcclxuICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICAgICAgbGFzdFJhbiA9IERhdGUubm93KClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQobGFzdEZ1bmMpO1xyXG4gICAgICAgICAgICBsYXN0RnVuYyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKChEYXRlLm5vdygpIC0gbGFzdFJhbikgPj0gbGltaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RSYW4gPSBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGxpbWl0IC0gKERhdGUubm93KCkgLSBsYXN0UmFuKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmxvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRocm90dGxlKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidHJvdHRsZVwiKTtcclxufSwgMjAwMCkpO1xyXG5cclxuXHJcbi8vcmVzaXplLy9cclxuZnVuY3Rpb24gcmVzaXplKGZ1bmM6IGFueSwgbGltaXQ6IG51bWJlcikge1xyXG4gICAgbGV0IHRpbWVyOiBudW1iZXI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aW1lcikgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuYywgbGltaXQpO1xyXG4gICAgfTtcclxufVxyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJyZXNpemVcIik7XHJcbn0sIDEwMDApKTtcclxuIiwiY29uc29sZS5sb2coXCJNb2R1bGVcIik7XHJcblxyXG4iLCJjb25zb2xlLmxvZyhcIlNlbGVjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9