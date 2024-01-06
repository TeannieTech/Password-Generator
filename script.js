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






// Function to prompt user for password options

function getPasswordOptions() {

  var passwordLength = window.prompt("How many characters would you like? (8-128)")
  if (passwordLength <8 || passwordLength >128){
    alert("Please enter a number between 8 and 128.  SELECT GENERATE A PASSWORD TO START AGAIN");
  } 
  else {
  alert("Great! You've selected a valid password length.");
  }
  

   // Include uppercase?
  var passwordCase = confirm("Would you like to include uppercase? (Select 'OK' for Yes / Select 'Cancel' for No)");
  if (passwordCase == true) {
    alert("Great, I will include uppercase characters!");
  } else {
    alert("OK, I won't include uppercase characters");
  }



   // Include Numbers?
  var passwordnum = confirm("Would you like to include numbers? (Select 'OK' for Yes / Select 'Cancel' for No)")
  if (passwordnum == true) {
    alert("Great, I will include numbers!");
  } else {
    alert("OK, I won't include numbers");
  }

  
     // special characters
  var passwordspecial = confirm("Would you like to include special characters? (Select 'OK' for Yes / Select 'Cancel' for No)")
  if (passwordspecial == true) {
    alert("Great, I will include special characters!");
  } else {
    alert("OK, I won't include special characters");
  }

}


// array of available charactters


// Function for getting a random element from an array
function getRandom(arr) {



}

// Function to ge-                nerate password with user input
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


// * Length of password - - depends on what they select - use prompt to save number they select
//   * At least 8 characters but no more than 128.
// * Character types
//   * Lowercase
//   * Uppercase
//   * Numeric
//   * Special characters ($@%&*, etc) - 
// * Code should validate for each input and at least one character type should be selected
// * Once prompts are answered then the password should be generated and displayed in an alert or written to the page


//tutor make go back to same question