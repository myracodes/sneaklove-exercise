const express = require("express"); // import express in this module
const router = express.Router(); // create an app sub-module (router)



// create dashboard sneakers
router.get('/prod-add', (req, res, next) => {
    res.render("products_add.hbs");
  });
  
  router.post('/prod-add', async (req, res, next) => {
    console.log(req.body);
    const {
      name,
      ref,
      size,
      description,
      price,
      category
    } = req.body;
    console.log(name, ref, size,
        description,
        price,
        category);
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



module.exports = router;
