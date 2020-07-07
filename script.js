// Variables for application
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#$%^&*()+,.<>="
var numberChar = "0123456789";
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

// Determines the length of the entire password
function determineLengthNum(){
  passwordLength = prompt("Choose how long you'd like your password to be (between 8-128 characters): ");


    if (passwordLength<8){
      alert("Please enter a number between 8 and 128 characters.");
      determineLengthNum();
    }else if (passwordLength>128){
      alert("Please enter a number between 8 and 128 characters.");
      determineLengthNum();
    }else if (isNaN(passwordLength)){
      alert("Please enter a number between 8 and 128 characters.");
      determineLengthNum();
    }
    return passwordLength;
}



// Determines whether or not numbers will be used
function determineNumber(){
  numberCheck = prompt("Do you want to include numbers in your password? \n(Yes or No)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      determineNumber();

    }else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineNumber();
    }
    return numberCheck;
}

// Determines whether or not uppercase letters are used
function determineUppercase(){
    uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
      uppercaseCheck = uppercaseCheck.toLowerCase();
  
      if (uppercaseCheck === null || uppercaseCheck === ""){
        alert("Please answer Yes or No");
        determineUppercase();
  
      }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
        uppercaseCheck = true;
        return uppercaseCheck;
  
      }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
        uppercaseCheck = false;
        return uppercaseCheck;
      
      }else {
        alert("Please answer Yes or No");
        determineUppercase();
      }
      return uppercaseCheck;
  }

// This function determines whether or not special characters will be used
function determineSpecialChars(){
  specialCheck = prompt("Do you want to include special characters? \n(Yes or No)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Please answer Yes or No");
      determineSpecialChars();

    }else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineSpecialChars();
    }
    return specialCheck;
}

// Determine password based on parameters checked by the user. Console logs display the password based on the selected parameters
function generatePassword(){
  determineLengthNum();
  console.log(passwordLength);
  determineNumber();
  console.log(numberCheck);
  determineUppercase();
  console.log(uppercaseCheck);
  determineSpecialChars();
  console.log(specialCheck);

var characters = lowercaseChar;
var password = "";


if (uppercaseCheck && numberCheck && specialCheck){
  characters += uppercaseChar + numberChar + specialChar;

}else if (uppercaseCheck && numberCheck){
  characters += uppercaseChar + numberChar;

}else if (numberCheck && specialCheck){
  characters += numberChar + specialChar;

}else if (uppercaseCheck && specialCheck){
  characters += uppercaseChar + specialChar;

}else if (uppercaseCheck){
  characters += uppercaseChar;

}else if(numberCheck){
  characters += numberChar;

}else if (specialCheck){
  characters += specialChar;

}else{
  characters === lowercaseChar;
}

  for (var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Password is generated
function writePassword() {
  var passwordGen = "";
  passwordGen = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = passwordGen;
}

// Finally, event listener is added to generate the button that displays the password
generateBtn.addEventListener("click", writePassword);