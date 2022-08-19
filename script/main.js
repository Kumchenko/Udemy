"use strict";

// Variables

let numberOfFilms;

// Main process

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

rememberMyFilms();
detectPersonalLevel();
writeYourGenres(personalMovieDB);
showMyDB(personalMovieDB);



// Functions

function start() {
    do {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    } while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms < 0);
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", "");
        const b = +prompt("Насколько оцените его?", "");
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b > 0) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count >= 0 && personalMovieDB.count <= 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('error');
    } 
}

function showMyDB(hiddenDB) {
    if (!hiddenDB.privat) {
        console.log(hiddenDB);
    }
}

function writeYourGenres(db) {
    for (let i = 0; i < 3; i++) {
        db.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
    }
}
