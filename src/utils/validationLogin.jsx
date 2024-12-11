
function validationLogin(form) {

  let error = {};

  // Regular expressions to check the email 
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  let email = form.userEmail.trim();
  let password = form.userPassword.trim();

  if(!email) {
    error.userEmail = "Not allowed to be empty"; 
  } else if (!regexEmail.test(email)) {
    error.userEmail = 
    "Please, follow keep in mind the email direction structure";
  }

  if(!password) {
    error.userPassword = "Password not allowed to be empty";
  } else if(password.length < 5) {
    error.userPassword = "+5 characters are required";
  }

  return error;
}


export default validationLogin;