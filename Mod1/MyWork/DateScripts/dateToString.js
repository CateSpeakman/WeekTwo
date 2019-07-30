"use strict";

//Description:  This script will pull the current date and time and display.
//Author: Cate Speakman

let currentDate = new Date();
console.log(currentDate.toString());

console.log(currentDate.toDateString());

console.log(currentDate.toUTCString());

console.log(currentDate.toLocaleString());