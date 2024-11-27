
import validationLogin from "../utils/validationLogin"
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";

function Login() {

  const {
    formState,
    onInputChange,
    onCheck,
    setResponse,
    setNotValid,
    error
  } = useForm({
    userEmail: '',
    userPassword: ''
  }, validationLogin);

  const {
    userEmail,
    userPassword
  } = formState;

  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/sign-up")
  }

  const onSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <div className="h-screen dark:bg-gray-800  border-purple-600 p-2">

      <div className="h-full w-full p-2  border-green-600 content-center
        bg-slate-200 
        dark:bg-slate-700 rounded-lg">

        <form onSubmit={onSubmit} action="/submit-login" method="POST"
          className=""
        >

          <h1 className="dark:text-white text-3xl antialiased font-light text-center">
            Login

          </h1>

          <label htmlFor="user-email"
            className="block mb-2 text-sm font-light text-gray-900 dark:text-white mt-3">
            Email {error.userEmail ?
              <span className="p-1 text-sm font-medium dark:font-bold antialiased dark:antialiased ml-5">{"*" + error.userEmail + "*"}</span>
              : null}
          </label>
          <input type="email" id="user-email"
            className="bg-gray-50 shadow-md 
          border-gray-300 text-gray-900 text-sm rounded-3xl 
          focus:ring-blue-500  block w-full p-3.5 dark:shadow-gray-900 dark:shadow-inner
          dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 outline-none"
            name="userEmail" value={userEmail} /*onBlur={onInputBlur}*/ onChange={onInputChange}
            autoComplete="off"
            placeholder="email@example.com" />

          <label htmlFor="user-password"
            className="block mb-2 text-sm font-light text-gray-900 dark:text-white mt-5">
            Password {error.userPassword ?
              <span className="p-1 text-sm font-medium dark:font-bold antialiased dark:antialiased ml-1">{"*" + error.userPassword + "*"}</span>
              : null}
          </label>
          <input type="password"
            id="user-password"
            className="bg-gray-50 shadow-md
          border-gray-300 text-gray-900 text-sm rounded-3xl 
          focus:ring-blue-500  block w-full p-3.5 dark:shadow-gray-900 dark:shadow-inner
          dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 outline-none"
            name="userPassword" value={userPassword} /*onBlur={onInputBlur}*/
            onChange={onInputChange}
            autoComplete="off"
            placeholder="********" />

          {/* Div to place the submit button the button */}
          <div className="flex flex-col justify-around mt-10">
            <button type="submit" value="Submit"
              className="
              bg-indigo-500 
                hover:bg-green-500 dark:bg-blue-600 dark:hover:bg-green-600
                dark:text-white
              text-white text-base font-medium p-3 px-7 rounded-2xl mb-10" onClick={onCheck} >
              Login
            </button>

            {/* Login page */}
            <a
              className="dark:text-white  text-center text-base dark:font-medium " 
              onClick={handleSignUp}>
              <u>I don't have an account</u>
            </a>

          </div>
        </form>
      </div>
    </div>
  )
}


export default Login;