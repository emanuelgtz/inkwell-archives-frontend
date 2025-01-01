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
  const [bookCart, setBookCart] = useState();
  
  const [loggedUserId, setLoggedUserId] = useState();

  return(
    <Context.Provider value={
      {
        itemSearchBar, setItemSearchBar, 
        loginStatus, setLoginStatus, 
        loggedUserId, setLoggedUserId,
        book, setBook,
        bookCart, setBookCart
      }
    }>
      {children}

    </Context.Provider>
  )

}

export default ContextProvider;