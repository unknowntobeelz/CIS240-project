
//Global Vars - Local vars are always better to use, but global vars are easier to code when you are new to JavaScript
var artistUserName = new Array(); //List of the artists
var artStyle = new Array(); //List of the art styles
var artPopularity = 0; //Keeps track of the current movie by assigning it a unique ID(Also Element Number in the array)

//I use this one function to control the entire page.
//This is the only function that is called by my HTML page.
//Similar to how I write class files, it is good practice
//to have only one main function that calls the others
//on a page.
//You can follow the flow of the entire JS page by reading this one
//function. I was very verbose in the function names, so it should
//be like reading a story.
/*
function RedBrain() {

    AddNewReturnedMovieToRedboxReturnedMoviesUnSortedList();
    AddReturnedMovieToRedboxAvailableMoviesForRentSortedList(returnedMoviesUnSortedList[movieID]);
    DisplayRedboxReturnedMoviesUnSortedList();
    DisplayRedboxAvailableMoviesForRentSortedList();
    movieID++;
}
*/

function sortByArtist(){


    artistUserName[artPopularity] = document.getElementById("textBoxMovieTitleToAdd").value.toUpperCase();
    //Alert I used for Debug
    //alert(returnedMoviesUnSortedList[movieID] + " Returned Movie to Redbox unsorted with a Movie ID of " + movieID);
    document.getElementById("textBoxMovieTitleToAdd").value = "";

}
function AddReturnedMovieToRedboxAvailableMoviesForRentSortedList(movieTitle){

    availableMoviesForRentSortedList[movieID] = movieTitle;
    //Alert I used for Debug
    //alert(availableMoviesForRentSortedList[movieID] + " Added to Redbox available movies sorted list with a Movie ID of " + movieID);
    availableMoviesForRentSortedList.sort();
}

function DisplayRedboxReturnedMoviesUnSortedList(){

    document.getElementById("returned").innerHTML = "Movies Returned to Hacked Redbox unsorted list";
    var movieList = "<hr/>";
    //Ye ole for loop to display movie list
    //also lots of concatenation going on.
    for (var movie=0; movie<returnedMoviesUnSortedList.length; movie++)
    {
        movieList += "Returned Movie:  " + returnedMoviesUnSortedList[movie] + "<br/>";
    }
    document.getElementById("unSortedList").innerHTML = movieList + "<hr/>";
}

function DisplayRedboxAvailableMoviesForRentSortedList(){

    document.getElementById("available").innerHTML = "Movies Available for Rent from Hacked Redbox sorted list";
    var movieList = "<hr/>";
    //Ye ole for loop to display movie list
    //also lots of concatenation going on.
    for (var movie=0; movie<availableMoviesForRentSortedList.length; movie++)
    {
        movieList += "Available Movie:  " + availableMoviesForRentSortedList[movie] + "<br/>";
    }
    document.getElementById("sortedList").innerHTML = movieList + "<hr/>";
}

//EOD
