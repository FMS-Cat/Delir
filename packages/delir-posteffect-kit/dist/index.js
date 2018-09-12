module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ParamType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParamType", function() { return _ParamType__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _PostEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostEffect", function() { return _PostEffect__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParamType; });
/* harmony import */ var _ragg_delir_core_src_PluginSupport_ParamTypeDescriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

_ragg_delir_core_src_PluginSupport_ParamTypeDescriptor__WEBPACK_IMPORTED_MODULE_0__["default"];
class ParamType {
}


/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "descriptorToValueType", function() { return descriptorToValueType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeDescriptor", function() { return TypeDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_RGB", function() { return COLOR_RGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_RGBA", function() { return COLOR_RGBA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOL", function() { return BOOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRING", function() { return STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER", function() { return NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLOAT", function() { return FLOAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENUM", function() { return ENUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSET", function() { return ASSET; });
/* harmony import */ var _exceptions_plugin_load_fail_exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _helper_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _Values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);



const descriptorToValueType = (desc) => {
    switch (desc.type) {
        //  case 'POINT_2D': return Point2D
        //  case 'POINT_3D': return Point3D
        //  case 'SIZE_2D': return Size2D
        //  case 'SIZE_3D': return Size3D
        default: throw new Error(`Unsupported parameter type ${desc.type}`);
    }
};
class TypeDescriptor {
    constructor() {
        this.properties = [];
        // public arrayOf(paramName: string, conf: {label: string, enabled?: boolean}, type: TypeDescriptor)
        // {
        //     const {label, enabled} = defaults(conf, {
        //         enabled: true,
        //     })
        //     this.properties.push({type: 'ARRAY', paramName, subType: type, label, enabled, animatable: false})
        //     return this
        // }
        // public structure(paramName: string, conf: {label: string, enabled?: boolean}, type: TypeDescriptor)
        // {
        //     const {label, enabled} = defaults(conf, {
        //         enabled: true,
        //     })
        //     this.properties.push({type: 'STRUCTURE', paramName, subType: type, label, enabled, animatable: false})
        //     return this
        // }
    }
    // public point2d(paramName: string, conf: {label: string, defaultValue?: Point2D, enabled?: boolean, animatable?: boolean})
    // {
    //     const {defaultValue, label, enabled, animatable} = defaults(conf, {
    //         defaultValue: new Point2D(0, 0),
    //         enabled: true,
    //         animatable: true
    //     })
    //     this.properties.push({type: 'POINT_2D', paramName, defaultValue, label, enabled, animatable})
    //     return this
    // }
    // public point3d(paramName: string, conf: {label: string, defaultValue?: Point3D, enabled?: boolean, animatable?: boolean})
    // {
    //     const {defaultValue, label, enabled, animatable} = defaults(conf, {
    //         defaultValue: new Point3D(0, 0, 0),
    //         enabled: true,
    //         animatable: true,
    //     })
    //     this.properties.push({type: 'POINT_3D', paramName, defaultValue, label, enabled, animatable})
    //     return this
    // }
    // public size2d(paramName: string, conf: {label: string, defaultValue?: Size2D, enabled?: boolean, animatable?: boolean})
    // {
    //     const {defaultValue, label, enabled, animatable} = defaults(conf, {
    //         defaultValue: new Size2D(0, 0),
    //         enabled: true,
    //         animatable: true,
    //     })
    //     this.properties.push({type: 'SIZE_2D', paramName, defaultValue, label, enabled, animatable})
    //     return this
    // }
    // public size3d(paramName: string, conf: {label: string, defaultValue?: Size3D, enabled?: boolean, animatable?: boolean})
    // {
    //     const {defaultValue, label, enabled, animatable} = defaults(conf, {
    //         defaultValue: new Size3D(0, 0, 0),
    //         enabled: true,
    //         animatable: true,
    //     })
    //     this.properties.push({type: 'SIZE_3D', paramName, defaultValue, label, enabled, animatable})
    //     return this
    // }
    colorRgb(paramName, conf) {
        const { defaultValue, label, enabled, animatable } = Object(_helper_defaults__WEBPACK_IMPORTED_MODULE_1__["default"])(conf, {
            defaultValue: new _Values__WEBPACK_IMPORTED_MODULE_2__["ColorRGB"](0, 0, 0),
            enabled: true,
            animatable: true,
        });
        this.properties.push({ type: 'COLOR_RGB', paramName, defaultValue, label, enabled, animatable });
        return this;
    }
    colorRgba(paramName, conf) {
        const { defaultValue, label, enabled, animatable } = Object(_helper_defaults__WEBPACK_IMPORTED_MODULE_1__["default"])(conf, {
            defaultValue: new _Values__WEBPACK_IMPORTED_MODULE_2__["ColorRGBA"](0, 0, 0, 1),
            enabled: true,
            animatable: true,
        });
        this.properties.push({ type: 'COLOR_RGBA', paramName, defaultValue, label, enabled, animatable });
        return this;
    }
    bool(paramName, conf) {
        const { defaultValue, label, enabled, animatable } = Object(_helper_defaults__WEBPACK_IMPORTED_MODULE_1__["default"])(conf, {
            defaultValue: false,
            enabled: true,
            animatable: true,
        });
        this.properties.push({ type: 'BOOL', paramName, defaultValue, label, enabled, animatable });
        return this;
    }
    string(paramName, conf) {
        const { defaultValue, label, enabled, animatable } = Object(_helper_defaults__WEBPACK_IMPORTED_MODULE_1__["default"])(conf, {
            defaultValue: '',
            enabled: true,
            animatable: true,
        });
        this.properties.push({ type: 'STRING', paramName, defaultValue, label, enabled, animatable });
        return this;
    }
    number(paramName, conf) {
        const { defaultValue, label, enabled, animatable } = Object(_helper_defaults__WEBPACK_IMPORTED_MODULE_1__["default"])(conf, {
            defaultValue: 0,
            enabled: true,
            animatable: true,
        });
        this.properties.push({ type: 'NUMBER', paramName, defaultValue, label, enabled, animatable });
        return this;
    }
    float(paramName, conf) {
        const { defaultValue, label, enabled, animatable } = Object(_helper_defaults__WEBPACK_IMPORTED_MODULE_1__["default"])(conf, {
            defaultValue: 0,
            enabled: true,
            animatable: true,
        });
        this.properties.push({ type: 'FLOAT', paramName, defaultValue, label, enabled, animatable });
        return this;
    }
    // public pulse(paramName: string, conf: {label: string, enabled?: boolean})
    // {
    //     const {label, enabled} = defaults(conf, {
    //         defaultValue: false,
    //         enabled: true,
    //     })
    //     this.properties.push({type: 'PULSE', paramName, label, enabled, animatable: true})
    //     return this
    // }
    enum(paramName, conf) {
        const { defaultValue, label, enabled, selection } = Object(_helper_defaults__WEBPACK_IMPORTED_MODULE_1__["default"])(conf, {
            enabled: true,
            selection: []
        });
        // Allow to empty selection.
        const validSelection = Array.isArray(selection) && selection.every(e => typeof e === 'string');
        if (!validSelection) {
            throw new _exceptions_plugin_load_fail_exception__WEBPACK_IMPORTED_MODULE_0__["default"]('`selection` must be an array of string');
        }
        if (defaultValue != null && !selection.includes(defaultValue)) {
            throw new _exceptions_plugin_load_fail_exception__WEBPACK_IMPORTED_MODULE_0__["default"]('Default value not included in selection');
        }
        this.properties.push({ type: 'ENUM', paramName, defaultValue, label, enabled, selection, animatable: false });
        return this;
    }
    // public clip(paramName: string, conf: {label: string, enabled?: boolean})
    // {
    //     const {label, enabled} = defaults(conf, {
    //         enabled: true,
    //     })
    //     this.properties.push({type: 'CLIP', paramName, label, enabled, animatable: false})
    //     return this
    // }
    asset(paramName, conf) {
        const { label, enabled, extensions } = Object(_helper_defaults__WEBPACK_IMPORTED_MODULE_1__["default"])(conf, {
            enabled: true,
            extensions: [],
        });
        const validextensions = Array.isArray(extensions) && extensions.length > 0 && extensions.every(e => typeof e === 'string');
        if (!validextensions) {
            throw new _exceptions_plugin_load_fail_exception__WEBPACK_IMPORTED_MODULE_0__["default"]('`extensions` must be an array of string and can not to be empty');
        }
        this.properties.push({ type: 'ASSET', paramName, label, enabled, animatable: false, extensions });
        return this;
    }
    code(paramName, conf) {
        const { defaultValue, label, enabled, langType } = Object(_helper_defaults__WEBPACK_IMPORTED_MODULE_1__["default"])(conf, { enabled: true });
        this.properties.push({ type: 'CODE', paramName, label, defaultValue, langType, enabled, animatable: false });
        return this;
    }
}
class Type {
    // public static point2d(paramName: string, option: {label: string, defaultValue?: Point2D, enabled?: boolean, animatable?: boolean})
    // {
    //     return (new TypeDescriptor()).point2d(paramName, option)
    // }
    // public static point3d(paramName: string, option: {label: string, defaultValue?: Point3D, enabled?: boolean, animatable?: boolean})
    // {
    //     return (new TypeDescriptor()).point3d(paramName, option)
    // }
    // public static size2d(paramName: string, option: {label: string, defaultValue?: Size2D, enabled?: boolean, animatable?: boolean})
    // {
    //     return (new TypeDescriptor()).size2d(paramName, option)
    // }
    // public static size3d(paramName: string, option: {label: string, defaultValue?: Size3D, enabled?: boolean, animatable?: boolean})
    // {
    //     return (new TypeDescriptor()).size3d(paramName, option)
    // }
    static colorRgb(paramName, option) {
        return (new TypeDescriptor()).colorRgb(paramName, option);
    }
    static colorRgba(paramName, option) {
        return (new TypeDescriptor()).colorRgba(paramName, option);
    }
    static bool(paramName, option) {
        return (new TypeDescriptor()).bool(paramName, option);
    }
    static string(paramName, option) {
        return (new TypeDescriptor()).string(paramName, option);
    }
    static number(paramName, option) {
        return (new TypeDescriptor()).number(paramName, option);
    }
    static float(paramName, option) {
        return (new TypeDescriptor()).float(paramName, option);
    }
    // public static pulse(paramName: string, option: {label: string, enabled?: boolean})
    // {
    //     return (new TypeDescriptor()).pulse(paramName, option)
    // }
    // public static enum(paramName: string, option: {label: string, defaultValue?: string, enabled?: boolean, selection: string[]})
    // {
    //     return (new TypeDescriptor()).enum(paramName, option)
    // }
    // public static clip(paramName: string, option: {label: string, enabled?: boolean})
    // {
    //     return (new TypeDescriptor()).clip(paramName, option)
    // }
    static asset(paramName, option) {
        return (new TypeDescriptor()).asset(paramName, option);
    }
    static code(paramName, option) {
        return (new TypeDescriptor()).code(paramName, option);
    }
    // public static arrayOf(paramName: string, option: {label: string, enabled?: boolean}, type: TypeDescriptor)
    // {
    //     return (new TypeDescriptor()).arrayOf(paramName, option, type)
    // }
    static none() {
        return new TypeDescriptor();
    }
    constructor() {
        throw new TypeError('Type is can not constructing');
    }
}
// export const POINT_2D = 'POINT_2D'
// export const POINT_3D = 'POINT_3D'
// export const SIZE_2D = 'SIZE_2D'
// export const SIZE_3D = 'SIZE_3D'
const COLOR_RGB = 'COLOR_RGB';
const COLOR_RGBA = 'COLOR_RGBA';
const BOOL = 'BOOL';
const STRING = 'STRING';
const NUMBER = 'NUMBER';
const FLOAT = 'FLOAT';
const ENUM = 'ENUM';
// export const CLIP = 'CLIP'
const ASSET = 'ASSET';
// export const PULSE = 'PULSE'
// export const ARRAY = 'ARRAY'
// export const STRUCTURE = 'STRUCTURE'


/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PluginLoadFailException; });
/* harmony import */ var _delir_exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

class PluginLoadFailException extends _delir_exception__WEBPACK_IMPORTED_MODULE_0__["default"] {
}


/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaults; });
const hasOwnProperty = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
function defaults(obj, defaults, nullable = false) {
    const merged = Object.assign({}, obj);
    for (const key in defaults) {
        const _key = key;
        if (hasOwnProperty(obj, key)) {
            merged[_key] = nullable
                ? obj[_key]
                : (obj[_key] == null ? defaults[_key] : obj[_key]);
        }
        else {
            merged[_key] = defaults[_key];
        }
    }
    return merged;
}


