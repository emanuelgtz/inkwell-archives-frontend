import { useContext, useState } from "react";
import { Context } from "../context/Context";


function Cart() {

  const {cartItem} = useContext(Context);
  const [cart, setCart] = useState([]);

  

  return (
    <div className="border-2 h-screen border-green-500">
      <h1 className="text-center border-2 border-red-500">Cart items</h1>
      
    </div>
  )
}


export default Cart;