// Assignment code here
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9']; 
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(',')'];

var generate = '';
var generateIndex = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword () {
var length = prompt('Choose a length from 8 to 128.', '36');
length = Number.parseInt(length);
if (Number.isNaN(length)) {
  alert('Error, entry is not a number!  Please choose a length from 8 to 128...');
  return '';
}
if (length < 8 || length > 128) {
  alert('Error!  Please choose a length from 8 to 128...');
  return '';
}


var promptLowerCase = prompt('Would you like lowercase letters in your password?', 'yes');
if (promptLowerCase === 'yes') {
  promptLowerCase = true;
} else if (promptLowerCase === 'no') {
  promptLowerCase = false;
} else {
  alert('Error!  Please choose a valid entry, yes or no.')
  return '';
}

var promptUpperCase = prompt("Would you like uppercase letters in your password?", 'yes');
if (promptUpperCase === 'yes') {
  promptUpperCase = true;
} else if (promptUpperCase === 'no') {
  promptUpperCase = false;
} else {
  alert('Error!  Please choose a valid entry, yes or no.')
  return '';
}

var promptNumbers = prompt("Would you like numbers in your password?", 'yes');
if (promptNumbers === 'yes') {
  promptNumbers = true;
} else if (promptNumbers === 'no') {
  promptNumbers = false;
} else {
  alert('Error!  Please choose a valid entry, yes or no.')
  return '';
}

var promptSymbols = prompt("Would you like special characters in your password?", 'yes');
if (promptSymbols === 'yes') {
  promptSymbols = true;
} else if (promptSymbols === 'no') {
  promptSymbols = false;
} else {
  alert('Error!  Please choose a valid entry, yes or no.')
  return '';
}


var allParameters = [promptLowerCase, promptUpperCase, promptNumbers, promptSymbols];
if (allParameters.includes(true)) {
} else {
  alert('One or more parameters must be met, please try again!');
  return '';
} 

debugger;

if (promptLowerCase) {
    var lowerCaseIndex = Math.floor(Math.random() * lowerCase.length);
    generateIndex = generateIndex + lowerCase[lowerCaseIndex];
  }

if (promptUpperCase) {
    var upperCaseIndex = Math.floor(Math.random() * upperCase.length);
    generateIndex = generateIndex + upperCase[upperCaseIndex];
  }

if (promptNumbers) {
    var numbersIndex = Math.floor(Math.random() * numbers.length);
    generateIndex = generateIndex + numbers[numbersIndex];
  }

if (promptSymbols) {
    var symbolsIndex = Math.floor(Math.random() * symbols.length);
    generateIndex = generateIndex + symbols[symbolsIndex];
  }


for ( var i = 0; i < length; i++) {
  var paraIndex = Math.floor(Math.random() * generateIndex.length);
  generate = generate + generateIndex[paraIndex];
}


return generate;

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
