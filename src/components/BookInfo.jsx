import { useContext, useState } from "react";
import { Context } from "../context/Context";
import loginImg from "../assets/loginImage.jpg";
import leftArrow from "../assets/left.png"
import plusIcon from "../assets/plus.png"
import wishList from "../assets/wishList.png"
import shareIcon from "../assets/share.png"
import { useNavigate } from "react-router-dom";
// Properties to extract from the bookInfo: bookCategory, bookPrice, bookTitle, bookStock, upcCode


function BookInfo() {
  const { bookInfo } = useContext(Context);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center h-screen border-2 border-green-400">

      {/* book data */}
      <div className="flex flex-col  border-red-400 shadow-slate-400 rounded-md p-2"
        key={bookInfo.id}>
        <img src={loginImg} alt="" className="rounded-lg" />

        <p className="font-mono mt-2 text-xl w-full text-center">
          {bookInfo.bookTitle}
        </p>

        <div className="flex flex-col border-2 mt-3 px-5">
          <p className="font-sans text-lg" >Category: {bookInfo.bookCategory}</p>
          <p className="font-sans text-lg" >Amount: {bookInfo.bookStock}</p>
          <p className="font-sans text-lg" >upc code: {bookInfo.upcCode}</p>
          <p className="font-sans text-lg" >Price: {bookInfo.bookPrice} $</p>
        </div>

        <div className="flex justify-around mt-3 border-2">
          <div className="flex flex-col">
            <button className="flex items-center font-semibold
          bg-red-500 hover:bg-red-400 rounded-md px-5 p-3">
              <p className="text-white pr-2 text-lg">Wish List</p>
              <img src={wishList} alt="" className="w-6" />
            </button>

            <button className="flex items-center justify-center bg-blue-600 p-3 px-5
            text-white rounded-md hover:bg-indigo-500 mt-4"
              onClick={() => {
                navigate(-1)
              }}
            >
              <img src={leftArrow} alt="" className="w-5" />
              <p className="pl-2 font-semibold text-lg">Go back</p>
            </button>
          </div>

          <div className="flex flex-col">
            <button className="flex justify-around items-center p-3 px-5 font-semibold
          bg-red-500 hover:bg-red-400 rounded-md">
              <p className="text-white text-lg">Share</p>
              <img src={shareIcon} alt="" className="w-7" />
            </button>

            <button className="flex  justify-around items-center p-3 px-5 bg-amber-400 font-semibold
            text-white rounded-md hover:bg-amber-300 mt-4">
              <p className="text-white mr-2 text-lg">Add Cart</p>
              <img src={plusIcon} alt="" className="w-7" />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BookInfo;