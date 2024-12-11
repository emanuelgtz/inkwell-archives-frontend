import { useState } from "react"

export const useForm = (initialForm = {}, validateForm) => {

  const [formState, setFormState] = useState(initialForm);
  const [error, setError] = useState({});
  const [notValid, setNotValid] = useState(false);
  const [response, setResponse] = useState(null);

  const onResetForm = () => {
    setFormState(initialForm)
    console.log("Reset button called")
  }
  
  const onInputChange = ({target}) => {
    const {name, value} = target;
    console.log(target.value)
    setFormState({
      ...formState, 
      [name]: value
    })
  }

  const onCheck = () => {
    setError(validateForm(formState))
  }

  return {
    ...formState, 
    formState, 
    onInputChange, 
    onResetForm, 
    // onInputBlur, 
    onCheck,
    setNotValid, 
    setResponse, 
    error, 
    response, 
    notValid
  }
}