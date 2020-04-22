"use strict";
let persone = {
        name: "john",
        age: 25,
        isMarried: false
    }
    // if you want to find some properties you can do it with a comma (.) or []

// console.log(persone.name); 
// it was a first type
// below is the second type - please use quotes and []

console.log(persone["name"]);



// massive works with many peoperties use [] inside can be a numbers and objects etc. the number starts with 0 
let arr = ['plum.png', 'orange.jpg', 'apple.bpf'];
console.log(arr[2])

//_________________________________
//let answer = confirm('Are you here?');
//console.log(answer);
// (in this sample console will ask yo are you here? you will answer ok or cancel. (it will comes true of false))

//__________________________________
// let answer = prompt('Are you 18?', '');
// console.log(answer);

// (prompt provides you with writing request). all given answers will be seen as string


//________________________________________
// if we add typeof we will see indicating the type of the unevaluated operand.

// let answer = prompt('Are you 18?', '');
// console.log(typeof(answer));


let size = 37;
if (size < 37) {
    console.log('small')
} else if (size > 37) {
    console.log('big')
} else {
    console.log('perfect')
};

let shoeSize = 36;
switch (shoeSize) {
    case shoeSize < 36:
        console.log('small');
        break;
    case shoeSize > 39:
        console.log('big');
        break;
    case 37:
        console.log('perfect');
        break;
    case 36:
        console.log('for Mom');
        break;
    default:
        console.log('Trouble');
        break;
}

switch (num) {
    case num < 49:
        console.log('small');
        break;
    case num == 50:
        console.log('for Mom');
        break;
}

const expr = 'Papayas';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        console.log('Sorry, we are out of ' + expr + '.');
}

let size = 30;
while (size < 39) {
    console.log(size);
    size++;
}

let size = 30;
do {
    console.log(size);
    size++;
}
while (size < 39);


for (let size = 1; size < 12; size++) {
    console.log(size)
}

for (let size = 1; size < 12; size++) {
    if (size == 7) {
        break
    }
    console.log(size)
}

for (let size = 1; size < 12; size++) {
    if (size == 7) {
        continue
    }
    console.log(size)
}

for (let size = 1; size < 12; size++) {
    if (size == 7)
        continue;
    console.log(size)
}