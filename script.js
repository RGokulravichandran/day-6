// 1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md


  class Movie {
    constructor(title, studio, rating = 'PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
      }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === 'PG');
    }
  }
  
  const movieData = new Movie('Vikram', 'AVM', '8.5');
  console.log(movieData)


// 2.https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = 1.0;
        this.color = "Red";
        if (typeof (radius) !== "undefined") {
            this.radius = radius;
        }
        if (typeof (color) !== "undefined") {
            this.color = color;
        }
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.toString = function () {
        return "Radius: " + this.radius + " Color: " + this.color;
    };
    Circle.prototype.getArea = function () {
        return (2 * (Math.PI) * this.radius);
    };
    Circle.prototype.getCircumference = function () {
        return (2 * this.radius);
    };
    return Circle;
}());
var c1 = new Circle();
console.log("Constructor with no params: " + c1.toString());
var c2 = new Circle(3.5);
console.log("Constructor with one param: " + c2.toString());
var c3 = new Circle(2.2, 'Yellow');
console.log("getRadius: " + c3.getRadius());
c3.setRadius(3.3);
console.log("Radius value after setRadius: " + c3.getRadius());
console.log("getColor: " + c3.getColor());
c3.setColor("Blue");
console.log("Color Value after setColor: " + c3.getColor());
console.log(c3.toString());
console.log("Area: " + c3.getArea());
console.log("Circumference: " + c3.getCircumference());

// 3.Write a “person” class to hold all the details.

class person{
    constructor(firstName, LastName, Age, Place, Number, status){
        this.firstName = firstName
        this.LastName = LastName
        this.Age = Age
        this.Place = Place
        this.Number =Number
        this.status = status
    }
    Details(){
        return (`The name of a person is ${this.firstName} ${this.LastName} with age of ${this.Age} born at ${this.Place} Phone Number: ${this.Number} and Status is ${this.status}`)    
    }
}
let person1 = new person ("Ram", "Kumar", "24", "Theni", "1234567890", "single")
let person2 = new person ("Sandhana", "Nila", "30", "Chennai", "0987654321", "Married")
let person3 = new person ("Priyanka", "Ravi", "21", "Chennai", "1234567890", "Married")
let person4 = new person ("yeshwanth", "saravana", "3", "Canada", "1234567890", "Single")
let person5 = new person ("Murugesan", "Govindharaj", "69", "US", "1234567890", "single")

console.log(person1.Details())
console.log(person2.Details())
console.log(person3.Details())
console.log(person4.Details())
console.log(person5.Details())


// 4.write a class to calculate the uber price.

class Uber{
    constructor(distance, rate, waitingPeriod){
        this.distance = distance
        this.rate = rate
        this.waitingPeriod = waitingPeriod
    }
setDistance(dist){
  this.distance = dist
}

    getRideDetails(){
        return(`The distance of the ride is ${this.distance} and rate of ${this.rate} with waiting Period of ${this.waitingPeriod}`)
    }
getPrice(){
  let TotalPrice = (this.rate*this.distance) + (this.waitingPeriod*5)
  return TotalPrice
}
}

const traveler1 = new Uber (350,20,15)
console.log(traveler1.getRideDetails())
console.log(traveler1.getPrice())
traveler1.setDistance(150)
console.log(traveler1.getRideDetails())
console.log(traveler1.getPrice())



// 4.write a class to calculate the uber price in another method


class UberCalculator {
  constructor(distance, time, surgeMultiplier, serviceFee) {
    this.distance = distance;
    this.time = time;
    this.surgeMultiplier = surgeMultiplier || 1; // default surge multiplier is 1 (no surge)
    this.serviceFee = serviceFee || 0; // default service fee is 0
  }
  getRiderDetails(){
    return(`The distance of the ride is ${this.distance} Km and duration is ${this.time} Mins`)
}
  calculatePrice() {
    const distanceCost = 15 * this.distance;
    const timeCost = 5 * this.time;
    const subtotal = 100 + distanceCost + timeCost;
    const total = subtotal * this.surgeMultiplier + this.serviceFee;
    return total;
  }
}
const traveler2 = new UberCalculator (100,20)
console.log(traveler2.getRiderDetails())
console.log(traveler2.calculatePrice())