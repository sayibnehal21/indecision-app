var nameVar = 'Nehal';
var nameVar = 'Sayib';
console.log('nameVar', nameVar);

let nameLet = 'Nehal';
nameLet = 'Salik';
console.log('nameLet', nameLet);

const nameConst = 'Saquib';
console.log('nameConst', nameConst);

// Block level Scoping

const fullName = 'Mohammad Sayib';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);