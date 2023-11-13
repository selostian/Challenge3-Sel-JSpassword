// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCase = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
var numbers = [1,2,3,4,5,6,7,8,9,0]
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword (){
  var length = prompt("enter a length for your password")
  if (length<8 || length>128) {
    alert("Password has to be between 8 and 128")
    return
  } var userChoise = []
  var upperCaseChoise = confirm("Do you want upper case in your password?")
  var lowerCaseChoise = confirm("Do you want lower case in your password?")
  var specialCaseChoise = confirm("Do you want special charrecters in your password?")
  var numbersChoise = confirm("Do you want numbers in your password?")
  if (upperCaseChoise ==true){
    userChoise=userChoise.concat(upperCase)
  }
  console.log(userChoise)
  if (lowerCaseChoise==true){
    userChoise=userChoise.concat (lowerCase)
  }
  console.log(userChoise)
  if (specialCaseChoise ==true){
    userChoise=userChoise.concat(specialCase)
  }
  console.log(userChoise)
  if (numbersChoise ==true){
    userChoise=userChoise.concat(numbers)
  }
  console.log(userChoise)
  var password=""
    // console.log(arr[(Math.floor(Math.random() * arr.length))]);
  for (var i=0; i<length; i++){
    password += userChoise[(Math.floor(Math.random() * userChoise.length))]
  }
  return password
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
