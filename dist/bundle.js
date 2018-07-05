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
    if (scrollPosition >= 800) {
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
                    loader.style.visibility = "";
                    loader.style.opacity = "";
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
}, 1000);
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
// function applyStyles(element: HTMLElement, styles: {[style: string]: string}): void {
//     for (let styleName in styles) {
//         if (styles.hasOwnProperty(styleName)) {
//             element.style[<any>styleName] = styles[styleName];
//         }
//     }
// }
// function clearStyles(element: HTMLElement, styles: {[style: string]: string}): void {
//     for (let styleName in styles) {
//         if (styles.hasOwnProperty(styleName)) {
//             element.style[<any>styleName] = styles[styleName];
//         }
//     }
// }
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
    var timeout;
    return function () {
        if (timeout)
            clearTimeout(timeout);
        timeout = setTimeout(func, limit);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlLmNvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VsZWN0LmNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsNEVBQWdDO0FBQ2hDLDRFQUFnQztBQUVoQyxJQUFJLEtBQWEsRUFBRSxLQUFlLEVBQUUsSUFBaUIsRUFBRSxLQUFrQixDQUFDO0FBRTFFLFVBQVUsQ0FBQztJQUNQLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLEVBQ2QsR0FBRyxHQUFhLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFF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bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwLmNvbXBvbmVudHMudHNcIik7XG4iLCJpbXBvcnQgXCIuL21vZHVsZS5jb21wb25lbnRzLnRzXCI7XG5pbXBvcnQgXCIuL3NlbGVjdC5jb21wb25lbnRzLnRzXCI7XG5cbmxldCB3aWR0aDogbnVtYmVyLCBjb2xvcjogbnVtYmVyW10sIGVsZW06IEhUTUxFbGVtZW50LCBsZW50YTogSFRNTEVsZW1lbnQ7XG5cbnNldFRpbWVvdXQoZnVuY3Rpb24gZGF0ZVRpbWUoKTogdm9pZCB7XG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpLFxuICAgICAgICBkYXk6IHN0cmluZ1tdID0gW1wi0JLQvtGB0LrRgNC10YHQtdC90YzQtVwiLCBcItCf0L7QvdC10LTQtdC70YzQvdC40LpcIiwgXCLQktGC0L7RgNC90LjQulwiLCBcItCh0YDQtdC00LBcIiwgXCLQp9C10YLQstC10YDQs1wiLCBcItCf0Y/RgtC90LjRhtCwXCIsIFwi0KHRg9Cx0LHQvtGC0LBcIl0sXG4gICAgICAgIG1vbnRoOiBzdHJpbmdbXSA9IFtcItGP0L3QstCw0YDRj1wiLCBcItGE0LXQstGA0LDQu9GPXCIsIFwi0LzQsNGA0YLQsFwiLCBcItCw0L/RgNC10LvRj1wiLCBcItC80LDRj1wiLCBcItC40Y7QvdGPXCIsIFwi0LjRjtC70Y9cIiwgXCLQsNCy0LPRg9GB0YLQsFwiLCBcItGB0LXQvdGC0Y/QsdGA0Y9cIiwgXCLQvtC60YLRj9Cx0YDRj1wiLCBcItC90L7Rj9Cx0YDRj1wiLCBcItC00LXQutCw0LHRgNGPXCJdLFxuICAgICAgICBkYXRlOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKTtcblxuICAgIGRhdGUuaW5uZXJIVE1MID0gYCR7ZC5nZXREYXRlKCl9ICR7bW9udGhbZC5nZXRNb250aCgpXX0sICR7ZGF5W2QuZ2V0RGF5KCldfSAgICR7KGQuZ2V0SG91cnMoKSA8IDEwID8gJzAnIDogJycpfSR7ZC5nZXRIb3VycygpfTokeyhkLmdldE1pbnV0ZXMoKSA8IDEwID8gJzAnIDogJycpfSR7ZC5nZXRNaW51dGVzKCl9OiR7KGQuZ2V0U2Vjb25kcygpIDwgMTAgPyAnMCcgOiAnJyl9JHtkLmdldFNlY29uZHMoKX1gO1xuXG4gICAgc2V0VGltZW91dChkYXRlVGltZSwgMTAwMCk7XG59LCAxMDAwKTtcblxuXG5mdW5jdGlvbiAgIGdvVG9Ub3Aoc2Nyb2xsUG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuICAgIGxldCB1cDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwXCIpO1xuXG4gICAgaWYgKHNjcm9sbFBvc2l0aW9uID49IDgwMCkge1xuICAgICAgICB1cC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgIHVwLnN0eWxlLnRyYW5zaXRpb24gPSBcIjNzXCI7XG4gICAgICAgIHVwLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgdXAub25jbGljayA9IGZ1bmN0aW9uIFVwUGFnZSgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAtMTAwKTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKFVwUGFnZSk7XG4gICAgICAgICAgICAgICAgdXAuc3R5bGUudHJhbnNpdGlvbiA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdXAuc3R5bGUub3BhY2l0eSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdXAuc3R5bGUudmlzaWJpbGl0eSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB1cC5zdHlsZS50cmFuc2l0aW9uID0gXCJcIjtcbiAgICAgICAgdXAuc3R5bGUub3BhY2l0eSA9IFwiXCI7XG4gICAgICAgIHVwLnN0eWxlLnZpc2liaWxpdHkgPSBcIlwiO1xuICAgIH1cbn1cblxubGV0IG9uU2Nyb2xsID0gZGVib3VuY2UoYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGJvdHRvbTogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJfX2JvdHRvbVwiKSxcbiAgICAgICAgICAgIHNjcm9sbE1heDogbnVtYmVyID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgU2Nyb2xsUG9zaXRpb246IG51bWJlciA9IE1hdGgucm91bmQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCk7XG5cbiAgICAgICAgZ29Ub1RvcChTY3JvbGxQb3NpdGlvbik7XG5cbiAgICAgICAgaWYgKChTY3JvbGxQb3NpdGlvbiArIHdpbmRvdy5pbm5lckhlaWdodCkgPT09IHNjcm9sbE1heCkge1xuICAgICAgICAgICAgbGV0IGxvYWRlcjogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkZXJcIik7XG4gICAgICAgICAgICBsb2FkZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgbG9hZGVyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcblxuICAgICAgICAgICAgY3JlYXRlTGVudGEoKTtcblxuICAgICAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKGJvdHRvbS5hcHBlbmRDaGlsZChsZW50YSkpLCAyMDAwKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGF3YWl0IHByb21pc2U7XG4gICAgICAgICAgICBsb2FkZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiXCI7XG4gICAgICAgICAgICBsb2FkZXIuc3R5bGUub3BhY2l0eSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgYWxlcnQoXCJFcnJvclwiKTtcbiAgICB9XG59LCAxMDAwKTtcblxuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG5cblxuLy9IRUxQU1xuXG5mdW5jdGlvbiBnZXRSYW5kb21XaWR0aCgpOiBudW1iZXIge1xuICAgIGxldCBhbGx3aWR0aDogbnVtYmVyW10gPSBbMjAwLCAzMDAsIDI1MF07XG4gICAgcmV0dXJuIGFsbHdpZHRoW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFsbHdpZHRoLmxlbmd0aCldO1xuXG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUNvbG9yKCk6IG51bWJlcltdIHtcbiAgICBsZXQgcjogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KSxcbiAgICAgICAgZzogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KSxcbiAgICAgICAgYjogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KTtcbiAgICByZXR1cm4gW3IsIGcsIGJdO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtKCk6IEhUTUxFbGVtZW50IHtcbiAgICB3aWR0aCA9ICBnZXRSYW5kb21XaWR0aCgpO1xuICAgIGNvbG9yID0gZ2V0UmFuZG9tQ29sb3IoKTtcbiAgICBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlbGVtLmNsYXNzTmFtZSA9IFwibGVudGFfX2VsZW1cIjtcbiAgICBlbGVtLnN0eWxlLndpZHRoID0gIGdldFJhbmRvbVdpZHRoKCkgKyBcInB4XCI7XG4gICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2IoXCIgKyBjb2xvclswXSArIFwiLFwiICsgY29sb3JbMV0gKyBcIixcIiArIGNvbG9yWzJdICsgXCIpXCI7XG4gICAgcmV0dXJuIGVsZW07XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlTGVudGEoKTogdm9pZCB7XG4gICAgbGVudGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxlbnRhLmNsYXNzTmFtZSA9IFwibGVudGFcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBsZW50YS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtKCkpO1xuICAgIH1cbn1cblxuXG4vLyBmdW5jdGlvbiBhcHBseVN0eWxlcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgc3R5bGVzOiB7W3N0eWxlOiBzdHJpbmddOiBzdHJpbmd9KTogdm9pZCB7XG4vLyAgICAgZm9yIChsZXQgc3R5bGVOYW1lIGluIHN0eWxlcykge1xuLy8gICAgICAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KHN0eWxlTmFtZSkpIHtcbi8vICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVbPGFueT5zdHlsZU5hbWVdID0gc3R5bGVzW3N0eWxlTmFtZV07XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGNsZWFyU3R5bGVzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzdHlsZXM6IHtbc3R5bGU6IHN0cmluZ106IHN0cmluZ30pOiB2b2lkIHtcbi8vICAgICBmb3IgKGxldCBzdHlsZU5hbWUgaW4gc3R5bGVzKSB7XG4vLyAgICAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoc3R5bGVOYW1lKSkge1xuLy8gICAgICAgICAgICAgZWxlbWVudC5zdHlsZVs8YW55PnN0eWxlTmFtZV0gPSBzdHlsZXNbc3R5bGVOYW1lXTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuXG4vL2RlYm91bmNlLy9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmM6IGFueSwgd2FpdDogbnVtYmVyKSB7XG4gICAgbGV0IHRpbWVvdXQ6IG51bWJlcjtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyksIHdhaXQpO1xuICAgIH1cbn1cblxuXG5sZXQgbG9naW46IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dpbi15YW5kZXhcIik7XG5cbmxvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcImRlYmF1bmNlXCIpO1xufSwgMjUwKSk7XG5cblxuLy90aHJvdHRsZS8vXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jOiBhbnksIGxpbWl0OiBudW1iZXIpIHtcbiAgICBsZXQgbGFzdEZ1bmM6IGFueSxcbiAgICAgICAgbGFzdFJhbjogbnVtYmVyO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICBpZiAoIWxhc3RSYW4pIHtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICBsYXN0UmFuID0gRGF0ZS5ub3coKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGxhc3RGdW5jKTtcbiAgICAgICAgICAgIGxhc3RGdW5jID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKChEYXRlLm5vdygpIC0gbGFzdFJhbikgPj0gbGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFJhbiA9IERhdGUubm93KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBsaW1pdCAtIChEYXRlLm5vdygpIC0gbGFzdFJhbikpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRocm90dGxlKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcInRyb3R0bGVcIik7XG59LCAyMDAwKSk7XG5cblxuLy9yZXNpemUvL1xuZnVuY3Rpb24gcmVzaXplKGZ1bmM6IGFueSwgbGltaXQ6IG51bWJlcikge1xuICAgIGxldCB0aW1lb3V0OiBudW1iZXI7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRpbWVvdXQpIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuYywgbGltaXQpO1xuICAgIH07XG59XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJyZXNpemVcIik7XG59LCAxMDAwKSk7XG5cblxuIiwiY29uc29sZS5sb2coXCJNb2R1bGVcIik7XHJcbiIsImNvbnNvbGUubG9nKFwiU2VsZWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=