var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locationsArray = [];
var Locations = /** @class */ (function () {
    function Locations(name, city, zipCode, address, image, current) {
        this.name = name;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.image = image;
        this.current = current;
        locationsArray.push(this);
    }
    Locations.prototype.render = function () {
        return "\n\t\t\t<div class = \"col-sm-12 col-md-5 col-lg-3 p-1 info-container\">\n\t\t\t <div class=\"card\" style=\"\">\n              \t<img class=\"card-img-top\" src=\"" + this.image + "\" alt=\"Card image cap\">\n              \t<div class=\"card-body\">\n                \t<h3 class=\"card-title\">" + this.name + "</h3>\n                \t<p class=\"card-text\">  \n\t\t\t\t\t\t<ul class=\"list-group bg-dark p-0\">\n\t\t\t\t\t\t  <li class=\"list-group-item bg-dark text-light info-item \">City: " + this.city + "</li>\n\t\t\t\t\t\t  <li class=\"list-group-item bg-dark text-light info-item\">Zip-Code:" + this.zipCode + "</li>\n\t\t\t\t\t\t  <li class=\"list-group-item bg-dark text-light info-item\">Address: " + this.address + " </li>\n\t\t\t\t\t\t  <li class=\"list-group-item bg-dark text-light info-item\">Visited: " + this.current + "</li>\n\t\t\t\t\t \t</ul>\n\t\t\t \t\t</p>              \n\t              </div>\n\t            </div>          \n\t        </div>";
    };
    return Locations;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, city, zipCode, address, image, phone, cuisine, homepage, current) {
        var _this = _super.call(this, name, city, zipCode, address, image, current) || this;
        _this.phone = phone;
        _this.cuisine = cuisine;
        _this.homepage = homepage;
        return _this;
    }
    Restaurant.prototype.render = function () {
        return "\n\t\t\t<div class = \"col-sm-12 col-md-5 col-lg-3 p-1 info-container\">\n\t\t\t <div class=\"card\" style=\"\">\n              \t<img class=\"card-img-top\" src=\"" + this.image + "\" alt=\"Card image cap\">\n              \t<div class=\"card-body\">\n                \t<h3 class=\"card-title bg-dark\">" + this.name + "</h3>\n                \t<p class=\"card-text\">           \n\t\t\t  \t\t <ul class=\"list-group bg-dark p-0 list-group-flush \">\n\t\t\t\t\t  <li class=\"list-group-item bg-dark text-light info-item \">City: " + this.city + "</li>\n\t\t\t\t\t  <li class=\"list-group-item bg-dark text-light info-item\">Zip-Code:" + this.zipCode + "</li>\n\t\t\t\t\t  <li class=\"list-group-item bg-dark text-light info-item\">Address: " + this.address + " </li>\n\t\t\t\t\t  <li class=\"list-group-item bg-dark text-light info-item\">Phone: " + this.phone + " </li>\n\t\t\t\t\t  <li class=\"list-group-item bg-dark text-light info-item\">Cuisine: " + this.cuisine + " </li>\n\t\t\t\t\t  <li class=\"list-group-item bg-dark text-light info-item\">Home Page: <a href=\"" + this.homepage + "\">" + this.homepage + "</a>\n </li>\n \t\t\t\t\t  <li class=\"list-group-item bg-dark text-light info-item\">Visited: " + this.current + "</li>\n\t\t\t\t\t </ul>\n\t\t\t \t\t</p>              \n\t              </div>\n\t            </div>          \n\t        </div>";
    };
    return Restaurant;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zipCode, address, image, eventDate, eventTime, ticketPrice, homepage, current) {
        var _this = _super.call(this, name, city, zipCode, address, image, current) || this;
        _this.eventTime = eventTime;
        _this.eventDate = eventDate;
        _this.ticketPrice = ticketPrice;
        _this.homepage = homepage;
        return _this;
    }
    //<div class = "col-sm-12 col-md-5 col-lg-3 p-1 info-container align-items-end">
    Events.prototype.render = function () {
        return "\n\t\t<div class = \"col-sm-12 col-md-5 col-lg-3 p-1 info-container\">\n          <div class=\"card\" style=\"\">\n              <img class=\"card-img-top\" src=\"" + this.image + "\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h3 class=\"card-title\">" + this.name + "</h3>\n                <p class=\"card-text\">\n\t\t\t\t\t<ul class=\"list-group bg-dark p-0 list-group-flush \">               \n\t\t\t\t\t  <li class=\"list-group-item bg-dark text-light info-item \">City: " + this.city + "</li>\n\t\t\t\t\t  <li class=\"list-group-item bg-dark text-light info-item\">Zip-Code:" + this.zipCode + "</li>\n\t\t\t\t\t  <li class=\"list-group-item bg-dark text-light info-item\">Address: " + this.address + " </li>\n\t\t\t\t\t  <li class=\"list-group-item bg-dark text-light info-item\">Event Date: " + this.eventDate + " </li>\n\t\t\t\t\t  <li class=\"list-group-item bg-dark text-light info-item\">Event Time: " + this.eventTime + " </li>\n\t\t\t\t\t  <li class=\"list-group-item bg-dark text-light info-item\">Entrance: " + this.ticketPrice + ".- EUR</li>\n\t\t\t\t\t  <li class=\"list-group-item bg-dark text-light info-item\">Home Page: <a href=\"" + this.homepage + "\">" + this.homepage + "</a>\n </li>\n \t\t\t\t\t  <li class=\"list-group-item bg-dark text-light info-item\">Visited: " + this.current + "</li>\t\t\t\t\t  \n\t\t\t\t \t</ul>\n\t\t \t\t</p>              \n              </div>\n            </div>          \n        </div>";
    };
    return Events;
}(Locations));
var location1 = new Locations("St. Charles Church", "Vienna", "1010", "Karlsplatz 1", "Images/karl.jpg", "2014-09-14 20:30");
var location2 = new Locations("Schönbrunn", "Vienna", "1130", "Maxingstraße 13b", "Images/schoenb.jpg", "2020-01-19 14:15");
var location3 = new Restaurant("Lemon Leaf", "Vienna", "1050", "Kettenbrückengasse 19", "Images/lemon.png", "+43 1 58 528 56", "Thai", "www.lemonleaf.at", "2020-02-14 10:15");
var location4 = new Restaurant("SIXTA", "Vienna", "1050", "Schönbrunner Straße 21", "Images/sixta.png", "+43 1 58 528 56", "Classic", "http://www.sixta-restaurant.at/", "2020-03-10 16:40");
var location6 = new Events("Kris Kristofferson", "Vienna", "1200", "Nordwestbahnhof", "Images/kris.jpg", "Fr., 15.11.2021", "20:00", 0, "http://kriskristofferson.com/", "2019-07-16 09:30");
var location7 = new Events("Lenny Kravitz", "Vienna", "1200", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1, 1150 Wien", "Images/lenny.jpg", "Sat, 29.02.2016", "19:30", 0, "www.lennykravitz.com/", "2016-02-29 14:40");
var location5 = new Events("Bau Lücken Konzert", "Vienna", "1200", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1, 1150 Wien", "Images/blk.jpg", "22.08.2019", "20:00", 0, "", "2019-07-12 12:30");
for (var i in locationsArray) {
    document.getElementById("row1").innerHTML += locationsArray[i].render();
}
var asc = new Array;
asc = locationsArray.sort(function (a, b) {
    var x = new Date(a.current);
    var y = new Date(b.current);
    console.log(x); // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return x - y;
});
console.log(asc);
//sort algorithm
var sortedActivities = locationsArray.slice().sort(function (a, b) { return b.current - a.current; });
