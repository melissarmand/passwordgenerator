// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Function to generate a random password length
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function to generate a password (using numbers and lowercase letters)
function genpass() { 
  var password= [];

    // password += Math.floor(Math.random()*9); // allows password to start with number 

  var passwordlength= getRandomInt(8, 12); // Tells us the password's length between 8 and 12 characters
  for (var i=0; i<passwordlength; i++) {
    password [i]= "0";
  }
  for (var i=0; i<passwordlength-1; i++){ // loop that tells you how many times to run 
   
      var c= Math.floor(Math.random()* 26); //26 for 26 letters of the alphabet
      password += String.fromCharCode(97 + c); // where c is 0, 1, 2 ...

  }
  alert("generated password is " + password);

}
