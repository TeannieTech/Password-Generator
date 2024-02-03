// Array of special characters to be included in password
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];


// Function to prompt user for password options

function getPasswordOptions() {
  var lengthArray = [];

  var passwordLength = window.prompt(
    "How many characters would you like? (8-128)"
  );
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert(
      "Please enter a number between 8 and 128"
    );
    return getPasswordOptions()
  } else {
    alert("Great! You've selected a valid password length.");
  }

  // Include uppercase?
  var passwordCase = confirm(
    "Would you like to include uppercase? (Select 'OK' for Yes / 'Cancel' for No)"
  );
  if (passwordCase == true) {
    alert("Great, I will include uppercase characters!");
    lengthArray = lengthArray.concat(upperCasedCharacters);
  } else {
    alert("OK, I won't include uppercase characters");
  }

  // Include lowercase?
  var lowerCase = confirm(
    "Would you like to include lowercase? (Select 'OK' for Yes / 'Cancel' for No)"
  );
  if (lowerCase == true) {
    alert("Great, I will include lowercase characters!");
    lengthArray = lengthArray.concat(lowerCasedCharacters);
  } else {
    alert("OK, I won't include lowercase characters");
  }

  // Include Numbers?
  var passwordnum = confirm(
    "Would you like to include numbers? (Select 'OK' for Yes / 'Cancel' for No)"
  );
  if (passwordnum == true) {
    alert("Great, I will include numbers!");
    lengthArray = lengthArray.concat(numericCharacters);
  } else {
    alert("OK, I won't include numbers");
  }

  // include special characters?
  var passwordspecial = confirm(
    "Would you like to include special characters? (Select 'OK' for Yes / 'Cancel' for No)"
  );
  if (passwordspecial == true) {
    alert("Great, I will include special characters!");
    lengthArray = lengthArray.concat(specialCharacters);
  } else {
    alert("OK, I won't include special characters");
  }

if (!passwordspecial && !passwordnum && !lowerCase && !passwordCase) {

  alert ("You must select at least one character type")
  return getPasswordOptions()

}

  console.log(lengthArray);
  return {
    passwordLength, 
    lengthArray
  }
}



// Function for getting a random element from an array
function getRandom(arr) {
  const randomElement =arr[Math.floor(Math.random() * arr.length)];

  console.log(randomElement);
  return randomElement


}

// Function to generate password with user input
function generatePassword() {
var userChoices = getPasswordOptions ()
console.log (userChoices)
var randomPassword = ""
for(var i=0; i<userChoices.passwordLength;i++) {
  randomPassword += getRandom(userChoices.lengthArray)
}
console.log(randomPassword)
return randomPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = "YOUR PASSWORD IS: " + password;

}

generateBtn.addEventListener("click", writePassword);

