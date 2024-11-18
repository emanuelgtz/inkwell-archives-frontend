
import validationLogin from "../utils/validationLogin"
import loginImage from "../assets/loginImage.jpg";
import { useForm } from "../hooks/useForm";

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


  const handleSignUpClick = () => {
  }

  const onSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <div className="flex justify-center items-center h-screen border-2 border-red-500 
    bg-slate-50 dark:bg-gray-800 ">
      {/* image container */}
      <div className="flex justify-center w-11/12 h-5/6 shadow-lg rounded-xl">
        
        {/* Form  */}
        <div className="flex justify-center items-center rounded-l-xl 
        w-5/12 bg-slate-200 dark:bg-slate-700">

          <form onSubmit={onSubmit} action="/submit-login" method="POST" className="w-10/12">

            <h1 className="dark:text-white text-4xl antialiased font-light text-center">
              Login
            </h1>


            <label htmlFor="user-email"
              className="block mb-2 text-sm font-light text-gray-900 dark:text-white mt-3">
              Email {error.userEmail ?
                <span className="p-1 text-sm font-medium dark:font-bold antialiased dark:antialiased ml-10">{"**" + error.userEmail + "**"}</span>
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
              className="block mb-2 text-sm font-light text-gray-900 dark:text-white mt-3">
              Password {error.userPassword ?
                <span className="p-1 text-sm font-medium dark:font-bold antialiased dark:antialiased ml-10">{"**" + error.userPassword + "**"}</span>
                : null}
            </label>
            <input type="password" id="user-password"
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
            <div className="flex justify-around mt-10">
              <button type="submit" value="Submit"
                className="transition ease-in-out hover:scale-110 duration-200 bg-indigo-500 hover:bg-purple-500 hover:shadow-sm 
                hover:shadow-purple-400 dark:bg-blue-600 dark:hover:bg-blue-600 dark:hover:shadow-lg dark:text-white
              text-white text-base font-medium p-3 px-7 rounded-2xl" onClick={onCheck} >Submit</button>

              {/* Login page */}
              <button
                className="transition ease-in-out hover:scale-110 duration-200 bg-indigo-500 hover:bg-purple-500 hover:shadow-sm 
                hover:shadow-purple-400 dark:bg-blue-600 dark:hover:bg-blue-600 dark:hover:shadow-lg dark:text-white
              text-white text-base font-medium p-3 px-7 rounded-2xl" >Login</button>

            </div>
          </form>
        </div>

        <div className="h-full">
          <img src={loginImage} alt="" className="h-full w-full rounded-r-xl" />
        </div>

      </div>
    </div>
  )
}


export default Login;