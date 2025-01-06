
function validationSignUp(form) {
  
  let error = {}

  // Regular expressions to check the email and name
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  let name = form.userName.trim();
  let email = form.userEmail.trim();
  let password = form.userPassword.trim();
  let age = form.userAge.trim();
  let country = form.userCountry.trim();
  let city = form.userCity.trim();
  let address = form.userAddress.trim();

  if(!name) {
    error.userName = "Not allowed to be empty"
  } else if(!regexName.test(name)) {
    error.userName = "Only letters/vowels are allowed";
  } else if(name.length < 4) {
    error.userName = "+4 characters is required"
  } 

  if(!email) {
    error.userEmail = "Not allowed to be empty"; 
  } else if (!regexEmail.test(email)) {
    error.userEmail = 
    "Please, follow keep in mind the email direction structure";
  }

  if(!password) {
    error.userPassword = "Password not allowed to be empty";
  } else if(password.length <= 5) {
    error.userPassword = "+5 characters are required"; 
  }

  if(!age) {
    error.userAge = "Not allowed to be empty";
  } else if (age < 18 || age < 0) {
    error.userAge = "You must be 18 years old to gain access";
  }
    
  if(!country) {
    error.userCountry = "Not allowed to be empty";
  } 

  if(!city) {
    error.userCity = "Not allowed to be empty";
  }
    
  if(!address) {
    error.userAddress = "Not allowed to be empty";
  }

  return error;
}

export default validationSignUp;

