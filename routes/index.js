const express = require("express");
const router = express.Router();

console.log(`\n\n
-----------------------------
-----------------------------
     wax on / wax off !
-----------------------------
-----------------------------\n\n`
);

router.get("/", (req, res) => {
  res.render("index.hbs");
});

router.get("/sneakers/:cat", (req, res) => {
  res.render("products.hbs");
});

router.get("/one-product/:id", (req, res) => {
  res.render("one_product.hbs");
});

router.get("/product-edit/:id", (req, res) => {
  res.render("product_edit.hbs");
});

// router.get("/signup", (req, res) => {
//   res.render("signup.hbs");
// });

// router.get("/signin", (req, res) => {
//   res.render("signin.hbs");
//  });


module.exports = router;
