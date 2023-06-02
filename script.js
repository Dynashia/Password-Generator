// Assignment code here
//Password Characters
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "=", "?", ";", ":", "/", "[", "]", ]


//Prompt Questions 
var passwordLength = window.prompt ("Password Length, Has to be 8 to 128 characters");
if (passwordLength  < 8 || passwordLength > 128 || passwordLength === null ){  
}
  console.log(passwordLength);


let lowerCase = window.prompt ("Would You Like Lower Case Letters?");
console.log ("lowerCase!!");
if (lowerCase === true) {
}else{
  console.log("no lowercase");
}
 
let upperCase = window.prompt ("Would You Like Upper Case Letters?");
console.log ("upperCase!!");
if (upperCase === true) { 
}else{
  console.log("no uppercase");
} 

let someNumbers = window.prompt ("Would You Like Numbers?");
console.log ("numbers!!");
if (upperCase === true) {
}else{
 console.log("no numbers");
}
 let specialCharacterss = window.prompt ("Would You Like Special Characters?")
console.log ("specialCharacters!!");
if (specialCharacters === true){
}else{
  console.log("no specialCharacters");
}


var password = "";
  for (let i = 0; i < length; i++) {
    var choice = Math.floor(Math.random() * pool.length);

  }
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);