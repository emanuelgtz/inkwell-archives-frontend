import { useState } from "react";
import { Context } from "./Context";


function ContextProvider({ children }) {
  // Item written in the search bar 
  const [itemSearchBar, setItemSearchBar] = useState(null);
  // The status of the login
  const [loginStatus, setLoginStatus] = useState();
  // The book passed into BookInfo component
  const [book, setBook] = useState();
  // Set the item in the Cart 
  const [cart, setCart] = useState([]);
  
  const [loggedUserId, setLoggedUserId] = useState();

  const [userInfo, setUserInfo] = useState();

  return(
    <Context.Provider value={
      {
        itemSearchBar, setItemSearchBar, 
        loginStatus, setLoginStatus, 
        loggedUserId, setLoggedUserId,
        book, setBook,
        cart, setCart,
        userInfo, setUserInfo 
        
      }
    }>
      {children}

    </Context.Provider>
  )

}

export default ContextProvider;