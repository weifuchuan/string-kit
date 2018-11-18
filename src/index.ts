export default class StrKit {
	// First char to lower case
	// 首字母变小写
	static firstCharToLowerCase(str: string): string {
		if (str.length <= 0) return str;
		let firstChar = str.charAt(0);
		if (firstChar >= 'A' && firstChar <= 'Z') {
			firstChar = String.fromCharCode(firstChar.charCodeAt(0) + 'a'.charCodeAt(0) - 'A'.charCodeAt(0));
		}
		return firstChar + str.substring(1);
	}

	// First char to upper case
	// 首字母变大写
	static firstCharToUpperCase(str: string): string {
		if (str.length <= 0) return str;
		let firstChar = str.charAt(0);
		if (firstChar >= 'a' && firstChar <= 'z') {
			firstChar = String.fromCharCode(firstChar.charCodeAt(0) - ('a'.charCodeAt(0) - 'A'.charCodeAt(0)));
		}
		return firstChar + str.substring(1);
	}

	// Return true if string is null, undefined, or all of char in {' ', '\t', '\n', '\r'}
	// 字符串为 null 或者内部字符全部为 ' ' '\t' '\n' '\r' 这四类字符时返回 true
	static isBlank(str: string): boolean {
		if (str && str.trim()) return false;
		else return true;
	}

	static notBlank(str: string): boolean {
		return !StrKit.isBlank(str);
	}

	// string with under line to string with camel case
	// 下划线转驼峰
	static toCamelCase(stringWithUnderline: string): string {
		if (stringWithUnderline.indexOf('_') == -1) {
			return stringWithUnderline;
		}
		stringWithUnderline = stringWithUnderline.toLowerCase();
		const toArray: string[] = new Array(stringWithUnderline.length);
		let j = 0;
		for (let i = 0; i < stringWithUnderline.length; i++) {
			if (stringWithUnderline.charAt(i) === '_') {
				i++;
				if (i < stringWithUnderline.length) {
					toArray[j++] = stringWithUnderline.charAt(i).toUpperCase();
				}
			} else {
				toArray[j++] = stringWithUnderline.charAt(i);
			}
		}
		return ''.concat(...toArray.slice(0, j));
	}
}
