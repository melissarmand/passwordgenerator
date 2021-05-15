//These are the global variables that I will use throughout the code.
var UPPER= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LOWER= "abcdefghijklmnopqrstuvwxyz";
var DIGITS= "0123456789";
var SPEC= "~!@#$%&*";

var passwordLength;
var upper;
var lower;
var digits;
var spec;


// This was included in the code for the generate button
var generateBtn = document.querySelector("#generate");

// This is the section that randomizes each one of the strings. This section also includes alerts I used to test functions. These alerts have been commented out.
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
//This section accounts for the character types that will be included in the password, based on the user choices.
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

//This is the section that puts the user choices (length and character types) together to make the password.
function generatePassword() { 
    var generatedPassword= [];
    for (var i=0; i < passwordLength; i++) {
        generatedPassword[i]= generateCharacter();
    function generateLength() {
            var charLength
            charLength = length[Math.floor(Math.random())]
        
        }

    }  return generatedPassword.join("");

}
//This section accounts for the length of the password based on the user's input. 
function getPasswordlength() {
    var input;
    var length;

    for (;;) {
        input = prompt ("Choose password length between 8 and 128");
        alert("You chose " + input + " characters.");
        if (input == "") {
            alert("You must choose a number between 8 and 128.");
        }else {
            length = parseInt(input);
            if (Number.isNaN(length)) {
                alert ("Please select a number only.");
            } else {
                if (length < 8 || length > 128) {
                    alert("You must choose a number between 8 and 128.");
                } else {
                    break;
                }
            }
        }
    }
    return length;
}

// Write password to the #password input
function writePassword(){
     passwordLength = getPasswordlength();

  upper= confirm("Would you like to include an uppercase letter?");
   if (upper == true) {
       alert("You chose to include an upper case letter.")
   } else alert("You chose to not include an upper case letter.");
  lower= confirm("Would you like to include a lowercase letter?");
   if (lower == true) {
       alert("You chose to include a lowercase letter.")
   }else alert("You chose not to include a lowercase letter.");
  digits= confirm("Would you like to include numbers?");
   if (digits == true) {
       alert("You chose to include an number.")
   } else alert ("You chose not to include a number.");
  spec= confirm("Would you like to include a symbol?");
   if (spec == true) {
       alert("You chose to include a symbol.")
   } else alert("You chose not to include a symbol.");
  
  
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