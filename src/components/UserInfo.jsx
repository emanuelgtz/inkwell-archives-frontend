import { useContext } from "react";
import { Context } from "../context/Context";

import userInfoIcon from "../assets/user-info-icon.png";
import { useNavigate } from "react-router-dom";


function UserInfo() {

  const navigate = useNavigate();

  const { userInfo } = useContext(Context);

  const { userName, userEmail, userAge, userCity, userCountry, userAddress } = userInfo;

  const handleMenuClick = () => {
    navigate("/login/home");
  }

  const handlePurchaseHistory = () => {
    console.log("fetching purchase history of current user...");
  }

  const handleEditUserInformation = () => {
    console.log("Edit user information function running now...");
  }

  return (
    <div className=" flex flex-col justify-around p-2 h-screen ">

      <div className="flex flex-col justify-around p-2
      h-4/6 rounded-xl">

        <div className="flex justify-center">
          <img src={userInfoIcon} alt="" className="w-6/12" />
        </div>

        <div className="flex flex-col gap-1 font-sans text-xl antialiased">
          <p className="text-center font-sans text-2xl antialiased">{userName}</p>
          <p>Email: {userEmail}</p>
          <p>Age: {userAge}</p>
          <p>Country: {userCountry}</p>
          <p>City: {userCity}</p>
          <p>Address: {userAddress}</p>

        </div>

      </div>

      {/* edit info and continue shopping  */}
      <div className="flex flex-col gap-4 justify-center p-2 ">
        <button></button>
        <button className="bg-blue-500 
            text-white 
            font-medium antialiased rounded-lg p-2
            hover:bg-blue-600"
          onClick={handlePurchaseHistory}>
          Purchase History
        </button>

        <button className="bg-blue-500
            text-white 
            font-medium antialiased rounded-lg p-2
            hover:bg-blue-600"
          onClick={handleEditUserInformation}>
          Edit Information
        </button>

        <button className="border border-gray-400
            font-normal antialiased rounded-lg p-2 hover:border-blue-500"
          onClick={handleMenuClick}>
          Continue Shopping
        </button>
      </div>

    </div>
  )
};

export default UserInfo;