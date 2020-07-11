function square (x) {
    return x * x;
};
console.log(square(3));


const squareArrow = (x) => {
    return x * x;
};
console.log(squareArrow(4));


const squareArrowOne = (x) => x * x;
console.log(squareArrowOne(5));


const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}
console.log(getFirstName('Nehal Sayib'));


const getFirstNameOne = (fullName) => fullName.split(' ')[0];
console.log(getFirstNameOne('Mohammad Nehal'));