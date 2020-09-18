// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var numberCase = "1234567890".split("")
var specialCase = "!@#$%^&*+?".split("")
var inputLength = ""

// Write password to the #password input
 
function playersAnswers() {
  inputLength = prompt("How long would you like your password?")
  if(inputLength < 8 || inputLength > 128)
    alert("That is not a valid choice")
  else()
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
