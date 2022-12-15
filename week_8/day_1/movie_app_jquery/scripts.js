// giphy API LHe9yDHuczqtPqiwKb2W2h9egFk5cYMh

var searchInput = $('.search');
var cardWrapper = $('main');

function noMatch(){
    cardWrapper.html('<p class="text-center no-search">No results found</p>');
}

function displayMatches(matches){
    cardWrapper.html('');

    if (!matches){
        noMatch();
    }else{
        for (var matchObject of matches){
            cardWrapper.append(`
            <div class="movie-card" style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${matchObject.Poster});">
            <h3>${matchObject.Title}</h3>
            <p>Release year ${matchObject.Year}</p>
            <a href="https://www.imdb.com/title/${matchObject.imdbID}" target="_blank">View More Info Here</a>
            </div>`)
        }
    }
}


function fetchMovies(event){
    var keyCode = event.keyCode;
    var searchText = searchInput.val().trim();

    if (keyCode === 13 && searchText){

        $.get(`https://www.omdbapi.com/?apikey=4bc5592f&s=${searchText}`)
        .then(function(data){
            displayMatches(data.Search);
            searchInput.val('');
        });

    }
}

function init(){
    searchInput.keydown(fetchMovies)
}

init();