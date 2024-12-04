import { useState } from "react";
import { Context } from "./Context";


function ContextProvider({ children }) {
  // Item written in the search bar 
  const [itemSearchBar, setItemSearchBar] = useState(null);
  // Item passed into the cart to be purchased later. 
  const [cartItem, setCartItem] = useState();
  // The user info 
  const [user, setUser] = useState();
  // The status of the login
  const [loginStatus, setLoginStatus] = useState();

  // The book passed into BookInfo component
  const [bookInfo, setBookInfo] = useState();

  return(
    <Context.Provider value={
      {
        itemSearchBar, setItemSearchBar, cartItem, setCartItem, 
        user, setUser, loginStatus, setLoginStatus, bookInfo, setBookInfo
      }
    }>
      {children}

    </Context.Provider>
  )

}

export default ContextProvider;