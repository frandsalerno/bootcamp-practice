/* <div class="movie-card">
<h3>Movie Title</h3>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, modi corporis. Quaerat, fugiat tempore. At praesentium culpa optio ipsam quidem corporis, modi necessitatibus perspiciatis omnis reprehenderit voluptatem, veritatis iste dolorem.</p>
<a href="#">View More Info Here</a>
</div> */

var searchInput = document.querySelector('.search');

var cardWrapper = document.querySelector('main');

function fetchMovies(event){
    var keyCode = event.keyCode;
    var searchText = searchInput.value;
    if (keyCode === 13 && searchText){
        console.log('it works');
    }
}

function init(){
    searchInput.addEventListener('keydown', fetchMovies)
}

init();