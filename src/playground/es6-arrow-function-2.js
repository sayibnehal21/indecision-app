// arguments object - no longer bound  with arrow functions

const add = function (a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

const add1 = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add1(55, 1, 1001))

// this keyword - no longer bound

const user = {
    name: 'Sayib',
    cities: ['Bengaluru', 'Kolkata', 'Patna'],
    printPlacesLived: function () {
        const that = this;

        this.cities.forEach(function (city){
            console.log(that.name + ' has lived in ' + city)
        });
    }
};
user.printPlacesLived();

const user1 = {
    name: 'Nehal',
    cities: ['New Delhi', 'Aligarh', 'Noida'],
    printPlacesLived: function () {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
user1.printPlacesLived();

// ES6 method definition syntax


const user2 = {
    name: 'Mohammad Nehal Sayib',
    cities: ['Khagaria', 'New Delhi', 'Aligarh', 'Bengaluru', 'Kolkata'],
    printPlacesLived() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
user2.printPlacesLived();

// map() method (array method)

const user3 = {
    name: 'Salik',
    cities: ['Khagaria', 'New Delhi', 'Aligarh'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });
        return cityMessages;
    }
};
console.log(user3.printPlacesLived());

// concise version of map method

const user4 = {
    name: 'Mohammad Salik',
    cities: ['Khagaria', 'New Delhi', 'Aligarh'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user4.printPlacesLived());

// challenge 

const multiplier = {
    numbers: [2, 3, 4, 5, 6],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy );
    } 
};
console.log(multiplier.multiply());