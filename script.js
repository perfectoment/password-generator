// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var numberCase = "1234567890".split("")
var specialCase = "!@#$%^&*+?".split("")
var inputLength = 0;
var finalPassword =[];
var finalRandom =[];

// Write password to the #password input
 
function generatePassword() {
  inputLength = prompt ("How long would you like your password?");
  inputLength=parseInt(inputLength);
  if(inputLength < 8 || inputLength > 128 || isNaN(inputLength) ) {
    inputLength = 0
    alert("That is not a valid choice"); 
       return;  
  }
  
  var lowerCaseAnswer=confirm("Would you like to use lowercase letters?");
    if(lowerCaseAnswer){
      finalPassword=finalPassword.concat(lowerCase);
      var lowerRand = Math.floor(Math.random() * lowerCase.length);
        finalRandom += lowerCase[lowerRand];
  }
     
  var upperCaseAnswer=confirm ("would you like to use upper case letters?");
    if(upperCaseAnswer){
      finalPassword=finalPassword.concat(upperCase);
      var upperRand = Math.floor(Math.random() * upperCase.length);
        finalRandom += upperCase[upperRand];
  }
     
  var numberCaseAnswer=confirm("would you like to use numbers?");
    if(numberCaseAnswer){
      finalPassword=finalPassword.concat(numberCase);
      var numberRand = Math.floor(Math.random() * numberCase.length);
        finalRandom += numberCase[numberRand];
  }   
     
  var specialCaseAnswer=confirm("would you like to use special characters?");
    if(specialCaseAnswer){
      finalPassword=finalPassword.concat(specialCase);
        var specialRand = Math.floor(Math.random() * specialCase.length);
          finalRandom += specialCase[specialRand];  
  }
    

var passwordOutput = ""
passwordOutput += passwordOutput.concat(finalRandom)
for(i=0; i < inputLength-finalRandom.length; i++) {
  var randomizer = Math.floor(Math.random() * finalPassword.length);
    passwordOutput += finalPassword[randomizer];
  }
  return passwordOutput;
}
function writePassword() {    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}
  



// Add event listener to generate button
// generateBtn.addEventListener("click", playersQuestions);
generateBtn.addEventListener("click", writePassword);