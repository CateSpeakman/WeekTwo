"use strict";

//Description: This script will calculate the cost of the car rental, options requested and under age 25 surcharge
//              along with the overall total cost of the rental.
//Author: Cate Speakman

/*this function will calculate the cost of the car rental days*/ 


function getVehicleCost()
{

    const vehicles = document.getElementById("vehicles");
    let vehType = vehicles.options[vehicles.selectedIndex].text;
    let vehicleCost =0; 

    switch(vehType)
    {
        case "Economy":
            vehicleCost = 29.99;
            break;

        case "Compact":
            vehicleCost = 34.99;
            break;

        case "Intermediate":
            vehicleCost = 39.99;
            break;

        case "Full Size":
            vehicleCost = 44.99;
            break;

        default:
            vehicleCost = 0;
            alert("Please select vehicle");
    }

    return vehicleCost;

}




function getCarPrice(numRentalDays, vehicleCost)
{
  
    let carPrice = numRentalDays * vehicleCost;

    return carPrice;
}

/* this function will calculate the cost of the rental options*/
function getOptionsTotal(numRentalDays)
{

    let optionsTotal =0;
    let tolltagTotal =0;
    let gpsTotal = 0;
    let roadsideTotal =0;
    
    let tollTag = document.getElementById("tollTag").checked;
    if (tollTag)
    {
        tolltagTotal = numRentalDays * 3.95;
    }

    let gps = document.getElementById("gps").checked;
    if(gps)
    {
         gpsTotal = numRentalDays * 2.95;
    }

    let roadside = document.getElementById("roadsideAssist").checked;
    if(roadside)
    {
        roadsideTotal = numRentalDays * 2.95;
    }

    optionsTotal = tolltagTotal + gpsTotal + roadsideTotal

    return optionsTotal;

    }

    function getSurcharge(carPrice)
    {
        let surcharge = 0;
        if (document.getElementById("age25").checked)
        {
            surcharge = carPrice * 1.3
        }

        return surcharge;
    }


function getTotalCost()
{

    let numRentalDays = document.getElementById("numRentalDays").value;
    numRentalDays = Number(numRentalDays);

    let vehicleCost = getVehicleCost();
    let totalCar = getCarPrice(numRentalDays, vehicleCost);
    let totalOptions = getOptionsTotal(numRentalDays);
    let totalSurcharge = getSurcharge(totalCar);

    let totalRentalCost = totalOptions + totalCar + totalSurcharge;
    totalRentalCost = parseFloat(totalRentalCost.toFixed(2));

    document.getElementById("carTotal").value=totalCar.toFixed(2);
    document.getElementById("optionTotal").value=totalOptions.toFixed(2);
    document.getElementById("surchargeTotal").value=totalSurcharge.toFixed(2);
    document.getElementById("totalRentalCost").value=totalRentalCost.toFixed(2);
}

function init()
{
        const totalCostBtn = document.getElementById("totalCostBtn")
        totalCostBtn.onclick = getTotalCost;
 }
    
window.onload = init;
