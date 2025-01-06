import { useContext, useState } from "react";
import { Context } from "../context/Context";
import loginImg from "../assets/loginImage.jpg";
import leftArrow from "../assets/left.png"
import plusIcon from "../assets/plus.svg"
import hearthIcon from "../assets/wishList.png"
import shareIcon from "../assets/share.png"
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import MenuBar from "./MenuBar";
import rightArrow from "../assets/rigtharrow.png"
import priceTag from "../assets/pricetag.png"
import stock from "../assets/stock.png"
import upcCode from "../assets/upcCode.png"


// Properties to extract from the bookInfo: bookCategory, bookPrice, bookTitle, bookStock, upcCode

function BookInfo() {
  const navigate = useNavigate();
  
  const { book, setCart, cart } = useContext(Context);
  const [added, setAdded] = useState(false);
  const [whishList, setWishList] = useState(false);

  const handleAddCart = () => {
    setCart((prevItem) => {

      if (prevItem.some((item) =>  item.id === book.id)) {
        return prevItem;
      }
      return [...prevItem, book];
    })

    setAdded(true)

    setTimeout(() => {
      setAdded(false)
    }, 2500);
  };

  const handleAddWishList = () => {
    setWishList(true)
    setTimeout(() => {
      setWishList(false)
    }, 2600);
  }

  return (
    <div className="">
      <SearchBar />

      {/* book data */}
      <div className="flex flex-col shadow-slate-400 rounded-md p-2"
        key={book.id}>

        <img src={loginImg} alt="" className="rounded-2xl" />

        <p className="font-normal  text-2xl w-full text-center">
          {book.bookTitle}
        </p>

        <div className="flex flex-col px-5">

          <div className="flex gap-1 items-center font-sans text-lg" >
            <img src={rightArrow} alt="" className="w-4 h-4" />
            {book.bookCategory}
          </div>

          <div className="flex items-center gap-2 font-sans text-lg m-1" >
            <img src={upcCode} alt="" className="w-6 h-6" />
            <p className="">{book.upcCode}</p>
          </div>

          <div className="flex justify-around items-center font-sans text-lg" >
            <div className="flex justify-center 
            items-center rounded-xl bg-indigo-200 
            p-2">
              <img src={stock} alt="" className="w-6 h-5" />
              <p className="font-normal text-lg text-slate-800">
                {book.bookStock}
              </p>
            </div>

            <div className="flex justify-center items-center 
            rounded-xl bg-green-200  p-2">
              <img src={priceTag} alt="" className="w-5 h-5" />
              <p className="font-normal text-lg text-slate-800">
                {book.bookPrice} $
              </p>
            </div>
          </div>

        </div>
        <div className="flex justify-around mt-3 ">
          <div className="flex flex-col">
            <button className="flex items-center font-semibold
          bg-red-500 hover:bg-red-400 rounded-md px-5 p-2" onClick={handleAddWishList}>
              <p className="text-white pr-2 text-lg">Wish List</p>
              <img src={hearthIcon} alt="" className="w-6" />
            </button>

            <button className="flex items-center justify-center 
            bg-blue-500 p-2 px-5 text-white rounded-md 
            hover:bg-indigo-500 mt-4"
              onClick={() => {
                navigate(-1)
              }}
            >
              <img src={leftArrow} alt="" className="w-5" />
              <p className="pl-2 font-semibold text-lg">Go back</p>
            </button>
          </div>

          <div className="flex flex-col">
            <button className="flex justify-around items-center 
            p-2 px-5 font-semibold
          bg-red-500 hover:bg-red-400 rounded-md">
              <p className="text-white text-lg">Share</p>
              <img src={shareIcon} alt="" className="w-7" />
            </button>

            <button className="flex  justify-around items-center 
            p-2 px-5 bg-indigo-500 font-semibold
            text-white rounded-md hover:bg-indigo-400 mt-4"
              onClick={handleAddCart}>
              <p className="text-white mr-2 text-lg">Add Cart</p>
              <img src={plusIcon} alt="" className="w-7" />
            </button>
          </div>
        </div>

        <div>
          {
            added ?
              <div className="flex justify-center rounded-md">
                <span className="border border-green-700 bg-green-200 text-green-700 rounded-md px-5 m-2">
                  Successfully Added!
                </span>
              </div>
              : null
          }
          {
            whishList ?
              <div className="flex justify-center mt-1">
                <div className="flex items-center border border-red-600 bg-red-300 rounded-full p-1 animate-bounce">
                  <img src={hearthIcon} alt="" className="w-5 h-5" />
                </div>
              </div>
              : null
          }
        </div>

      </div>
      <MenuBar />
    </div>
  )
}

export default BookInfo;