"use strict";
// // let persone = {
// //         name: "john",
// //         age: 25,
// // //         isMarried: false
// // //     }
// // //     // if you want to find some properties you can do it with a comma (.) or []

// // // // console.log(persone.name); 
// // // // it was a first type
// // // // below is the second type - please use quotes and []

// // // console.log(persone["name"]);



// // // // massive works with many peoperties use [] inside can be a numbers and objects etc. the number starts with 0 
// // // let arr = ['plum.png', 'orange.jpg', 'apple.bpf'];
// // // console.log(arr[2])

// // // //_________________________________
// // // //let answer = confirm('Are you here?');
// // // //console.log(answer);
// // // // (in this sample console will ask yo are you here? you will answer ok or cancel. (it will comes true of false))

// // // //__________________________________
// // // // let answer = prompt('Are you 18?', '');
// // // // console.log(answer);

// // // // (prompt provides you with writing request). all given answers will be seen as string


// // // //________________________________________
// // // // if we add typeof we will see indicating the type of the unevaluated operand.

// // // // let answer = prompt('Are you 18?', '');
// // // // console.log(typeof(answer));


// // // let size = 37;
// // // if (size < 37) {
// // //     console.log('small')
// // // } else if (size > 37) {
// // //     console.log('big')
// // // } else {
// // //     console.log('perfect')
// // // };

// // // let shoeSize = 36;
// // // switch (shoeSize) {
// // //     case shoeSize < 36:
// // //         console.log('small');
// // //         break;
// // //     case shoeSize > 39:
// // //         console.log('big');
// // //         break;
// // //     case 37:
// // //         console.log('perfect');
// // //         break;
// // //     case 36:
// // //         console.log('for Mom');
// // //         break;
// // //     default:
// // //         console.log('Trouble');
// // //         break;
// // // }

// // // switch (num) {
// // //     case num < 49:
// // //         console.log('small');
// // //         break;
// // //     case num == 50:
// // //         console.log('for Mom');
// // //         break;
// // // }

// // // const expr = 'Papayas';
// // // switch (expr) {
// // //     case 'Oranges':
// // //         console.log('Oranges are $0.59 a pound.');
// // //         break;
// // //     case 'Mangoes':
// // //     case 'Papayas':
// // //         console.log('Mangoes and papayas are $2.79 a pound.');
// // //         // expected output: "Mangoes and papayas are $2.79 a pound."
// // //         break;
// // //     default:
// // //         console.log('Sorry, we are out of ' + expr + '.');
// // // }

// // // let size = 30;
// // // while (size < 39) {
// // //     console.log(size);
// // //     size++;
// // // }

// // // let size = 30;
// // // do {
// // //     console.log(size);
// // //     size++;
// // // }
// // // while (size < 39);


// // // for (let size = 1; size < 12; size++) {
// // //     console.log(size)
// // // }

// // // for (let size = 1; size < 12; size++) {
// // //     if (size == 7) {
// // //         break
// // //     }
// // //     console.log(size)
// // // }

// // // for (let size = 1; size < 12; size++) {
// // //     if (size == 7) {
// // //         continue
// // //     }
// // //     console.log(size)
// // // }

// // // for (let size = 1; size < 12; size++) {
// // //     if (size == 7)
// // //         continue;
// // //     console.log(size)
// // // }

// // // let admin, name;
// // // name = "John";
// // // admin = name

// // // alert(admin);

// // // earthWorld
// // // let user;
// // // user = newUser

// // // let message = "Hello";
// // // message = 123;
// // // alert(message);

// // // let name = "ilya";
// // // alert(`hello ${1}`);
// // // alert(`hello ${name}`);
// // // alert(`hello ${'name'}`);

// // // let age = Number('hey hey het');
// // // alert(age);

// // // let name = prompt('What is your name?', '');
// // // alert(`I love you ${name}!`);
// // // let ask = prompt('Do you love me?', '');
// // // alert(` ${ask}, I knew it!`);

// // // let answer = prompt('what is official JavaScripts name', '');
// // // if (answer == 'ECMAScript') {
// // //     alert('You are right');
// // // } else {
// // //     alert('You really so');
// // // }

// // // let number = +prompt('What is number?', '');

// // // if (number > 0) {
// // //     alert(1);
// // // } else if (number < 0) {
// // //     alert(-1);
// // // } else {
// // //     alert(0);
// // // }
// // // alert(message);

// // // let age = prompt

// // // let age = prompt('Age?', '18');
// // // if (age < 3) {
// // //     message = 'Hello kido!';
// // // } else if (age < 100) {
// // //     message = 'Hello oldi!';
// // // } else {
// // //     message = 'perfect';
// // // }
// // // alert(message);

