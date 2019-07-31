"use strict";

//Description: "Challenge* This script will contain multidimensional arrays.
//Author: Cate Speakman

let menu = [
    [
        {item:"french toast", price:8.50},
        {item:"eggs and bacon", price:6.50},
        {item:"western omelet", price:10.95}
    ],

    [
        {item:"grilled cheese", price:6.50},
        {item:"cheeseburger", price:9.50}, 
        {item:"chili dog", price:5.95},
        {item:"french onion soup", price:6.50}
    ],

    [
        {item:"chicken fajitas", price:10.95},
        {item:"meatloaf and gravy", price:13.95},
        {item:"turkey and stuffing", price:15.95},
        {item:"t-bone steak", price:22.95},
        {item:"fried scallops", price:25.95}
    ]
    
];

let meal = 2;
let menuList;

switch (meal)
{
    case 0:
        menuList = "Breakfast Menu";
        break;
    
    case 1:
        menuList = "Lunch Menu";
        break;

    case 2:
        menuList = "Dinner Menu";
        break;

    default:
        menuList = "Unknown";
}

console.log(menuList);

    let menuItems = menu[meal].length;

    for (let j = 0; j < menuItems; j++)
    {
        console.log(menu[meal][j].item + " $" + menu[meal][j].price);
    }
