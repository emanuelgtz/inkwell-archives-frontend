import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { Context } from "../context/Context";
import loginImage from "../assets/loginImage.jpg"


// Cart function that receives the id of the user is purchasing
export default function Cart() {
  const date = new Date().toISOString().slice(0, 10);
  const { bookCart, loggedUserId, setLoggedUserId } = useContext(Context);
  // items we need to render in the cart
  const [cart, setCart] = useState([]);
  const [orderCompleted, setOrderCompleted] = useState(false);



  // Check for the presence of the items and updates their quantity in case it is needed
  useEffect(() => {
    // bookCart is the item we want to add 
    if (bookCart) {
      const isBookDuplicate =
        cart.find((item) => item.book.id === bookCart.id);

      if (isBookDuplicate) {
        setCart(
          // if the item is already in the array, just update the quantity
          cart.map((item) => item.book.id === bookCart.id
            // Update the quantity
            ? { ...item, quantity: item.quantity + 1 }
            : item
          )
        )
      } else {
        // Adds new item to the cart
        setCart([...cart, { book: bookCart, quantity: 1 }]);
      }
    }
  }, [bookCart]);

  useEffect(() => {

    if (orderCompleted) {
      const timeOut = setTimeout(() => {
        setOrderCompleted(false);
      }, 2500);

      // Clean function
      return () => clearTimeout(timeOut);
    }

  }, [orderCompleted]);

  // POST Request
  const handleOrder = async (e) => {
    e.preventDefault();

    try {

      const purchaseOrder = {
        purchaseDate: date,
        purchaseUser: { loggedUserId },
        purchaseQuantity: getQuantity(),
        books: cart.map(item => ({ id: item.book.id }))
      }

      const response = await fetch('http://localhost:8080/purchases', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(purchaseOrder)
      })

      setCart([]);
      setOrderCompleted(true);

      if (!response.ok) {
        throw new Error('Response was not work')
      }

    } catch (error) {
      throw new Error('Error from the catch')
    }
  };

  const updateQuantity = (bookId, newQuantity) => {
    setCart(
      cart.map((bookItem) => bookItem.book.id === bookId
        ? {
          ...bookItem, quantity: Math.max(0, newQuantity)
        } : bookItem)
    );
  };

  const getQuantity = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const removeBook = (bookId) => {
    setCart(
      cart.filter((item) => item.book.id !== bookId)
    );
  };

  return (
    <div className="bg-white h-screen p-2 flex flex-col gap-2">

      <h1 className="text-center text-lg font-normal antialiased p-1">Cart</h1>

      {/* ---------------- */}
      <div className="flex">
        <div className="flex flex-col rounded-xl bg-gray-100 pb-3 gap-2">
          {
            cart.length === 0
              ? (
                <p>The Purchase Cart is Empty!</p>
              )
              : (

                <div className="">
                  {
                    cart.map((book) => {

                      const { bookItem, quantity } = book;
                      return (
                        <div key={bookItem.id}>

                          <div className="rounded-t-xl">
                            <img src={loginImage} alt="" className="rounded-t-xl" />
                          </div>

                          <div className="flex gap-4 rounded-md flex-col">
                            <div className="flex justify-around">
                              <p className="font-normal text-lg antialiased">{bookItem.bookTitle}</p>
                              <p className="font-light text-xl antialiased">{bookItem.bookPrice} $</p>
                            </div>

                            <div className="flex justify-center">
                              <button className="bg-red-500 rounded-md 
                              p-1 px-4 text-white text-base 
                              font-medium antialiased">
                                Remove
                              </button>
                            </div>

                            <div className="flex justify-center">
                              <div className="flex gap-1 border border-gray-400 rounded-md ">
                                <button className="px-3 p-0.5">-</button>
                                <p className="px-3 p-0.5">{quantity}</p>
                                <button className="px-3 p-0.5">+</button>
                              </div>
                            </div>

                          </div>

                        </div>

                      )

                    })
                  }
                </div>
              )
          }
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

            <button className="bg-blue-500 
            text-white 
            font-medium antialiased rounded-lg p-2
            hover:bg-blue-600">
              Checkout
            </button>

            <button className="border border-gray-400 
            font-normal antialiased rounded-lg p-2 hover:border-blue-500">
              Continue Shopping
            </button>

          </div>

        </div>
      </div>

    </div>
  )
}
