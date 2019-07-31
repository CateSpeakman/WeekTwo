"use strict";

//Description: This script will calculate the cost of the ice cream and toppings entered by user.
//Author: Cate Speakman



function getScoopPrice()
{
  
    let numScoops = document.getElementById("scoopNumber").value;
    numScoops = Number(numScoops);

    let scoopPrice;

    switch(numScoops)
    {
        case 1:
            scoopPrice = 2.50;
            break;

        case 2:
            scoopPrice = 3.75;
            break;

        case 3:
            scoopPrice = 5.00;
            break;

        default:
            scoopPrice = 0;
            alert("Invalid Amount");
    }
 

    return scoopPrice;
}


/* this function will calculate the cost of the toppings*/
function getToppings()
{

let toppings = 0;

let hotFudge = document.getElementById("hotFudge").checked;
if (hotFudge)
{
    toppings +=1.25;
}

let sprinkles = document.getElementById("sprinkles").checked;
if(sprinkles)
{
    toppings +=.25;
}

let whipCream = document.getElementById("whipCream").checked;
if(whipCream)
{
    toppings +=.75;
}

return toppings;

}

function getTotalCost()
{
let totalToppings = getToppings();
let totalScoops = getScoopPrice();

let totalIceCreamCost = totalToppings + totalScoops;
    totalIceCreamCost = parseFloat(totalIceCreamCost.toFixed(2));
    document.getElementById("iceCreamCost").value=totalIceCreamCost.toFixed(2);
}

function init()
{
        const totalCostBtn = document.getElementById("totalCostBtn")
        totalCostBtn.onclick = getTotalCost;
 }
    
window.onload = init;
