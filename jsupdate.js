'use strict';

// let numberOfFilms = prompt("How many movies you already watched?", '');

let numberOfFilms;

function start() {
    numberOfFilms = prompt("How many movies you already watched?", '');

    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("How many movies you already watched?", '');

    }
}
start();

let pesonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('What is the latest movie you watched?', '');
        let b = prompt('What is your rate (when most likely 10 and least likely 1?', '');

        if ((a) != null && (b) != null && a != "" && b != "" && a.length < 50 && b.length < 50) {

            pesonalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('bad result');
            i--;
        }
    }
}
rememberMyFilms();

// Sample with while 
// let i = 0;
// while (i < 2) {
//     let a = prompt('What is the latest movie you watched?', '');
//     let b = prompt('What is your rate (when most likely 10 and least likely 1?', '');

//     if ((a) != null && (b) != null && a != "" && b != "" && a.length < 50 && b.length < 50) {

//         pesonalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('bad result');
//         i--;
//     }
//     i++
// };
// Sample with do {while}
// let i = 0;
// do {
//     let a = prompt('What is the latest movie you watched?', '');
//     let b = prompt('What is your rate (when most likely 10 and least likely 1?', '');

//     if ((a) != null && (b) != null && a != "" && b != "" && a.length < 50 && b.length < 50) {

//         pesonalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('bad result');
//         i--;
//     }
//     i++
// }
// while (i < 2);


function detectPersonalLevel() {
    if (pesonalMovieDB.count < 10) {
        alert('You watched a little movies!');
    } else if (pesonalMovieDB.count < 30) {
        alert('You are classical watcher!');
    } else if (pesonalMovieDB.count >= 30) {
        alert('You are cinemaperson');
    } else {
        alert("Some mistakes accured");
    }
}
detectPersonalLevel();

// my version 
// function showMyDB() {
//     if (pesonalMovieDB.privat == false) {
//         console.log(pesonalMovieDB)
//     }
// }
// showMyDB();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(pesonalMovieDB)
    }
}
showMyDB(pesonalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        pesonalMovieDB.genres[i - 1] = prompt(`Your favorite genre number ${i} ?`);

    }
}
writeYourGenres();
// console.log(pesonalMovieDB);