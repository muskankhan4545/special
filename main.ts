//Exercise#45
//Cars:
/*
Write a function that stores information about a car in an object .The funtion should always receive a manufacturer
and a model name . It should then accept an arbitray number of keyword arguments/.Call the funtion with the required
information and two oher name_value Pairs,such as a color or an optional feature.Print the object that's returned 
to make sure all the information was stored correctly.*/

function carDetails(manufacturer :String, modelname:String, ...additionalInfo){

    const car ={manufacturer,modelname, ...Object.fromEntries(additionalInfo)};
    return car;
};

const mycarDetails =carDetails("Toyota", "Corolla",['color', 'blue'], ['year',2022]);

console.log(mycarDetails)