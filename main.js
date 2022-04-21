"use strict"
const express = require("express"),
    app = express(),
    homeController = require("./controllers/homeController"),
    errorController = require("./controllers/errorController"),
    layouts = require("express-ejs-layouts");



app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(layouts);
app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());
app.use(express.static("public"));

app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();

});

app.get("/", (req, res) => {
    res.render("index");
});


app.get("/gear", homeController.showGear);
app.get("/shoes", homeController.showShoes);
app.get("/contact", homeController.showSignUp);
app.get("/thanks", homeController.postSignUpForm);
app.get("/cart", homeController.showCart);


app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);

});



