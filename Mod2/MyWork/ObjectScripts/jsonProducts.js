"use strict";

//Description: this script will define a Javascript object, convert it to JSON and then return it back to
//Javascript.
//Author: Cate Speakman

let obj1 ={
    productID: 1234,
    productName:"ducktales",
    unitPrice:3.14,
    quantity:3
};

let str = JSON.stringify(obj1);
console.log(str);

let obj2 = JSON.parse(str);
console.log(obj2);