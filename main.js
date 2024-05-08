//Exercise#45
//Cars:
/*
Write a function that stores information about a car in an object .The funtion should always receive a manufacturer
and a model name . It should then accept an arbitray number of keyword arguments/.Call the funtion with the required
information and two oher name_value Pairs,such as a color or an optional feature.Print the object that's returned
to make sure all the information was stored correctly.*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function carDetails(manufacturer, modelname) {
    var additionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalInfo[_i - 2] = arguments[_i];
    }
    var car = __assign({ manufacturer: manufacturer, modelname: modelname }, Object.fromEntries(additionalInfo));
    return car;
}
;
var mycarDetails = carDetails("Toyota", "Corolla", ['color', 'blue'], ['year', 2022]);
console.log(mycarDetails);
