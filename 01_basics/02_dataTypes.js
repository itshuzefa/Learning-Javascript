/* Data Types: Primitive & Non-Primitive
Primitve: string, number, boolean, undefined, null, symbol, bigint
Non-Primitive: object-array & functions*/

"use strict"; //Treat all codes as newer version of JS

let name = "huzefa";
console.log(typeof name);

let num = 199;
console.log(typeof num);

let darkMode = true;
console.log(typeof darkMode);

let num1 = undefined;
console.log(typeof num1);

let name1 = null;
console.log(typeof name1);

let name2 = null;
console.log(typeof name2);

let idName = Symbol;
console.log(typeof idName);

console.table(typeof[name, num, num1, darkMode, name1, name2, idName]);


