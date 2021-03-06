const express = require("express"); // import express in this module
const SneakerModel = require("../models/Sneaker");
const router = express.Router(); // create an app sub-module (router)

// create dashboard sneakers
router.get("/prod-add", (req, res, next) => {
  res.render("products_add.hbs");
});

router.post("/prod-add", async (req, res, next) => {
  console.log(req.body);
  const {
    name,
    ref,
    size,
    description,
    price,
    category
  } = req.body;
  console.log(name, ref, size, description, price, category);
  try {
    await SneakerModel.create({
      name,
      ref,
      size,
      description,
      price,
      category,
    });
    console.log("shoe successfully created :D");
    res.redirect("/sneakers/collection");
  } catch (err) {
    next(err);
    res.render("error.hbs");
  }
});

// MANAGE SNEAKERS DASHBOARD

router.get("/prod-manage", (req, res, next) => {
  SneakerModel.find()
    .then((sneakers) => {
      res.render("products_manage.hbs", {
        sneakers
      })
    })
    .catch((error) => {
      console.log(error, "ERROR IN THE MANAGE PRODUCTS ROUTE");
    });
});


// SNEAKERS UPDATE
router.get("/prod-edit/:id", (req, res) => {
  console.log("--------product edit ---------", req.params.id);
  SneakerModel.findById(req.params.id)
    .then((sneaker) => {
      console.log("kikou je suis dans then", sneaker);
      res.render("product_edit.hbs", {
        sneaker
      });
    })
    .catch((err) => {
      console.log(err);
    })
});

router.post("/prod-edit/:id", (req, res, next) => {
  console.log("--------product edit post ---------", req.params.id);
  SneakerModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      console.log("--------product edit THEN ---------", req.body);
      res.redirect("/sneakers/collection");
    })
    .catch((err) => {
      console.log(err);
    })
});

// SNEAKER DELETE
router.post('/sneaker/:id/delete', (req, res, next) => {
  console.log("--------product delete ---------");
  SneakerModel.findByIdAndDelete(req.params.id)
  .then(() => {
    console.log("--------product delete THEN ---------");
    res.redirect("/sneakers/collection");
  })
  .catch((err) => {
    console.log(err);
  })
})


module.exports = router;