/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _point_2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Point2D", function() { return _point_2d__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _point_3d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Point3D", function() { return _point_3d__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _size_2d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Size2D", function() { return _size_2d__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _size_3d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Size3D", function() { return _size_3d__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _AssetPointer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssetPointer", function() { return _AssetPointer__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ColorRGB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorRGB", function() { return _ColorRGB__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _ColorRGBA__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorRGBA", function() { return _ColorRGBA__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Expression__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Expression", function() { return _Expression__WEBPACK_IMPORTED_MODULE_7__["default"]; });











/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point2D; });
class Point2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point3D; });
class Point3D {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}


/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Size2D; });
class Size2D {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}


/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Size3D; });
class Size3D {
    constructor(width, height, depth) {
        this.width = width;
        this.height = height;
        this.depth = depth;
    }
}


/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AssetPointer; });
class AssetPointer {
    constructor(assetId = '') {
        this.assetId = assetId;
        this.assetId = assetId;
    }
}


/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorRGB; });
class ColorRGB {
    static fromJSON(json) {
        return new ColorRGB(json.red, json.green, json.blue);
    }
    constructor(r = 0, g = 0, b = 0) {
        this._red = r;
        this._green = g;
        this._blue = b;
    }
    get r() { return this._red; }
    get g() { return this._green; }
    get b() { return this._blue; }
    get red() { return this._red; }
    get green() { return this._green; }
    get blue() { return this._blue; }
    clone(r = null, g = null, b = null) {
        return new ColorRGB(r || this.r, g || this.g, b || this.b);
    }
    toJSON() {
        return {
            red: this.r,
            green: this.g,
            blue: this.b,
        };
    }
    toCSSColor() {
        return `rgba(${this.r | 0}, ${this.g | 0}, ${this.b | 0}, 1)`;
    }
    /**
     * @deprecated
     */
    toString() {
        return `rgba(${this.r | 0}, ${this.g | 0}, ${this.b | 0}, 1)`;
    }
}


