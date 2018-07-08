export function validateLogin(email, password) {
  // true means invalid, so our conditions got reversed
  if ( email.length === 0 && password.length === 0)	{
		return {isValid: true, errorText: 'Please fill the input fields!'}
	}
   return false
}

export function validateSignUpForm(name, email, password) {
	let isNotCorrect = true
  // true means invalid, so our conditions got reversed
  if ( name.length === 0 && email.length === 0 && password.length === 0)	{
		return {isValid: true, errorText: 'Please fill the input fields!'}
	} else if (email || password) {
			if (!validateEmail(email)) {
				return {isValid: true, errorText: 'Please fill the correct email!'}		
			} else if (password.length < 5) {
				return  {isValid: true, errorText: 'Password must be more than 4 character long!'}		
			}
	}
   return false
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}