"use strict"

//Description: this script will calculate the number of days between 2 dates.
//Author: Cate Speakman

var bootcampStarts = new Date("July 22, 2019");
var bootcampEnds = new Date("September 6, 2019");



const msecPerDay = 1000*60*60*24;

let elapsedMilliseconds = bootcampEnds.getTime() - bootcampStarts.getTime();

let dayDiff = elapsedMilliseconds/msecPerDay;

let bootcampTotalDays = Math.round(dayDiff) +1;

console.log("The number of days for bootcamp is " + bootcampTotalDays);

