"use strict";

//Description: This script will contain multidimensional arrays.
//Author: Cate Speakman

let teamMembers = [
    ["Dana", "Brenda", "Happy"],
    ["Laura", "Patti"],
    ["Leslye", "Randy", "Mollye", "Ranse"],
    ["Eloise", "Robert"]
];

let numTeams = teamMembers.length;

for (let i = 0; i < numTeams; i++)
{
    console.log("Team " + i);

    let numMembers = teamMembers[i].length;
    for (let j = 0; j < numMembers; j++)
    {
        console.log(teamMembers[i][j]);
    }
}