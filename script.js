// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var numberCase = "1234567890".split("")
var specialCase = "!@#$%^&*+?".split("")
var inputLength = 0;
var finalPassword =[];

// Write password to the #password input
 
function playersQuestions() {
  inputLength = prompt ("How long would you like your password?");
  if(inputLength < 8 || inputLength > 128) {
    alert("That is not a valid choice"); 
       return
    
  }
  
  
  var lowerCaseAnswer=confirm("Would you like to use lowercase letters?");
    if(lowerCaseAnswer){
      finalPassword.push.apply(finalPassword, lowerCase);
}
     
  var upperCaseAnswer=confirm ("would you like to use upper case letters?");
    if(upperCaseAnswer){
      finalPassword.push.apply(finalPassword, upperCase);
  }
     
  var numberCaseAnswer=confirm("would you like to use numbers?");
    if(numberCaseAnswer){
      finalPassword.push.apply(finalPassword, numberCase);
}
     
  var specialCaseAnswer=confirm("would you like to use special characters?");
    if(specialCaseAnswer){
      finalPassword.push.apply(finalPassword, specialCase);
  }


  //   if(lowerCaseAnswer){
  //     finalPassword.push.apply(finalPassword, lowerCase);
  // }
  //   else if(numberCaseAnswer){
  //     finalPassword.push.apply(finalPassword, numberCase);
  // }
  //   else if(upperCaseAnswer){
  //     finalPassword.push.apply(finalPassword, upperCase);
  //   }
  //   else if(specialCaseAnswer){
  //     finalPassword.push.apply(finalPassword, specialCase);
  //   }

      console.log(finalPassword);
  }
    
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }


function generatePassword(){
  var passwordOutput = ""

  for(i=0; i < inputLength; i++) {
    var randomizer = Math.floor(Math.random() * finalPassword.length);
    passwordOutput = passwordOutput + finalPassword[randomizer];
  }
  return passwordOutput;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", playersQuestions);
generateBtn.addEventListener("click", writePassword);