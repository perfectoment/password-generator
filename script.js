// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var numberCase = "1234567890".split("")
var specialCase = "!@#$%^&*+?".split("")
var inputLength = 0;
var lengthquestions ="0"

// Write password to the #password input
 
  function playersQuestions() {
    inputLength = prompt ("How long would you like your password?");
    if(inputLength < 8 || inputLength > 128){
      alert("That is not a valid choice"); {
        return
    
    }
    
  }
    var lowerCaseAnswer=confirm("Would you like to use lowercase letters?");

    var upperCaseAnswer=confirm ("would you like to use upper case letters?");

    var numberCaseAnswer=confirm("would you like to use numbers?");

    var specialCaseAnswer=confirm("would you like to use special characters?");
    

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", playersQuestions);
  // playersAnswers()
console.log(playersQuestions());