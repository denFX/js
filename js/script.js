//const answer = [];

//answer [0] = prompt("Wie alt bist du?")
//answer [1] = prompt("Name?")
//answer [2] = prompt("Nachname?")
//answer [3] = prompt("Wie lang is bei dir?", "20")

//console.log (answer[1]);

//<h2>Hello word!</h2>

let numberOfFims = +prompt ("How much vovies du you watcht?", " ");

const personalMovieDB = {
count: numberOfFims,
movies: {},
actors: {},
genres: [],
private: false
};

const   a = prompt("Last Film", ""),
        b = prompt("woh well", ""),
        c = prompt("last film", ""),
        d = prompt("how well", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);


const aa = 50;

if (aa <= 40) {
    console.log("ist zu wenig!");
} else if (aa >= 50) {
    console.log("ist zu viel");
}
else 
console.log("passt!");

const num = 54;

(num == "50") ?  console.log("ja"): console.log("nein");


switch (num) {
    case 50:
        console.log("nein");
        break;
    case 51:
        console.log("nein");
        break;
    case 52:
        console.log("ja");
        break;
    default:
        console.log("Perfeckt");
        break;
}

