//    stored values for password selection
let UpperLetters = ['A', 'B', 'C', 'D','E','F','G','H', 'I', 'J', 'K', 'L' , 'M', 'N', 'O', 'P', 'Q','R', 'S', 'T', 'U', 'V','W', 'X', 'Y', 'Z'];
let LowerLetters = ['a', 'b','c','d', 'e','f','g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o','p','q','r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let Digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let UniqueCharacters = ['~', '`', '!','@','#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ':', ';', '"', ',', '<', '.', '>', '/', '?']
let characterbank = "";
let givenpassword = "";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword() {
    var passwordlength = prompt("Please choose a password length between 8 and 128 characters");

    if (passwordlength<8 || passwordlength>128){
        alert("Please reeneter a password that meets requirements of 8 to 128 character");

        passwordlength = prompt("Please choose a password length between 8 and 128 characters")
        return passwordlength;
    } else {
    let Uppercase = confirmUppercase("Will password have uppercase characters?");
    if (Uppercase === true) {
        characterbank = characterbank.concat(UpperLetters)
    }

    let Lowercase = confirmLowercase("Will password have lower characters?");
    if (Lowercase === true) {
        characterbank = characterbank.concat(LowerLetters)
    }

    let Numbers = confirmNumbers("Will password have numbers?");
    if (Numbers === true) {
        characterbank = characterbank.concat(Numbers)
    }

    let SpecialCharacters = confirmSpecialCharacters("Will password have special characters?");
    if (SpecialCharacters === true) {
        characterbank = characterbank.concat(SpecialCharacters)
    }

    if (confirmUppercase,confirmLowercase,confirmNumbers,confirmSpecialCharacters){
        alert("Password did not meet criterias, please try again")
    }

    for (let i = 0; i < passwordlength; ++i){
        let value = Math.floor(Math.random() * givenpassword.length);
        passwordlength = passwordlength + givenpassword[value];
        }
        return passwordlength;

}
}
console.log (confirmUppercase,confirmLowercase,confirmNumbers,confirmSpecialCharacters)


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// pseudocode:
// User sees text box and generate password botton
// User will click on generate password botton
    // make the button clickable
        // addEventListener
// User will answer questions on password requirements
    // At leaste 8 characters and no more than 128 characters
        // prompt 
    // include lowercase,uppercase,numeric, and/or special characters
        // confirm
// Password with those requirements will be provided
// Store options of requirments for password
       // var with array
// Characters for password , randomly selected
      // loop
// return to user
// use function

// Resources
// https://www.w3schools.com/jsref/jsref_concat_string.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
// https://www.w3schools.com/js/js_loop_for.asp
