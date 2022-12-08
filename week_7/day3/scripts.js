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

var availableTags = [
    'orange',
    'apple',
    'grape',
    'banana',
    'kiwi',
    'anana'
];

$('#fruit-input').autocomplete({
    source: availableTags
});

//vanilla js IIFE 

// (function(){
//     console.log('IIFE called');
// })();