// // // let result;
// // // result (a + b < 4) ?  "malo" :  "mnogo";

// // // let message = (login == 'Sotrudnik') ? 'privet':
// // // (login == 'Director') ? 'Hello':
// // // (login == '') ? 'No login':'';


// // // let hour = 12;
// // // let isWeekend = true;
// // // if (hour < 10 || hour > 18 || isWeekend) {
// // //     alert('office is closed');
// // // }

// // // let x = 1;
// // // (x > 4) && alert('Greater than zero!');

// // // let age = prompt('How old are you?', '');
// // // if (age < 14) {
// // //     alert("Its only for teens, sorry");
// // // } else if (age > 90) {
// // //     alert("You are smart already!")
// // // } else {
// // //     alert("you are in the right place!");
// // //     alert('congrats');
// // // }

// // // let age = 10;
// // // if (age < 14 || age > 90) {
// // //     alert("not!");

// // // };

// // // let age = 10;
// // // if (age > !14 || age < !90) {
// // //     alert("you are !");
// // // };

// // // let signIn = prompt('Who is there?', '');

// // // if (signIn == 'Admin') {
// // //     let password = prompt('Please enter password', '');
// // //     if (password == "IamBoss") {
// // //         alert('Hello Boss')
// // //     } else if (password == null || password == '') {
// // //         alert("Canceled")
// // //     } else {
// // //         alert(password == 'Wrong Password')
// // //         alert('Try again')
// // //     }
// // // } else if (signIn == null || signIn == '') {
// // //     alert('Sorry, It was canceled')
// // // } else {
// // //     alert("I don not know")
// // // };

// // // if while
// // // for (let i = 2; i <= 10; i++) {
// // //     if (i % 2 == 0);
// // //     alert(i);
// // // }

// // // let i = 0;
// // // while (i < 3) {
// // //     alert(`number ${i}!`);
// // //     i++;
// // // }


// // // let num;
// // // do {
// // //     num = prompt('Please enter number more than 100', '');
// // // } while (num <= 100 && num);

// // // let n = 10;

// // // for (let i = 2; i = < n; i++);

// // // let n = 15;
// // // nextPrime:
// // //     for (let i = 2; i <= n; i++) {
// // //         for (let j = 2; j < i; j++) {
// // //             if (i % j == 0) continue nextPrime;
// // //         }
// // //         alert(i);
// // //     }

// // // for (let i = 0; i < 10; i++) {

// // //     // если true, пропустить оставшуюся часть тела цикла
// // //     // if (i % 2 == 0) continue;

// // //     alert(i); // 1, затем 3, 5, 7, 9
// // // }

// // // let browser = prompt('What is your browser', '');

// // // // if (browser == 'Edge') {
// // // //     alert(' You have got the Edge! ')
// // // // } else if (browser == 'Chrome' ||
// // // //     browser == 'Firefox' ||
// // // //     browser == 'Safari' ||
// // // //     browser == 'Opera') {
// // // //     alert('Okay we support these browsers too')
// // // // } else {
// // // //     alert('We hope this page look well')
// // // // };


// // // // const number = +prompt('Please enter numbers between 0 and 3', '');
// // // // switch (number) {
// // // //     case 0:
// // // //         alert(' You entered number 0!')
// // // //         break;
// // // //     case 1:
// // // //         alert(' You entered number 1!')
// // // //         break;
// // // //     case 2:
// // // //     case 3:
// // // //         alert(' You entered number 2 and 3!')
// // // //         break;
// // // //     default:
// // // //         alert('Incorect number')
// // // // }

// // // // let drawClient = "flower";

// // // // function showMessage() {
// // // //     drawClient = "cat";

// // // //     let message = 'Beatiful,' + drawClient;
// // // //     alert(message);
// // // // }
// // // // alert(drawClient);

// // // // showMessage();

// // // // alert(drawClient);

// // // // let drawClient = "flower";

// // // // function showMessage() {
// // // //     drawClient = "cat";

// // // //     let message = 'Beatiful,' + drawClient;
// // // //     alert(message);
// // // // }
// // // // helo wo
// // // // showMessage();

// // // // alert(drawClient);

// // // // function checkAge(age) {
// // // //     return (age > 18) ? true : confirm('Parents agreed');
// // // // }

// // // // function checkAge(age) {
// // // //     return (age > 18) || confirm('Parents agreed')

// // // // function calcMin(min)

// // // // function min(a, b) {
// // // //     let min = prompt('oOw mich you want', '');

// // // //     if (a < b) {
// // // //         return a;
// // // //     } else {
// // // //         return b;

// // // //     }
// // // // }
// // // // let result = min(1, 3);
// // // let num = 20;

