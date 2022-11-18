// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // using prompt() --> returns user input value as a string
  // confirm() --> returns a boolean value
  // use of character types - specChars, nums, LC, UC
  // validate that the user selected at least one character type
  // send user back to select again - can we call a function?
  // password length
  // validate At least 10 characters but no more than 64.
  // send user back again - can we call a function?
  // return true/selected character types & password length
  var passlenght = prompt('How many characteres do you want the password to be - Please choose a number between 10 and 64')
  if (passlenght > 64 || passlenght < 10){
    getPasswordOptions()
  }
  function getPrompts(){
    var passSC = confirm('Do you want to use special characters');
    var passNum = confirm('Do you want to use numbers');
    var passLC = confirm('Do you want to use lowercase characters');
    var passUC = confirm('Do you want to use uppercase characters');
    if (!passLC && !passNum && !passLC && !passUC){
      alert('You need to choose at least one option');
      getPrompts();
    }
  }
}


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  // var pass = 'Elmundo!'
  // return pass;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);