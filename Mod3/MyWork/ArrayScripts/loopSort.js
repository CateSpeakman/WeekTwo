"use strict";

//Description: This script will contain functions to sort names ascending and descending order.
//Author: Cate Speakman

/* this function will do the comparision for the sort of objs
* @param a and @param b will be taken from the array of names associated with the sort method.
*/

function compareAscendingNames(a,b)
{
    if (a.name < b.name)
     {
         return -1
     }

     else
     {
         return 1
     }
}

/* this function will now compare the names within the array of objs associated with the sort method.
*@param a and @param b will be taken from the array of names associated with the sort method.
*/


function compareDescendingNames(a,b)
{
    if (a.name > b.name)
     {
         return -1
     }

     else
     {
         return 1
     }
}

let objs =[
    {name:"Cate", age:45},
    {name:"Jonathan", age:19},
    {name:"Adam", age:13}
];


let length = objs.length;

console.log("original order")
for (let i=0; i < length; i++)
{
    console.log(objs[i]);
}

objs.sort(compareDescendingNames);
console.log("descending order by name")
for (let i=0; i < length; i++)
{
    console.log(objs[i]);
}

objs.sort(compareAscendingNames);
console.log("ascending order by name")
for (let i=0; i < length; i++)
{
    console.log(objs[i]);
}


