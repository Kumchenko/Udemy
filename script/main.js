"use strict";

// Main process

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        do {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        } while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count) || personalMovieDB.count < 0);
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", "");
            const b = +prompt("Насколько оцените его?", "");
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50 && b > 0) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    
    detectPersonalLevel: () => {
        if (personalMovieDB.count >= 0 && personalMovieDB.count <= 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('error');
        } 
    },
    
    showMyDB: () => {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        } else {
            console.log('Access denied. DB Closed');
        }
    },

    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    
    writeYourGenres: () => {
        for (let i = 0; i < 3; i++) {
            let answer = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
        
            if (answer != null && answer != '') {
                personalMovieDB.genres[i] = answer;
            } else {
                i--;
            }
        }
        
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres(personalMovieDB);
personalMovieDB.showMyDB(personalMovieDB);


