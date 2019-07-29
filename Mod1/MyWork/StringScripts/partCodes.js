"use strict";

//Description: This script will review and parse out a part code from the following format:
// supplierCode:productNumber-size.
//Author: Cate Speakman

var code = "DI:12345-M";

/* This function will extract the supplier code from a part code.
*
*@param code (string) - this is the part code that is supplied for extraction
*@param pos1 (string) - this will find the ":" in the part code that is supplied as the supplier code
* are the portion of the string prior to them.
* @param supplierCode (string) - this will be the supplier code within the part code that is provided
*/

function getSupplier(code)
{
    let pos1 = code.indexOf(":");
    let supplierCode = code.slice(0, pos1);

    console.log("The supplier code is " + supplierCode);
}

getSupplier(code);

/* This function will extract the product number from a part code.
*
*@param code (string) - this is the part code that is supplied for extraction
*@param pos1 (string) - this will find the ":" in the part code that is supplied This is needed as the 
* product number is located between the ":" and the "-".
*@param pos2 (string) - this will find the - in the part code that is supplied.  This is needed as the 
*product number is located between the ":" and the "-".
*@param productNumber (string) - this will be the product number within the part code provided
*/

function getProductNumber(code)
{
    let pos1 = code.indexOf(":");
    let pos2 = code.lastIndexOf("-");
    let productNumber = code.slice(pos1+1, pos2);

    console.log("The product number is " + productNumber);
}

getProductNumber(code);

/* This function will extract the size from a part code.
*
*@param code (string) - this is the part code that is supplied for extraction
*@param pos2 (string) - this will find the - in the part code that is supplied.  This is needed as the 
*size is located after the "-".
*@param size (string)  - this will be the product number within the part code that is provided.
*/

function getSize(code)
{
    let pos2 = code.lastIndexOf("-");
    let size = code.slice(pos2+1);

    console.log("The size is " + size);
}

getSize(code);
