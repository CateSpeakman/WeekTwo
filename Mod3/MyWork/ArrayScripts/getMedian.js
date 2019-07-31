"use strict";

//Description: This script will contain an array of 7 test scores. The functions will get the median of the test 
//              results.
//Author: Cate Speakman

function compareAscendingScores(a,b)
{
    if (a < b)
     {
         return -1
     }

     else
     {
         return 1
     }
}

function getMedian(scores)
{
    let median;
    if (scores.length % 2 != 0)
    {
        median = scores[Math.floor(scores.length/2)];
    }
    else{

        let num1 = scores.length/2;
        let num2 = (scores.length/2) -1;
        median = parseFloat(scores[num1] + scores[num2])/2;
    }

    return median;

}


let scores = [100, 98, 75, 63, 84, 90, 88, 52];
scores.sort(compareAscendingScores);

let median = getMedian(scores);
console.log(median);