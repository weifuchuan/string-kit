# String Kits

```typescript

export default class StrKit {
    // First char to lower case
    // 首字母变小写
    static firstCharToLowerCase(str: string): string;

    // First char to upper case
    // 首字母变大写
    static firstCharToUpperCase(str: string): string;

    // Return true if string is null, undefined, or all of char in {' ', '\t', '\n', '\r'}
    // 字符串为 null 或者内部字符全部为 ' ' '\t' '\n' '\r' 这四类字符时返回 true
    static isBlank(str: string): boolean;

    static notBlank(str: string): boolean;

    // string with under line to string with camel case
    // 下划线转驼峰
    static toCamelCase(stringWithUnderline: string): string;
}


```