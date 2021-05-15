var UPPER= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LOWER= "abcdefghijklmnopqrstuvwxyz";
var DIGITS= "0123456789";
var SPEC= "~!@#$%&*";

var length;
var upper;
var lower;
var digits;
var spec;


var generateBtn = document.querySelector("#generate");

function generateCharacter(){
   var index;
   var character;
   //alert ("Inside generateCharacter");
   var characterType = getCharacterType(upper, lower, digits, spec);

   //alert("get " + characterType)

   if (characterType == 0) {
       character= UPPER[Math.floor(Math.random()*UPPER.length)]
   } else if (characterType == 1) {
       character = LOWER[Math.floor(Math.random()*LOWER.length)];
   } else if (characterType == 2) {
       character = DIGITS[Math.floor(Math.random()*DIGITS.length)];
   } else if (characterType == 3){
       character = SPEC[Math.floor(Math.random()*SPEC.length)]
   }
        return character;
} 
//This section 
function getCharacterType(upper, lower, digits, spec) {
    
    var charType = Math.floor(Math.random()*4);
    var done = false;
    for (;!done;){
        if (charType == 0) {
            if (upper){
                return charType;
            } else {
                charType++;
            }
        }
        if (charType == 1) {
            if (lower) {
                return charType;
            }  else {
                charType++;
            }
        }
        if (charType == 2){ 
            if (digits){
                return charType;
            }else {
                charType++;
            }
        }
        if (charType == 3){
            if (spec){
                return charType;
            } else {
                charType = 0;
            }
        }
    }
}
function generatePassword() { 
    var generatedPassword= [];
    for (var i=0; i <=128; i++) {
        generatedPassword[i]= generateCharacter();

    }   
    //alert(generatedPassword.join(""));
    
    return generatedPassword.join("");

}
// Write password to the #password input
function writePassword(){
    //alert("inside write password");
  length= prompt("How long would you like your password? Choose between 8 and 128.");
    if (!length) {
        alert("You must chose a number.");
        return;
    }
  upper= confirm("Would you like to include an uppercase letter?");
  lower= confirm("Would you like to include a lowercase letter?");
  digits= confirm("Would you like to include numbers?");
  spec= confirm("Would you like to include a symbol?");
  
  if ( !upper && !lower && !digits && !spec){
    alert("You must select at least 1 character type");
    return;
}
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);