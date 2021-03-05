const mongoose = require("mongoose");
require("../config/mongodb");
const SneakerModel = require("../models/Sneaker");

const someSneakers = [
    {
        name: 'Sneakers Crazy',
        ref: 'EDKKL',
        size: 39,
        description: "Sneakers made for city lovers",
        price: 55.99,
        category: "men",
        id_tags: ["6042113fc715e411e7e2d972"]
    },
    {
        name: 'Kid Sneaks',
        ref: 'KIDS',
        size: 25,
        description: "Kids sneakers for being outside",
        price: 55.99,
        category: "kids",
        id_tags: ["6042176e9dba4c14df2aae1c", "6042113fc715e411e7e2d972"]
    }
]




SneakerModel.create(someSneakers)
.then((sneaker)=>{
    console.log("YOU MADE IT", sneaker)
})
.catch((error)=>{
    console.log("HUGE ERROR ON THE SEED", error)
})
