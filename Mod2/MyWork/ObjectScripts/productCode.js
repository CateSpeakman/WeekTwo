"use strict";

//Description: This script will contain a function taht will parse a part code . The function will then be
//called and return the value in the object variable.  It will display the information.
//Author: Cate Speakman


/* This function will extract the supplier code from a part code.
*
*@param code (string) - this is the part code that is supplied for extraction
*@param pos1 (string) - this will find the ":" in the part code that is supplied as the supplier code
* are the portion of the string prior to them.
* @param supplierCode (string) - this will be the supplier code within the part code that is provided
**@param pos2 (string) - this will find the - in the part code that is supplied.  This is needed as the 
*product number is located between the ":" and the "-".
*@param productNumber (string) - this will be the product number within the part code provided
*@param size (string)  - this will be the product number within the part code that is provided.
*
*/

function parsePartCode(partCode1)
{
    let pos1 = partCode1.indexOf(":");
    let pos2 = partCode1.lastIndexOf("-");

    let parsedSupplierCode = partCode1.slice(0, pos1);
    let parsedProductNumber = partCode1.slice(pos1+1, pos2);
    let parsedSize = partCode1.slice(pos2+1);

    let part1= {
        supplierCode:parsedSupplierCode,
        productNumber:parsedProductNumber,
        size:parsedSize
        };

    return part1;
}


let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);

console.log("supplier: " + part1.supplierCode +
             " Product Number: " + part1.productNumber +
             " Size: " + part1.size);




