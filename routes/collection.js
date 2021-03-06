const express = require("express");
const SneakerModel = require("../models/Sneaker");
const router = express.Router();

router.get('/sneakers/collection', (req, res, next) => {
    SneakerModel.find()
        .then((dbRes) => {
            res.render('products.hbs', {
                sneakers: dbRes,
                category:"collection"
            });
        })
        .catch((err) => {
            console.log(err);
        })
    console.log('-------get collection--------');
});

router.get("/sneakers/:cat", (req, res, next) => {
    SneakerModel.find({category: req.params.cat})
        .then((dbRes) => {
            res.render("products.hbs", {
                sneakers: dbRes,
                category: req.params.cat
                //ajouter tags: xxxx
            });
        })
        .catch((err) => {
            console.log(err);
        })

});

module.exports = router;