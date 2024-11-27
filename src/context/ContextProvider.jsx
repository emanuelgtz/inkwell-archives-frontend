import { useState } from "react";
import { WebContext } from "./Context";

function WebContextProvider({ children }) {
  // Item written in the search bar 
  const [itemSearchBar, setItemSearchBar] = useState(null);
  // Item passed into the cart to be purchased later. 
  const [cartItem, setCartItem] = useState();
  // The user info 
  const [user, setUser] = useState();
  // The status of the login
  const [loginStatus, setLoginStatus] = useState();

  const valueObj = {
    itemSearchBar, setItemSearchBar, 
    cartItem, setCartItem, 
    user, setUser, 
    loginStatus, setLoginStatus
  };

  return (
    <WebContext.Provider value={valueObj}>
      {children}
    </WebContext.Provider>
  )

}

export default WebContextProvider;