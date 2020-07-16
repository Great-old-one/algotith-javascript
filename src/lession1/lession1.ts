// 栈的应用

import {isNumber} from "util";

/**
 * 将10进制转换为其他进制(2-9)
 * @param number
 * @param base
 */
export function mulBase(number: number, base: number): number {
    const arr: number[] = [];
    while (number > 0) {
        const r = number % base;
        arr.push(r);
        number = Math.floor(number / base);
    }
    let str = "";
    while (arr.length > 0) {
        str += arr.pop();
    }
    return Number(str);
}

/**
 * 判断是否是回文字符串
 * @param str
 */
export function isPlainrome(str: string): boolean {
    const arr: string[] = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }
    let newStr = "";
    while (arr.length > 0) {
        newStr += arr.pop();
    }
    return newStr === str;
}

/**
 * 判断()是否闭合
 * @param str
 */
export function isClose(str: string): boolean {
    const arr: string[] = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            arr.push(str[i]);
        }
        if (str[i] === ")") {
            if (arr.length === 0) {
                return false;
            }
            arr.pop();
        }
    }
    return arr.length === 0;
}

/**
 * 将前缀表达式转换为后缀表达式 5+3*4
 * @param str
 */
// 3+2*5 => 32+5*
// todo 待完成
export function toAfterOperator(str: string): string {
    const numberArr: string[] = [];
    const operatorArr: string[] = [];
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(Number(str[i]))) {
            numberArr.push(str[i]);
        } else {
            operatorArr.push(str[i]);
        }
    }
    return str;
}
