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

    if (!matches.length){
        noMatch();
    }

    for (var matchObject of matches){
        cardWrapper.insertAdjacentHTML("beforeend",`
        <div class="movie-card" style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${matchObject.movie_image});">
        <h3>${matchObject.title}</h3>
        <p>${matchObject.description}</p>
        <a href="${matchObject.imdb_link}" target="_blank">View More Info Here</a>
        </div>`)
    }
}


function fetchMovies(event){
    var keyCode = event.keyCode;
    var searchText = searchInput.value.toLowerCase().trim();
    if (keyCode === 13 && searchText){
        var matches = []
        
        fetch(`https://www.omdbapi.com/?apikey=4bc5592f&t=${searchText}`).then(function(responseObj){
            var dataPromise = responseObj.json();
            dataPromise.then(function(data){
                console.log(data);
            })
        });

        displayMatches(matches);

    }
}

function init(){
    searchInput.addEventListener('keydown', fetchMovies)
}

init();