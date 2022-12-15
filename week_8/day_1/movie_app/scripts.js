//API key http://www.omdbapi.com/?i=tt3896198&apikey=4bc5592f

// http://www.omdbapi.com/?apikey=4bc5592f


// giphy API LHe9yDHuczqtPqiwKb2W2h9egFk5cYMh

var searchInput = document.querySelector('.search');
var cardWrapper = document.querySelector('main');

function noMatch(){
    cardWrapper.innerHTML = '<p class="text-center no-search">No results found</p>';
}

function displayMatches(matches){
    cardWrapper.innerHTML = '';

    if (!matches){
        noMatch();
    }else{
        for (var matchObject of matches){
            cardWrapper.insertAdjacentHTML("beforeend",`
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
    var searchText = searchInput.value.toLowerCase().trim();
    if (keyCode === 13 && searchText){

        var responsePromise = fetch(`https://www.omdbapi.com/?apikey=4bc5592f&s=${searchText}`);

        function handleResponse(responseObj){
            return responseObj.json();
        }

        responsePromise
            .then(handleResponse)
            .then(function(data){
                console.log(data.Search);
                displayMatches(data.Search);
                searchInput.value = '';
            })

    }
}

function init(){
    searchInput.addEventListener('keydown', fetchMovies)
}

init();