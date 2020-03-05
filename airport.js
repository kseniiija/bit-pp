"use strict";

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getData = function () {
        return this.name + " " + this.surname;
    };
}



//////////////////////////////////////////////


function Seat(category, number) {
    this.number = number;
    this.category = category;
    this.getData = function () {
        return this.number + " ," + this.category.toUpperCase();
    };
}


//////////////////////////////////////


function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;
    this.getData = function () {
        return this.seat.getData() + ", " + this.person.getData();
    };
}






///////////////////////////////////////////////


function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.passengers = [];

    this.addPassenger = function (passenger) {
        this.passengers.push(passenger);
    }

    this.getData = function () {
        var str = "";
        for (var i = 0; i < this.passengers.length; i++) {
            str += this.passengers[i].getData() + "\n\t\t\t";
        }
        return this.date + ", " + this.relation + "\n\t\t\t" + str;
    }
}

var person1 = new Person("Stefan", "Milutinovic");
var person2 = new Person("Ivana", "Milutinovic");
var person3 = new Person("Momcilo", "Milutinovic");
var person4 = new Person("Andjelka", "Milutinovic");
var seat1 = new Seat("e", 45);
var seat2 = new Seat('b', 12);
var seat3 = new Seat("b", 15);
var seat4 = new Seat("b", 20);
var putnik1 = new Passenger(person1, seat1);
var putnik2 = new Passenger(person2, seat2);
var putnik3 = new Passenger(person3, seat3);
var putnik4 = new Passenger(person4, seat4);
var avioFlight = new Flight("Beograd - Stockholm", "11.06.2020");
var avioFlight1 = new Flight("Belgrade-Wien", "06.09.2020.");
avioFlight.addPassenger(putnik1);
avioFlight.addPassenger(putnik2);
avioFlight1.addPassenger(putnik3);
avioFlight1.addPassenger(putnik4);

///////////////////////////////////////////


function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];
    this.addFlight = function (flight) {
        this.listOfFlights.push(flight);
    }
    this.getDataAirport = function () {
        var flightstr = '';
        for (var i = 0; i < this.listOfFlights.length; i++) {
            flightstr += this.listOfFlights[i].getData();
        }
        return this.name + ", total passengers: 4" + "\n" + flightstr;
    }
}
var airport = new Airport();

airport.addFlight(avioFlight);
airport.addFlight(avioFlight1);
console.log(airport.getDataAirport())

///////////////////////////////


// function createFlight(relation, date) {
//     return {
//         relation: relation,
//         date: date
//     };
// }
// ///////////////////////////////////////////

// function createPassenger(name, surname, seat, category) {
//     return {
//         name: name,
//         surname: surname,
//         seat: seat,
//         category: category
//     };
// }


// var bgSt = createFlight("Belgrade - Stockholm", "11.06.2020.");
// var bgWi = createFlight("Belgrade-Wien", "06.09.2020.");

// var traveler1 = createPassenger("Jovana", "Milutinovic", 34, "b");
// var traveler2 = createPassenger("Ivana", "Milutinovic", 12, "b");
// var traveler3 = createPassenger("Momcilo", "Milutinovic", 24, "b");
// var traveler4 = createPassenger("Andjelka", "Milutinovic", 10, "b");







