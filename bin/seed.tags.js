const mongoose = require("mongoose");
require('../config/mongodb')
const TagsModel = require("../models/Tag");

const someTags = [
  { label: "Running" },
  { label: "Casual" },
  { label: "Elegant" },
  { label: "Fancy" },
  { label: "Sports" },
];

TagsModel.create(someTags)
.then((tags)=>{
    console.log(tags);
})
.catch((error)=>{
    console.log("ERROR IN THE SEED", error);
})


