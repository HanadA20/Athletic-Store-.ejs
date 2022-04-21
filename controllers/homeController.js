var gear = [
    {
        title: "Basketball",
        cost: 20.00,
        img: "/images/basketballBall.jpg",
    },

    {
        title: "Football",
        cost: 10.00,
        img: "/images/football.jpg",

    },

    {
        title: "Soccer ball",
        cost: 15.00,
        img: "/images/soccerBall.png",

    },

    {
        title: "Hockey Stick",
        cost: 40.00,
        img: "/images/hockeyStick.jpg",

    },

    {
        title: "Baseball + Glove",
        cost: 74.00,
        img: "/images/baseballGlove.png",

    },

];

var shoes = [
    {
        title: "Basketball Shoes",
        cost: 40.00,
        img: "/images/basketballShoe.jpg",
    },

    {
        title: "Football Cleats",
        cost: 45.00,
        img: "/images/footballShoe.jpg",

    },

    {
        title: "Soccer Cleats",
        cost: 35.00,
        img: "/images/soccerShoe.jpg",

    },

    {
        title: "Hockey Skates",
        cost: 80.00,
        img: "/images/hockeyShoes.jpg",

    },

    {
        title: "Baseball Cleats",
        cost: 50.00,
        img: "/images/baseballlShoe.jpg",

    },

];

exports.showGear = (req, res) => {

    res.render("gear", {
        offeredGear: gear
    });
}; 

exports.showShoes = (req, res) => {

    res.render("shoes", {
        offeredShoes: shoes
    });
}; 

exports.showSignUp = (req, res) => {

    res.render("contact");

};

exports.showSignUpForm = (req, res) => {

    res.render("thanks");

};

exports.postSignUpForm = (req, res) => {

    res.render("thanks"); 

};

exports.showCart = (req, res) => {

    res.render("cart"); 

};


exports.sendReqParam = (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
};