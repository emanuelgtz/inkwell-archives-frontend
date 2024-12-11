import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { Context } from "../context/Context";
import loginImage from "../assets/loginImage.jpg"


export default function Cart() {
  const { bookCart } = useContext(Context)
  const [items, setItems] = useState([])

  // values to keep into account: Discount: 3+ 8%, 5+ 10%, 7+ 15%, Tax: 5%, Total: 0
  // Data we must render: bookTitle, price, stock, upcCode, category


  return (
    <div className="bg-white h-screen p-2 flex flex-col gap-2">
      {/* ---------------- */}
      <div className="flex">

        <div className="flex flex-col rounded-xl bg-gray-100 pb-3 gap-2">

          <div className="rounded-t-xl">
            <img src={loginImage} alt="" className="rounded-t-xl" />
          </div>

          <div className="flex gap-4 rounded-md flex-col">
            <div className="flex justify-around">
              <p className="font-normal text-lg antialiased">Title</p>
              <p className="font-light text-xl antialiased">20$</p>
            </div>

            <div className="flex justify-center">
              <button className="bg-red-500 rounded-md p-1 px-4 text-white text-base 
              font-medium antialiased">
                Remove
              </button>
            </div>

            <div className="flex justify-center">
              <div className="flex gap-1 border border-gray-400 rounded-md ">
                <button className="px-3 p-0.5">-</button>
                <p className="px-3 p-0.5">10</p>
                <button className="px-3 p-0.5">+</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* ------------------ */}


      <div className="bg-gray-100 rounded-xl flex justify-center p-2">

        <div className="flex flex-col w-full gap-4">
          <div className="font-normal text-lg antialiased">
            <p className="">Discount</p>
            <p>Tax</p>
            <p>Total</p>
          </div>

          <div className="flex flex-col gap-3">
            <button className="bg-blue-500 text-white font-medium antialiased rounded-lg p-2
            hover:bg-blue-600">
              Checkout
            </button>
            <button className="border border-gray-400 font-normal antialiased rounded-lg p-2 hover:border-blue-500">
              Continue Shopping
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
