"use strict";

//Description: This script will contain an array of 7 test scores and find the average score in the array.
//Author: Cate Speakman

function getAverage(scores)
{
    
    let length = scores.length;
    let total = 0;
    let average;

    for (let i=0; i < length; i++)
    {
    total = total + scores[i];
    }
    
    average = Math.round(total / length);
    return average;
}

let scores = [100, 98, 75, 63, 84, 90, 88];

let totalAverage = getAverage(scores);
console.log(totalAverage);