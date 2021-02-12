class Car {
    constructor(name, year) {
    this.fname = name;
    this.lyear = year;
  }
}

Car; myCar = new Car("Ford", 2014);
console.log(myCar.fname + " " + myCar.lyear);