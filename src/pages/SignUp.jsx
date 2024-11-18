import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm"
import validationSignUp from "../utils/validationSignUp";
import signUpBooks from "../assets/signUpBooks.jpg";
import library from "../assets/librarySignUp.jpg";

function SignUp() {
  // const navigate = useNavigate();
  const {
    formState,
    onInputChange,
    onResetForm,
    onCheck,
    setResponse,
    setNotValid,
    error
  } = useForm({
    userName: '',
    userEmail: '',
    userPassword: '',
    userAge: '',
    userCountry: '',
    userCity: '',
    userAddress: ''
  }, validationSignUp);

  const {
    userName, 
    userEmail,
    userPassword, 
    userAge,
    userCountry,
    userCity,
    userAddress
  } = formState;

  // To change to a Login page by using React Router 
  const handleLoginClick = () => {
    // navigate("/login");
  }

  // To handle the submit 
  const onSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <div className="flex justify-center items-center h-screen  
    bg-slate-50 dark:bg-gray-800 ">
      {/* image container */}
      <div className="flex justify-center w-11/12 h-5/6 shadow-lg rounded-xl border-purple-400">
        {/* img */}
        <div className="h-full">
          <img src={library} alt="" className="h-full w-full rounded-l-xl" />
        </div>
        {/* Form  */}
        <div className="flex justify-center items-center rounded-r-xl 
        w-5/12 bg-slate-200 dark:bg-slate-700">

          <form onSubmit={onSubmit} action="/register" method="POST" className=" w-10/12">
            <h1 className="dark:text-white text-4xl antialiased font-light text-center">
              Sign Up
            </h1>

            <label htmlFor="user-name"
              className="block mb-2 text-sm font-light text-gray-900 dark:text-white mt-3">
              Name {error.userName ?
                <span className="p-1 text-sm font-normal dark:font-bold antialiased dark:antialiased ml-10">{"**" + error.userName + "**"}</span>
                : null}
            </label>
            <input type="text" id="user-name"
              className="bg-gray-50 shadow-md
          border-gray-300 text-gray-900 text-sm rounded-3xl 
          focus:ring-blue-500  block w-full p-3.5 dark:shadow-gray-900 dark:shadow-inner
          dark:bg-slate-700 dark:border-gray-700 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 outline-none"
              name="userName" value={userName} /*onBlur={onInputBlur}*/
              onChange={onInputChange}
              autoComplete="off"
              placeholder="your name"
            />

            <label htmlFor="user-age"
              className="block mb-2 text-sm font-light text-gray-900 dark:text-white mt-3">
              Age {error.userAge ?
                <span className="p-1 text-sm font-normal dark:font-bold antialiased dark:antialiased ml-10">{"**" + error.userAge + "**"}</span>
                : null}
            </label>

            <input type="number" id="user-age"
              className="bg-gray-50 shadow-md
          border-gray-300 text-gray-900 text-sm rounded-3xl 
          focus:ring-blue-500  block w-full p-3.5  dark:shadow-gray-900 dark:shadow-inner
          dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 outline-none"
              name="userAge" value={userAge} /*onBlur={onInputBlur}*/ onChange={onInputChange}
              autoComplete="off"
              placeholder="+18" />

            <label htmlFor="user-country"
              className="block mb-2 text-sm font-light text-gray-900 dark:text-white mt-3">
              Country {error.userCountry ?
                <span className="p-1 text-sm font-normal dark:font-bold antialiased dark:antialiased ml-10">{"**" + error.userCountry + "**"}</span>
                : null}
            </label>
            <input type="text" id="user-country"
              className="bg-gray-50 shadow-md
          border-gray-300 text-gray-900 text-sm rounded-3xl 
          focus:ring-blue-500  block w-full p-3.5  dark:shadow-gray-900 dark:shadow-inner
          dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 outline-none"
              name="userCountry" value={userCountry} /*onBlur={onInputBlur}*/ onChange={onInputChange}
              autoCapitalize="off"
              placeholder="your country" />

            <label htmlFor="user-city"
              className="block mb-2 text-sm font-light text-gray-900 dark:text-white mt-3">
              City {error.userCity ?
                <span className="p-1 text-sm font-normal dark:font-bold antialiased dark:antialiased ml-10">{"**" + error.userCity + "**"}</span>
                : null}
            </label>
            <input type="text" id=""
              className="bg-gray-50 shadow-md
          border-gray-300 text-gray-900 text-sm rounded-3xl 
          focus:ring-blue-500  block w-full p-3.5  dark:shadow-gray-900 dark:shadow-inner
          dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 outline-none"
              name="userCity" value={userCity} /*onBlur={onInputBlur}*/ onChange={onInputChange}
              autoCapitalize="off"
              placeholder="your city" />


            <label htmlFor="user-address"
              className="block mb-2 text-sm font-light text-gray-900 dark:text-white mt-3">
              Address {error.userAddress ?
                <span className="p-1 text-sm font-normal dark:font-bold antialiased dark:antialiased ml-10">{"**" + error.userAddress + "**"}</span>
                : null}
            </label>
            <input type="text" id="user-address"
              className="bg-gray-50 shadow-md
          border-gray-300 text-gray-900 text-sm rounded-3xl 
          focus:ring-blue-500  block w-full p-3.5 dark:shadow-gray-900 dark:shadow-inner
          dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 outline-none"
              name="userAddress" value={userAddress} /*onBlur={onInputBlur}*/
              onChange={onInputChange}
              autoComplete="off"
              placeholder="your address" />

            <label htmlFor="user-email"
              className="block mb-2 text-sm font-light text-gray-900 dark:text-white mt-3">
              Email {error.userEmail ?
                <span className="p-1 text-sm font-normal dark:font-bold antialiased dark:antialiased ml-10">{"**" + error.userEmail + "**"}</span>
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
                <span className="p-1 text-sm font-normal dark:font-bold antialiased dark:antialiased ml-10">{"**" + error.userPassword + "**"}</span>
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

              <button type="reset" value="Reset" onClick={onResetForm}
                className="transition ease-in-out hover:scale-110 duration-200 bg-indigo-500 hover:bg-purple-500 hover:shadow-sm 
                hover:shadow-purple-400 dark:bg-blue-600 dark:hover:bg-blue-600 dark:hover:shadow-lg dark:text-white
              text-white text-base font-medium p-3 px-7 rounded-2xl ">Reset</button>

              <button type="submit" value="Submit"
                className="transition ease-in-out hover:scale-110 duration-200 bg-indigo-500 hover:bg-purple-500 hover:shadow-sm 
                hover:shadow-purple-400 dark:bg-blue-600 dark:hover:bg-blue-600 dark:hover:shadow-lg dark:text-white
              text-white text-base font-medium p-3 px-7 rounded-2xl" onClick={onCheck}>Submit</button>


              {/* Login page */}
              <button
                className="transition ease-in-out hover:scale-110 duration-200 bg-indigo-500 hover:bg-purple-500 hover:shadow-sm 
                hover:shadow-purple-400 dark:bg-blue-600 dark:hover:bg-blue-600 dark:hover:shadow-lg dark:text-white
              text-white text-base font-medium p-3 px-7 rounded-2xl">Login</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp;