// // // function showFirstMessage(text) {
// // //     alert(text);
// // //     num = 10;
// // // }
// // // // showFirstMessage('tt');
// // // console.log(num);

// // // // calculator
// // // function calc(a, b) {
// // //     return (a + b);
// // // }
// // // console.log(calc(3, 3));

// // // let user = {};
// // // user.name = "John";
// // // user.surname = "Smith";
// // // user.name = "Pete";
// // // // delete user.name;
// // // console.log(user)
// // // function isEmpty(obj) {
// // //     for (let key in obj) {
// // //         return false;
// // //     }
// // //     return true;
// // // }




// // // let key = "status";
// // // console.log(userInfo[key]);

// // // function with object
// // function signNewUser(name, password) {
// //     return {
// //         name,
// //         password
// //     };
// // }
// // let user1 = signNewUser('Jalil', 123);
// // let user2 = signNewUser('Zara', 'abc');
// // console.log(user1.name);
// // console.log(user2.name);
// // // end

// // let user = {};
// // user.name = "John";
// // user.surname = "Smith";
// // user.name = "Piter";
// // console.log(user);





// // let menu = {
// //     width: 200,
// //     height: 300,
// //     title: "My menu",
// // }

// // function multiplyNumeric(menu) {
// //     for (let key in menu) {
// //         if (typeof menu[key] == 'number') {
// //             menu[key] *= 2;
// //         }
// //     }
// // }

// // multiplyNumeric(menu);
// // console.log(menu);

// //for (massive)_________________________________________________________________
// // let workers = ['Anna', 'Anne', 'Diana', 'Gilbert'];
// // workers.shift();
// // for (let i = 0; i < workers.length; i++)
// //     console.log(workers[i]);


// // for of (massive)_________________________________________________________________
// // let workers = ['Anna', 'Anne', 'Diana', 'Gilbert'];
// // for (let worker of workers) {
// //     alert(worker);
// // }

// // for in __________________________________________________________________________
// // let workers = ['Anna', 'Anne', 'Diana', 'Gilbert'];
// // for (let key in workers) {
// //     alert(workers[key]);
// // };


// // let arr = ["Яблоко", "Апельсин", "Груша"];

// // for (let key in arr) {
// //     alert(arr[key]); // Яблоко, Апельсин, Груша
// // };

// // let styles = ['jazz', 'blues'];
// // styles.push('Рок-н-ролл');
// // styles.shift();
// // styles.unshift('Rep', 'Reggy');

// // console.log(styles);


// // let soldier = {
// //     health: 100,
// //     armor: 200
// // };

// // let john = {
// //     health: 500
// // };
// // john.__proto__ = soldier;

// // console.log(john.armor);


// // function User(name) {
// //     this.name = name;
// //     this.isAdmin = false;

// // }

// // let user = new User("Вася");
// // let userplus = new User("Lena");
// // console.log(userplus.name); // Вася
// // console.log(user.isAdmin); // false


// // function A(name) {
// //     this.name = name;
// // }

// // function B(surname) {
// //     this.surname = surname;
// // }

// // let a = new A('dima');
// // let b = new B('Vasya');

// // console.log(b == a); // true

// // function User(name) {
// //     this.name = name;
// //     this.isAdmin = false;
// // }

// // let user = new User("Вася");

// // alert(user.name); // Вася
// // alert(user.isAdmin); // false


// // let vasya = {};

// // function A() { return vasya; }

// // function B() { return vasya; }

// // console.log(new A() == new B());


// // let obj = {};

// // function A() { return obj; }

// // function B() { return obj; }

// // console.log(new A() == new B()); // true


// function Read(a, b) {
//     let a =
//         let b = +prompt('please second sum', '');

// }

// // calculator = function read();
// // let read = new Read();



// // read();


// // function calc(a, b) {
// //     // //     return (a + b);

// alert('I java script')
// let name = 'john';
// let admin;
// admin = name;

// alert(admin);

// let newUser = prompt('Whats your name?');
// alert(newUser);

// let ask = prompt('what is official name of Javascript', '');
// if (ask == 'ECMAScript') {
//     alert('true')
// } else {
//     alert('false')
// };

// let number = prompt('what is your number', '');
// if (number > 1) {
//     alert('number is more than 1');
// } else if (number < -1) {
//     alert('number is less than 0')
// } else {
//     alert('it is 0')
// };


// let result = (a + b < 4) ? "little" : "A lot";
// let message = prompt('Who is here?', '');
// login = message;
// message = (login == 'coworker') ? alert('Hello') :
//     (login == "director") ? "Good day" : (login == " ") ? 'no login' : " ";

