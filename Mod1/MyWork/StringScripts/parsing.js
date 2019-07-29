"use strict";

//Description: this script will extract the first and last name from a string and display it.
//Author: Cate Speakman

var name="Jonathan Speakman"

/* This function will extract and display the first name and last name of the variable name.
*
*@param name (string) - this is the full name entered
*@param firstName (string) - this is the first name 
*@param lastName (string) - this is the last name
*
*/
function parseAndDisplayName(name)
{
let pos = name.indexOf(" ");
let firstName = name.slice (0, pos);
let lastName = name.slice (pos +1, name.length);

console.log("Name: " + name);
console.log("First name: " + firstName);
console.log("Last name: " + lastName);
}

parseAndDisplayName(name);
