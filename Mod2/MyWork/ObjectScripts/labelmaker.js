"use strict";

//Description:  This script will define objects and pass them to a function to display in the format 
//              of a mailing label.
//Author: Cate Speakman

function printContact(label)
{
    console.log(label.name);
    console.log(label.address);
    console.log(label.city + "," + label.state + " " + label.zip);
}

let label1 = {
                name:"Cate Speakman",
                address:"282 Main St Apt 24",
                city:"Terryville",
                state:"CT",
                zip:"06786"
};

printContact(label1);
