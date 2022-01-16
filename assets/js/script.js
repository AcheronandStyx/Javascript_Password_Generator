// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordEl = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // char arrays
  var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specChars = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  var passwordChars = [];

  var length = 0  // var length to 0 so while triggers
  var password =""; // empty var to hold the password string

  // validate acceptible password length was provided.
  while(length < 8 || length > 128 ) {
   var length = prompt("Please enter a password length in the range of 8 to 128");
  }

  // convert user entered string into an integer and add it to the passwordCriteria object
  passwordCriteria.length = parseInt(length);

  // confirm prompts for remaining options toggle the associated boolean in the passwordCriteria object
  passwordCriteria.lowercase = window.confirm("Would you like to include lowercase characters?");
  passwordCriteria.uppercase = window.confirm("Would you like to include uppercase characters?");
  passwordCriteria.numeric = window.confirm("Would you like to include numeric characters?");
  passwordCriteria.specialChar = window.confirm("Would you like to include special characters?");

  // verify that at least one type of character is selected.  If one is not alert user of requirements and call generatePassword() again.
  if (passwordCriteria.lowercase === false && passwordCriteria.uppercase === false && passwordCriteria.numeric === false && passwordCriteria.specialChar === false) {
    window.alert("The password must include at least one character type.  (lowercase, uppercase, numeric, or special characters)");
    generatePassword();
  }

  // check each boolean value and concatenate arrays to assemble an array of acceptible characters to draw from for the random password.
  if (passwordCriteria.lowercase === true) {
    passwordChars = passwordChars.concat(lowercase);
  }

  if (passwordCriteria.uppercase === true) {
    passwordChars = passwordChars.concat(uppercase);
  }

  if (passwordCriteria.numeric === true) {
    passwordChars = passwordChars.concat(nums);
  }

  if (passwordCriteria.specialChar === true) {
    passwordChars = passwordChars.concat(specChars);
  }

  // series of if checks to ensure each selected char type is used at least once.
  if (passwordCriteria.lowercase === true) {
    var newChar = lowercase[randomChar(lowercase.length)];
    password = password.concat(newChar);
    length--;
  }

  if (passwordCriteria.uppercase === true) {
    var newChar = uppercase[randomChar(uppercase.length)];
    var newChar = newChar.toUpperCase();
    password = password.concat(newChar);
    length--;
  }

  if (passwordCriteria.numeric === true) {
    var newChar = nums[randomChar(nums.length)];
    password = password.concat(newChar);
    length--;
  }

  if (passwordCriteria.specialChar === true) {
    var newChar = specChars[randomChar(specChars.length)];
    password = password.concat(newChar);
    length--;
  }

  // for loop to create rest of the password
  for(length; length > 0; length--) {
    var newChar = passwordChars[randomChar(passwordChars.length)];
    password = password.concat(newChar);
  }
  
  window.alert("Your password is: " + password);

  console.log("whyyyyy");

};

var randomChar = function(length) {
  // math.random will never equal 1 and math.floor rounds down. So, array.length is perfect because it wont go past the end of the array and will also be able to access index 0.
  var selection = Math.floor(Math.random() * length)

  return selection;
};

// Password criteria object
var passwordCriteria = {
  length: 0,
  lowercase: false,
  uppercase: false,
  numeric: false,
  specialChar: false,
};