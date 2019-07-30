"use strict";

//Description: This script will pull the current date/tme and display it in the following format:
// day-month-year(weekdayname).
//Author: Cate Speakman

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
                "October", "November", "December"];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let currentDate = new Date();

let monthName = months[currentDate.getMonth()];
let dayName = days[currentDate.getDay()];
let dayMonth = currentDate.getDate();
let year = currentDate.getFullYear();

console.log(dayMonth + "-" + monthName + "-" + year + "(" + dayName + ")");