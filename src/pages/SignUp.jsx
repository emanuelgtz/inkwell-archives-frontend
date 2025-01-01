import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm"
import validationSignUp from "../utils/validationSignUp";

function SignUp() {

  const {
    formState,
    onInputChange,
    onResetForm,
    onCheck,
    setNotValid,
    setResponse,
    error
  } = useForm({
    userName: '',
    userEmail: '',
    userPassword: '',
    userAge: '',
    userCountry: '',
    userCity: '',
    userAddress: '',
    role: [
      {
        roleName: 'ADMIN'
      }
    ]
  }, validationSignUp);

  const {
    userName,
    userEmail,
    userPassword,
    userAge,
    userCountry,
    userCity,
    userAddress,
    role
  } = formState;

  const navigate = useNavigate();

  // To change to a Login page by using React Router 
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  }

  // To handle the submit 
  const onSubmit = async (e) => {

    e.preventDefault();

    // Check for errors
    if (Object.values(error).some((err) => err)) {
      console.log("Form contains errors. Submission aborted.");
      return;
    }

    try {

      const response = await fetch(
        'http://localhost:8080/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        setNotValid(true);
        throw new Error('Something went wrong');
      }

      setResponse(await response.json());
      onResetForm();
      console.log(formState)

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="h-screen  border-red-500 overflow-auto
    bg-slate-50 dark:bg-gray-800 ">

      {/* Form  */}
      <div className="w-full p-2  rounded-xl content-center 
        bg-slate-200 dark:bg-slate-700">

        <form onSubmit={onSubmit} action="/sign-up" method="POST" className="">
          <h1 className="dark:text-white text-3xl antialiased font-light text-center">
            Sign Up
          </h1>

          <label htmlFor="user-name"
            className="block mb-2 text-sm font-light text-gray-900 dark:text-white mt-3">
            Name {error.userName ?
              <span className="p-1 text-sm font-normal dark:font-bold antialiased dark:antialiased ml-10">{
                "**" + error.userName + "**"}
              </span>
              : null}
          </label>


          <input type="text" id="user-name"
            className="bg-gray-50 shadow-md
          border-gray-300 text-gray-900 text-sm rounded-3xl 
          focus:ring-blue-500  block w-full p-3.5 dark:shadow-gray-900 dark:shadow-inner
          dark:bg-slate-700 dark:border-gray-700 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 outline-none"
            name="userName" value={userName} onChange={onInputChange}
            autoComplete="off"
            placeholder="your name"
          />

          <label htmlFor="user-age"
            className="block mb-2 text-sm font-light text-gray-900 dark:text-white mt-3">
            Age
            {
              error.userAge ?
                <span className="p-1 text-sm font-normal dark:font-bold antialiased dark:antialiased ml-10">
                  {"**" + error.userAge + "**"}
                </span>
                : null
            }
          </label>

          <input type="number" id="user-age"
            className="bg-gray-50 shadow-md
          border-gray-300 text-gray-900 text-sm rounded-3xl 
          focus:ring-blue-500  block w-full p-3.5  dark:shadow-gray-900 dark:shadow-inner
          dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 outline-none"
            name="userAge" value={userAge} onChange={onInputChange}
            autoComplete="off"
            placeholder="+18" />

          <label htmlFor="user-country"
            className="block mb-2 text-sm font-light text-gray-900 dark:text-white mt-3">
            Country
            {
              error.userCountry ?
                <span className="p-1 text-sm font-normal dark:font-bold antialiased dark:antialiased ml-10">
                  {"**" + error.userCountry + "**"}
                </span>
                : null
            }
          </label>

          <input type="text" id="user-country"
            className="bg-gray-50 shadow-md
          border-gray-300 text-gray-900 text-sm rounded-3xl 
          focus:ring-blue-500  block w-full p-3.5  dark:shadow-gray-900 dark:shadow-inner
          dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 outline-none"
            name="userCountry" value={userCountry} onChange={onInputChange}
            autoCapitalize="off"
            placeholder="your country" />

          <label htmlFor="user-city"
            className="block mb-2 text-sm font-light text-gray-900 dark:text-white mt-3">
            City
            {
              error.userCity ?
                <span className="p-1 text-sm font-normal dark:font-bold antialiased dark:antialiased ml-10">
                  {"**" + error.userCity + "**"}</span>
                : null
            }
          </label>

          <input type="text" id=""
            className="bg-gray-50 shadow-md
          border-gray-300 text-gray-900 text-sm rounded-3xl 
          focus:ring-blue-500  block w-full p-3.5  dark:shadow-gray-900 dark:shadow-inner
          dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 outline-none"
            name="userCity" value={userCity} onChange={onInputChange}
            autoCapitalize="off"
            placeholder="your city" />


          <label htmlFor="user-address"
            className="block mb-2 text-sm font-light text-gray-900 dark:text-white mt-3">
            Address
            {
              error.userAddress ?
                <span className="p-1 text-sm font-normal dark:font-bold antialiased dark:antialiased ml-10">{"**" + error.userAddress + "**"}</span>
                : null
            }
          </label>

          <input type="text" id="user-address"
            className="bg-gray-50 shadow-md
          border-gray-300 text-gray-900 text-sm rounded-3xl 
          focus:ring-blue-500  block w-full p-3.5 dark:shadow-gray-900 dark:shadow-inner
          dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 outline-none"
            name="userAddress" value={userAddress}
            onChange={onInputChange}
            autoComplete="off"
            placeholder="your address" />

          <label htmlFor="user-email"
            className="block mb-2 text-sm font-light text-gray-900 dark:text-white mt-3">
            Email
            {
              error.userEmail ?
                <span className="p-1 text-sm font-normal dark:font-bold antialiased dark:antialiased ml-10">
                  {"**" + error.userEmail + "**"}</span>
                : null
            }
          </label>

          <input type="email" id="user-email"
            className="bg-gray-50 shadow-md
          border-gray-300 text-gray-900 text-sm rounded-3xl 
          focus:ring-blue-500  block w-full p-3.5 dark:shadow-gray-900 dark:shadow-inner
          dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 outline-none"
            name="userEmail" value={userEmail}  onChange={onInputChange}
            autoComplete="off"
            placeholder="email@example.com" />

          <label htmlFor="user-password"
            className="block mb-2 text-sm font-light text-gray-900 dark:text-white mt-3">
            Password
            {
              error.userPassword ?
                <span className="p-1 text-sm font-normal dark:font-bold antialiased dark:antialiased ml-10">{"**" + error.userPassword + "**"}
                </span>
                : null
            }
          </label>

          <input type="password" id="user-password"
            className="bg-gray-50 shadow-md
          border-gray-300 text-gray-900 text-sm rounded-3xl 
          focus:ring-blue-500  block w-full p-3.5 dark:shadow-gray-900 dark:shadow-inner
          dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 outline-none"
            name="userPassword" value={userPassword} onChange={onInputChange}
            autoComplete="off"
            placeholder="********"
          />


          {/* Div to place the submit button the button */}
          <div className="flex flex-col justify-around mt-8 mb-2">

            <button type="reset" value="Reset" onClick={onResetForm}
              className="
              bg-indigo-500 
                hover:bg-purple-500 dark:bg-blue-600 dark:hover:bg-purple-500
                dark:text-white
              text-white text-base font-medium p-3 px-7 rounded-2xl mb-5">Reset</button>

            <button type="submit" value="Submit" onClick={onCheck}
              className="
              bg-indigo-500 
                hover:bg-green-500 dark:bg-blue-600 dark:hover:bg-green-600
                dark:text-white
              text-white text-base font-medium p-3 px-7 rounded-2xl mb-5">
              Submit
            </button>

            {/* Login page */}
            <a
              className="dark:text-white  text-center text-base dark:font-medium mt-5"
              onClick={handleLogin}>
              <u>I already have an account</u>
            </a>

          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp;

