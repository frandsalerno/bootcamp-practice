var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods
var food1 = document.createElement('li');
var food2 = document.createElement('li');
var food3 = document.createElement('li');
var food4 = document.createElement('li');

food1.innerText = 'Pizza 🍕'
food2.innerText = 'Pasta 🍝'
food3.innerText = 'Fries 🍟'
food4.innerText = 'Bacon 🥓'

listEl.appendChild(food1);
listEl.appendChild(food2);
listEl.appendChild(food3);
listEl.appendChild(food4);

listEl.setAttribute("style", "background: #333; padding:20px")

var items = document.querySelectorAll('li');

for (var li of items){
    // console.log(li);
    li.setAttribute("style","color: #FFF; padding:5px; margin-left:35px");
}

food1.setAttribute("style", "background:#BBB");
food2.setAttribute("style", "background:#CCC");
food3.setAttribute("style", "background:#DDD");
food4.setAttribute("style", "background:#EEE");

