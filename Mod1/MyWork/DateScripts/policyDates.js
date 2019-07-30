"use strict";

//Description: this script will determine the ending date of a 90 day period.
//Author:Cate Speakman

let policyStarts = Date.parse("July 22, 2019");

const msecPerDay = 1000*60*60*24;

let policyPeriod= (policyStarts + (90*msecPerDay));

let policyEnds = new Date(policyPeriod);

console.log("The policy end date is " + policyEnds);




 
