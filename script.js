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

//series of prompts





// function askYesNoQuestion(question) {
//   let answer = prompt(question + " (yes or no)");
//   if (answer.toLowerCase() === "yes") {
//     return true;
//   } else if (answer.toLowerCase() === "no") {
//     return false;
//   } else {
//     // If the user enters an invalid response, prompt again
//     alert("Please enter 'yes' or 'no'");
//     return askYesNoQuestion(question);
//   }
// }


// Function to prompt user for password options
function getPasswordOptions() {

let passwordLength = window.prompt("How many characters would you like? (8-128)")
if (passwordLength <8 || passwordLength >128){
  alert("Please enter a number between 8 and 128.  SELECT GENERATE A PASSWORD TO START AGAIN")
return
}

// var x=null
// if(x==null){
//   alert("No Text Entered - Please type Yes or No  SELECT GENERATE A PASSWORD TO START AGAIN");

// }
  

let passwordcase = window.prompt("Would you like to include uppercase? (Yes/No)")


 // Include Numbers?
let passwordnum = window.prompt("Would you like to include numbers? (Yes/No)")


   // special characters
let passwordspecial = window.prompt("Would you like to include special characters? (Yes/No)")
}




// array of available charactters


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
  getPasswordOptions ()
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
  

}

// Add event listener to generate button - reference to button - will use write function - wiill save password to this var. will write password to page
generateBtn.addEventListener('click', writePassword);


//function
//return
//anything inside {} is block of code


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