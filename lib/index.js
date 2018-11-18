"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var StrKit = /** @class */ (function () {
    function StrKit() {
    }
    // First char to lower case
    // 首字母变小写
    StrKit.firstCharToLowerCase = function (str) {
        if (str.length <= 0)
            return str;
        var firstChar = str.charAt(0);
        if (firstChar >= 'A' && firstChar <= 'Z') {
            firstChar = String.fromCharCode(firstChar.charCodeAt(0) + 'a'.charCodeAt(0) - 'A'.charCodeAt(0));
        }
        return firstChar + str.substring(1);
    };
    // First char to upper case
    // 首字母变大写
    StrKit.firstCharToUpperCase = function (str) {
        if (str.length <= 0)
            return str;
        var firstChar = str.charAt(0);
        if (firstChar >= 'a' && firstChar <= 'z') {
            firstChar = String.fromCharCode(firstChar.charCodeAt(0) - ('a'.charCodeAt(0) - 'A'.charCodeAt(0)));
        }
        return firstChar + str.substring(1);
    };
    // Return true if string is null, undefined, or all of char in {' ', '\t', '\n', '\r'}
    // 字符串为 null 或者内部字符全部为 ' ' '\t' '\n' '\r' 这四类字符时返回 true
    StrKit.isBlank = function (str) {
        if (str && str.trim())
            return false;
        else
            return true;
    };
    StrKit.notBlank = function (str) {
        return !StrKit.isBlank(str);
    };
    // string with under line to string with camel case
    // 下划线转驼峰
    StrKit.toCamelCase = function (stringWithUnderline) {
        if (stringWithUnderline.indexOf('_') == -1) {
            return stringWithUnderline;
        }
        stringWithUnderline = stringWithUnderline.toLowerCase();
        var toArray = new Array(stringWithUnderline.length);
        var j = 0;
        for (var i = 0; i < stringWithUnderline.length; i++) {
            if (stringWithUnderline.charAt(i) === '_') {
                i++;
                if (i < stringWithUnderline.length) {
                    toArray[j++] = stringWithUnderline.charAt(i).toUpperCase();
                }
            }
            else {
                toArray[j++] = stringWithUnderline.charAt(i);
            }
        }
        return ''.concat.apply('', __spread(toArray.slice(0, j)));
    };
    return StrKit;
}());
exports.default = StrKit;
//# sourceMappingURL=index.js.map