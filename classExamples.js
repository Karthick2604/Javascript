"use strict";
class car
{
    constructor(name,model)
    {
        this.car_name  = name;
        this.car_model = model;
    }
}

let mycar=new car("INNOVO","BS6");
console.log(mycar.car_name,mycar.car_model);