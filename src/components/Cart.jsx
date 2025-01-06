import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import loginImage from "../assets/loginImage.jpg"
import { useNavigate } from "react-router-dom";


export default function Cart() {
  const navigate = useNavigate();
  const date = new Date().toISOString().slice(0, 10);

  const { loggedUserId , cart, setCart, 
    userInfo, setUserInfo} = useContext(Context);
    
  const [orderComplete, setOrderComplete] = useState(false);

  // Add quantity property to each item (each book)
  useEffect(() => {
    if (cart.length > 0) {
      setCart(
        cart.map((cartItem) => ({
          ...cartItem, quantity: 1
        }))
      )
    }

  }, [])

  // Update quantity of each product
  const handleBookQuantity = (bookId, quantityUpdate) => {
    setCart(
      cart.map((cartItem) => cartItem.id === bookId
        ? {
          ...cartItem,
          quantity: Math.max(1, quantityUpdate)
        }
        : cartItem)
    )
  }

  // Total amount of books will be purchased by the current user
  const handleTotalItems = () => {
    return cart.reduce((totalQuantity, book) => totalQuantity + book.quantity, 0);
  }

  // Get the total price of the purchase
  const handleTotalPrice = () => {
    const price = cart.reduce((sum, book) => {
      const bookPrice = book.quantity * book.bookPrice;
      return sum + parseFloat(bookPrice.toFixed(2));
    }, 0);

    return Number(price.toFixed(2));
  }

  // Removes book from the cart
  const handleRemove = (bookId) => {
    setCart(
      cart.filter((book) => book.id != bookId)
    )
  }

  // POST Request
  const handleOrder = async (e) => {
    e.preventDefault();

    try {

      // This will be stored at Purchase table
      const purchase = {
        purchaseDate: date,
        purchaseUser: loggedUserId,
        purchaseQuantity: handleTotalItems(),
        purchaseTotalPrice: handleTotalPrice(),
        books: cart.map((book) => ({id: book.id})),
      };

      const response = await fetch('http://localhost:8080/purchases', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(purchase)
      });
      setCart([]);

      if (!response.ok) {
        throw new Error('There was an error in the response')
      }

    } catch (error) {
      console.log(error)
    }
  };

  const handleMenuClick = () => {
    navigate("/login/home")
  };

  return (
    <div className="bg-white h-screen p-3 flex flex-col ">
      <h1 className="text-center text-lg font-base antialiased p-1">Cart</h1>

      <div className="flex justify-center">
        <div className="flex flex-col rounded-xl">
          {
            cart.length === 0
              ? (
                <p className="m-1 p-2 bg-gray-100 rounded-xl antialiased">The Purchase Cart is Empty!</p>
              )
              : (
                <div className=""> {
                  cart.map((item) => {
                    // Destructuring 
                    const { bookTitle, bookPrice, id, quantity } = item;
                    
                    return (
                      <div key={id} className="bg-gray-100 mb-4 rounded-xl" >

                        <div className="rounded-t-xl">
                          <img src={loginImage} alt="" className="rounded-t-xl" />
                        </div>

                        <div className="flex gap-3 rounded-md flex-col">
                          <div className="flex items-center flex-col">
                            <p className="font-normal text-xl antialiased">{bookTitle}</p>
                            <p className="font-light text-base antialiased">Price: {bookPrice}  $</p>
                          </div>

                          <div className="flex justify-center">
                            <div className="flex gap-1 border border-gray-400 rounded-md ">
                              <button className="px-3 p-0.5" onClick={() => handleBookQuantity(id, quantity - 1)}>
                                -
                              </button>

                              <p className="px-3 p-0.5">{quantity}</p>

                              <button className="px-3 p-0.5" onClick={() => handleBookQuantity(id, quantity + 1)}>
                                +
                              </button>
                            </div>
                          </div>

                          <div className="flex justify-center mb-3">
                            <button className="bg-red-500 rounded-md 
                              p-1 px-4 text-white text-base 
                              font-medium antialiased"
                              onClick={() => handleRemove(id)}>
                              Remove
                            </button>
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

      <div className="bg-gray-100 rounded-xl flex justify-center p-3">
        <div className="flex flex-col w-full gap-2">
          <div className="font-normal text-lg antialiased">
            <p>Items: {handleTotalItems()}</p>
            <p>Total price: {handleTotalPrice()} $</p>
          </div>

          <div className="flex flex-col gap-4">
            <button className="bg-blue-500
            text-white 
            font-medium antialiased rounded-lg p-2
            hover:bg-blue-600" 
            onClick={handleOrder}>
              Checkout
            </button>

            <button className="border border-gray-400
            font-normal antialiased rounded-lg p-2 hover:border-blue-500" onClick={handleMenuClick}>
              Continue Shopping
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}
