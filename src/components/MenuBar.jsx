import menuIcon from "../assets/menu.png"
import userIcon from "../assets/user.png"
import cartIcon from "../assets/shopping-cart.png"
import { useNavigate } from "react-router-dom"


export default function MenuBar() {
  
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/login/home")
  }

  const handleCartClick = () => {
    navigate("/login/cart")
  }

  const handleUserInfoClick = () => {
    navigate("/login/user-info")
  }

  return (
    <footer className="flex 
    justify-around items-center fixed bottom-0 
    w-full p-1.5 bg-blue-500">
      <div className="cursor-pointer" onClick={handleMenuClick}>
        <img src={menuIcon} alt="" className="w-8" />
      </div>
      <div className="" onClick={handleUserInfoClick}>
        <img src={userIcon} alt="" className="w-8" />
      </div>
      <div className="flex items-center" onClick={handleCartClick}>
        <img src={cartIcon} alt="cart-icon" className="w-7" />
        <p className="text-lg font-normal text-white ml-1"></p>
      </div>
    </footer>

  )

}