/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorRGBA; });
class ColorRGBA {
    static fromJSON(json) {
        return new ColorRGBA(json.red, json.green, json.blue, json.alpha);
    }
    constructor(r = 0, g = 0, b = 0, a = 0) {
        this._red = r;
        this._green = g;
        this._blue = b;
        this._alpha = a;
    }
    get r() { return this._red; }
    get g() { return this._green; }
    get b() { return this._blue; }
    get a() { return this._alpha; }
    get red() { return this._red; }
    get green() { return this._green; }
    get blue() { return this._blue; }
    get alpha() { return this._alpha; }
    clone(r = null, g = null, b = null, a = null) {
        return new ColorRGBA(r || this.r, g || this.g, b || this.b, a || this.a);
    }
    toJSON() {
        return {
            red: this.r,
            green: this.g,
            blue: this.b,
            alpha: this.a,
        };
    }
    toCSSColor() {
        return `rgba(${this.r | 0}, ${this.g | 0}, ${this.b | 0}, ${this.a})`;
    }
    /**
     * @deprecated
     */
    toString() {
        return `rgba(${this.r | 0}, ${this.g | 0}, ${this.b | 0}, ${this.a})`;
    }
}


/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Expression; });
class Expression {
    constructor(language, code) {
        this.language = language;
        this.code = code;
    }
    static fromJSON(json) {
        return new Expression(json.language, json.code);
    }
    toJSON() {
        return {
            language: this.language,
            code: this.code,
        };
    }
}


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DelirException; });
class DelirException extends Error {
    constructor(message, info = {}) {
        super(message);
        const { stack } = (new Error());
        this.message = message;
        this.stack = stack;
        this.stackLines = stack ? stack.split('\n') : [''];
        this.before = info.before;
        this.info = info;
    }
}


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EffectPluginBase; });
class EffectPluginBase {
    static provideParameters() {
        // None
        // return new TypeDescriptor()
    }
}


/***/ })

/******/ });