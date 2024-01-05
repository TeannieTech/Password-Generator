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

//series of prompts - length, they enter a number - create from their number
//create window prompt box to ask the questions - GOOGLE - save as var


let passwordLength = window.prompt("How many characters would you like (8-128)")
console.log(passwordLength)

let passwordcase = window.prompt("Would you like to include uppercase (yes/No)")
console.log(passwordcase)

let passwordnum = window.prompt("Would you like to include numbers (yes/No)")
console.log(passwordnum)

let passwordspecial = window.prompt("Would you like to include special characters (yes/No)")
console.log(passwordspecial)

// Function to prompt user for password options
function getPasswordOptions() {

  //window prompt

}

// Function for getting a random element from an array
function getRandom(arr) {
// use array list at top

}

// Function to generate password with user input
function generatePassword() {

  //could be if statement (lower case) all possible condirions with 4 chatcer types - or switch statements 


}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
//still to learn - GOOGLE - access to button that is clicked. when clicked... (call) 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button - reference to button - will use write function - wiill save password to this var. will write password to page
generateBtn.addEventListener('click', writePassword);


//function
//return

// how long 
//uper/lower
//special char yes/no


// * Generate a password when the button is clicked
// * Present a series of prompts for password criteria - window
// * Length of password - - depends on what they select - use prompt to save number they select
//   * At least 8 characters but no more than 128.
// * Character types
//   * Lowercase
//   * Uppercase
//   * Numeric
//   * Special characters ($@%&*, etc) - 
// * Code should validate for each input and at least one character type should be selected
// * Once prompts are answered then the password should be generated and displayed in an alert or written to the page