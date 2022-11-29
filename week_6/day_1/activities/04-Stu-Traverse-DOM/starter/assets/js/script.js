// // Access element using id
// var articlesDiv = document.getElementById('articles');
// var headerDiv = document.getElementById('header');

// // Change style by accessing style object's properties
// articlesDiv.children[2].style.fontSize = '50px';
// headerDiv.style.color = 'white';


var header = document.getElementById('header');
// console.log(header);
header.children[0].style.color =  '#FFF';

var article = document.getElementById('articles');
// console.log(article.children[0].children[1]);
article.children[0].children[1].style.fontSize = '50px';