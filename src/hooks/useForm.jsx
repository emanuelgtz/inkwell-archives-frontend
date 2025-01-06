import { useState } from "react"

export const useForm = (initialForm = {}, validation) => {

  const [formState, setFormState] = useState(initialForm);
  const [error, setError] = useState({});
  const [notValid, setNotValid] = useState(false);
  const [response, setResponse] = useState(null);

  const onResetForm = () => {
    setFormState(initialForm);
  }
  
  const onInputChange = ({target}) => {
    const {name, value} = target;

    setFormState({
      ...formState, 
      [name]: value
    })
  }

  const onCheck = () => {
    setError(validation(formState))
  }

  return {
    ...formState, 
    formState, 
    onCheck,
    onInputChange, 
    onResetForm, 
    setNotValid, 
    setResponse, 
    error, 
    response, 
    notValid
  }
}