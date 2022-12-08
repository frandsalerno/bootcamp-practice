// $( function() {
//     var availableTags = [
//       "ActionScript",
//       "AppleScript",
//       "Asp",
//       "BASIC",
//       "C",
//       "C++",
//       "Clojure",
//       "COBOL",
//       "ColdFusion",
//       "Erlang",
//       "Fortran",
//       "Groovy",
//       "Haskell",
//       "Java",
//       "JavaScript",
//       "Lisp",
//       "Perl",
//       "PHP",
//       "Python",
//       "Ruby",
//       "Scala",
//       "Scheme"
//     ];
//     $( "#fruit-input" ).autocomplete({
//       source: availableTags
//     });
//   } );

// var availableTags = [
//     'orange',
//     'apple',
//     'grape',
//     'banana',
//     'kiwi',
//     'anana'
// ];

// $('#fruit-input').autocomplete({
//     source: availableTags
// });

//vanilla js IIFE 

// (function(){
//     console.log('IIFE called');
// })();

// var date = new Date();

// console.log(date);


var date = moment();

var previousDate = moment('18/12/1985', 'DD/MM/YYYY')

var timeDisplay = document.querySelector('#timeDisplay');

timeDisplay.innerText = date.format('MMMM Do YYYY hh mm ss');

// console.log(date.format('MMMM Do YYYY hh mm ss a'));

// console.log(previousDate.format('MMMM Do YYYY hh'));

setInterval(function(){
    date = moment();
    timeDisplay.innerText = date.format('MMMM Do YYYY hh mm ss');
},1000)