// let age = prompt('How od are you?', '');
// if (age != > 14) {
//     alert('you are so yong');
// } else if (age != < 90) {
//     alert('you are a genious');
// } else {
//     alert('you are in the right place')
// };
// let age;
// if (age < 14 || > 90);
// if (!(age >= 14 && < 90)); 

// let number;
// do {
//     number = prompt('add nuber more than 100');
// } while (number <= 100 && number);

// let color;
// do {
//     color = prompt('what color would you like?');
// } while (color == 'black', color == 'blue',
//     color == 'red');

// let browser = prompt('What is your browser?');
// if (browser == 'Edge') {
//     alert('you have got Edge');
// } else if (browser == 'Firefox' ||
//     browser == 'Chrome' ||
//     browser == 'Safari' ||
//     browser == 'Opera') {
//     alert('Ok we support these browsers');
// } else {
//     alert('We hope these page looks');
// };
//////////////lesson-13
// let number = prompt("please enter number betweet 0 and 3");

// switch (number) {
//     case "0":
//         alert('You added number 0');
//         break;
//     case "1":
//         alert('you added number 1');
//     case "2":
//     case "3":
//         alert('you added number 2 and 3');

// };

// function checkAge(age) {
//     return (age > 18) ?
//         true : confirm('Parents agreed');
// }

// function checkAge(age) {
//     return (age > 18) ||
//      confirm('Parents agreed');
// }


// function invitePeople(ppl) {
//     return (ppl > 50)? true : confirm ("its not enough yet");
// }

// function invitePeople(ppl) {
//     return (ppl > 50)|| : confirm "its not enough yet"
// }




// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }




// function findCheaper(a, b) {

//     if (a < b) {
//         console.log('a cheaper');
//     } else {
//         console.log('b cheaper');
//     }
// };
// let a = 100;
// let b = 200;
// findCheaper(a, b);

// function pow(x, n) {
//     let result = x;
//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// let x = prompt('x?', '');
// let n = prompt('n?', '');

// if (n < 1) {
//     alert(`Your ${n} is not supported, please add number started 1`);
// } else {
//     alert(pow(x, n));
// };
////////////////////////////// Object
// let user = {};
// user.name ="john",
// user.surname = "Smith" ,

// user.name = 'Pete',
// delete user.name;

// console.log(user.name);



// function isEmpty(schedule) {};
// let schedule = {};
// for (let key in schedule);
// console.log(isEmpty(schedule));


// let salaries = {
//     John: 100,
//     Smith: 160,
//     Anne: 130
// };
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }

// console.log(sum);

// function multiplyNumeric(menu) {}
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// }
// menu.width = 400;
// menu.height = 600;

// multiplyNumeric(menu);
// console.log(typeof(menu));


// function multiplyNumeric(menu) {
//     for (let key in menu) {
//         if (typeof menu[key] == 'number') {
//             menu[key] *= 2;
//         }
//     }
// }

// multiplyNumeric(menu);
// console.log(menu);


// function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }
//   multiplyNumeric(obj);
// console.log(obj[key]);


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
//   let result = multiplyNumeric(menu);
//   assert.equal(menu.width, 400);
//   assert.equal(menu.height, 600);
//   assert.equal(menu.title, "My menu");

//////////////////////////////////////////Методы объекта, "this"

// let user = {
//     name: 'Jalil',
//     surname: 'Ablassanov',
//     sayHi() {
//         alert(this.name);
//     }
// };
// user.sayHi();

// let user = {
//   name: "Джон",
//   age: 30,

//   sayHi() {
//     // this - это "текущий объект"
//     alert(this.name);
//   }

// };

// user.sayHi(); // Джон



// function Sign(name) {
//     this.name = name;
//     this.admin = false;
// }

// let user = new Sign('Vaasya');
// console.log(user['name']);



////////////////////////
// let ask = prompt('Whats is your name?', '');


// console.log(`Hello ${ask}`);

////////////////////////

var person = 'Mike';
var age = 28;

function myTag(strings, personExp, ageExp) {
    var str0 = strings[0]; // "That "
    var str1 = strings[1]; // " is a "

    // Технически, в конце итогового выражения
    // (в нашем примере) есть ещё одна строка,
    // но она пустая (""), так что пропустим её.
    // var str2 = strings[2];

    var ageStr;
    if (ageExp > 99) {
        ageStr = 'centenarian';
    } else {
        ageStr = 'youngster';
    }

    // Мы даже можем вернуть строку, построенную другим шаблонным литералом
    return `${str0}${personExp}${str1}${ageStr}`;
}

var output = myTag `That ${ person } is a ${ age }`;

console.log(output);
// That Mike is a youngster