"use strict";

//Description: This script will calculate the cost of the car rental, options requested and under age 25 surcharge
//              along with the overall total cost of the rental.
//Author: Cate Speakman
function validateZipCode()
{

    let userZipCode = document.getElementById("inputZipCode").value;
    let canadianZipPattern = /^(\d{5}-\d{4}|\d{5}|\d{9})$|^([a-zA-Z]\d[a-zA-Z]( )?\d[a-zA-Z]\d)$/;
    let validation;

    if (canadianZipPattern.test(userZipCode) == true)
    {
        validation = "yes";
        
    }
    else
    {
        validation = "sorry, try again";
    }

    alert (validation);

}

function init()
{
        const validateBtn = document.getElementById("validateBtn")
        validateBtn.onclick = validateZipCode;
 }
    
window.onload = init;