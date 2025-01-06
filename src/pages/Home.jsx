import { useContext, useEffect, useState, useMemo } from "react";
import SearchBar from "../components/SearchBar";
import { Context } from "../context/Context";
import loginImg from "../assets/loginImage.jpg";
import { useNavigate } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import priceTag from "../assets/pricetag.png"
import { useFetch } from "../hooks/useFetch";

function Home() {

  const {
    setLoggedUserId,
    setBook, itemSearchBar, setUserInfo
  } = useContext(Context);

  const navigate = useNavigate();
  const { items } = useFetch('http://localhost:8080/books');

  let userEmail = localStorage.getItem('userEmail');

  const handleBookInfoClick = (book) => {
    setBook(book)
    navigate("/login/book-info")
  };


  // TODO: Refactor this by using useFetch
  useEffect(() => {

    const fetchUserId = async () => {
      try {
        const resp = await fetch(`http://localhost:8080/userinfo/${userEmail}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const json = await resp.json();
        setLoggedUserId(json.id);
        setUserInfo(json)
        

      } catch (error) {
        console.log("There was an error in fetching the id of the logged user")
      }
    }

    fetchUserId();
  }, [userEmail]);


  return (
    <div className="mb-12">
      <SearchBar />
      {
        !itemSearchBar ?
          <div className="overflow-scroll">

            <div className="">
              <p className="text-lg text-center font-normal">
                Mystery
              </p>
            </div>

            <div className="flex overflow-x-scroll justify-around m-1">
              {
                items.filter((books) => books.bookCategory == "Mystery").map((book) => (
                  <div className="flex flex-col items-center justify-between 
                  shrink-0 w-64 m-2 shadow-md shadow-slate-400 shadow-gray
                  rounded-2xl " key={book.id}>
                    <div className="flex flex-col rounded-2xl">
                      <img src={loginImg} alt="#" className="rounded-2xl" />
                      <p className="font-medium text-lg text-center text-slate-800" >
                        {book.bookTitle}
                      </p>
                    </div>

                    <div className="flex flex-col justify-center gap-2 items-center h-full rounded-xl" >
                      <div className="flex justify-center w-3/5 rounded-xl bg-green-300">
                        <img src={priceTag} alt="" className="w-6 h-6" />
                        <p className="font-normal text-lg text-slate-800">{book.bookPrice} $</p>
                      </div>

                      <div className="bg-blue-500 hover:bg-blue-500 p-2 px-3 rounded-xl mb-2">
                        <p className="font-semibold text-normal text-center text-white cursor-pointer"
                          onClick={() => { handleBookInfoClick(book) }}>
                          More Information
                        </p>
                      </div>

                    </div>

                  </div>
                ))
              }
            </div>


            <div>
              <p className="text-lg text-center font-normal">Historical Fiction</p>
            </div>
            <div className="flex overflow-x-scroll justify-around m-1">
              {
                items.filter((books) => books.bookCategory == "Historical Fiction").map((book) => (
                  <div className="flex flex-col items-center 
                  justify-between shrink-0 w-64 m-2 shadow-md 
                  shadow-slate-400 shadow-gray
                  rounded-2xl " key={book.id}>

                    <div className="flex flex-col rounded-2xl">
                      <img src={loginImg} alt="#" className="rounded-2xl" />
                      <p className="font-medium text-lg text-center text-slate-800" >
                        {book.bookTitle}
                      </p>
                    </div>

                    <div className="flex flex-col justify-around items-center h-full rounded-xl" >
                      <div className="flex justify-center w-3/5 rounded-xl  bg-green-300">
                        <img src={priceTag} alt="" className="w-6 h-6" />
                        <p className="font-normal text-lg text-slate-800">{book.bookPrice} $</p>
                      </div>

                      <div className="bg-blue-500 hover:bg-blue-500 p-2 px-3 rounded-xl mb-2">
                        <p className="font-semibold text-normal text-center text-white cursor-pointer"
                          onClick={() => { handleBookInfoClick(book) }}>
                          More Information
                        </p>
                      </div>

                    </div>

                  </div>
                ))
              }
            </div>

            <div>
              <p className="text-lg text-center font-normal">Traveling</p>
            </div>
            <div className="flex overflow-x-scroll justify-around m-1">
              {
                items.filter((books) => books.bookCategory == "Travel").map((book) => (
                  <div className="flex flex-col items-center 
                  justify-between 
                  shrink-0 w-64 m-2 shadow-md shadow-slate-400 
                  shadow-gray rounded-2xl " key={book.id}>

                    <div className="flex flex-col rounded-2xl">
                      <img src={loginImg} alt="#" className="rounded-2xl" />
                      <p className="font-medium text-lg text-center text-slate-800" >
                        {book.bookTitle}
                      </p>
                    </div>

                    <div className="flex flex-col justify-around items-center h-full rounded-xl" >
                      <div className="flex justify-center w-3/5 rounded-xl 
                      bg-green-300">
                        <img src={priceTag} alt="" className="w-6 h-6" />
                        <p className="font-normal text-lg text-slate-800">
                          {book.bookPrice} $
                        </p>
                      </div>

                      <div className="bg-blue-500 hover:bg-blue-500 p-2 
                      px-3 rounded-xl mb-2">
                        <p className="font-semibold text-normal text-center text-white cursor-pointer"
                          onClick={() => { handleBookInfoClick(book) }}>
                          More Information
                        </p>
                      </div>

                    </div>

                  </div>
                ))
              }
            </div>

            <div>
              <p className="text-lg text-center font-normal">Science</p>
            </div>
            <div className="flex overflow-x-scroll justify-around m-1">
              {
                items.filter((books) => books.bookCategory == "Science").map((book) => (
                  <div className="flex flex-col 
                  items-center justify-between 
                  shrink-0 w-64 m-2 shadow-md 
                  shadow-slate-400 shadow-gray
                  rounded-2xl " key={book.id}>

                    <div className="flex flex-col rounded-2xl">
                      <img src={loginImg} alt="#" className="rounded-2xl" />
                      <p className="font-medium text-lg text-center text-slate-800" >
                        {book.bookTitle}
                      </p>
                    </div>

                    <div className="flex flex-col justify-around items-center h-full rounded-xl" >
                      <div className="flex justify-center w-3/5 rounded-xl  
                      bg-green-300">
                        <img src={priceTag} alt="" className="w-6 h-6" />
                        <p className="font-normal text-lg text-slate-800">
                          {book.bookPrice} $
                        </p>
                      </div>

                      <div className="bg-blue-500 hover:bg-blue-500 p-2 
                      px-3 rounded-xl mb-2">
                        <p className="font-semibold text-normal 
                        text-center text-white cursor-pointer"
                          onClick={() => { handleBookInfoClick(book) }}>
                          More Information
                        </p>
                      </div>

                    </div>

                  </div>
                ))
              }
            </div>

            <div>
              <p className="text-lg text-center font-normal">Music</p>
            </div>
            <div className="flex overflow-x-scroll justify-around m-1">
              {
                items.filter((books) => books.bookCategory == "Music").map((book) => (
                  <div className="flex flex-col items-center 
                  justify-between shrink-0 w-64 m-2 shadow-md 
                  shadow-slate-400 shadow-gray
                  rounded-2xl " key={book.id}>

                    <div className="flex flex-col rounded-2xl">
                      <img src={loginImg} alt="#" className="rounded-2xl" />
                      <p className="font-medium text-lg text-center text-slate-800" >
                        {book.bookTitle}
                      </p>
                    </div>

                    <div className="flex flex-col justify-around items-center h-full rounded-xl" >
                      <div className="flex justify-center w-3/5 rounded-xl  
                      bg-green-300">
                        <img src={priceTag} alt="" className="w-6 h-6" />
                        <p className="font-normal text-lg text-slate-800">
                          {book.bookPrice} $
                        </p>
                      </div>

                      <div className="bg-blue-500 hover:bg-blue-500 
                      p-2 px-3 rounded-xl mb-2">
                        <p className="font-semibold text-normal text-center
                        text-white cursor-pointer"
                          onClick={() => { handleBookInfoClick(book) }}>
                          More Information
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

            <div className="">
              <p className="text-lg font-normal text-center">All Books</p>
            </div>
            <div className="flex overflow-x-scroll gap-1 justify-around m-1">
              {
                items.map((book) => (
                  <div
                    className="flex flex-col items-center justify-between 
                    shrink-0 w-64 m-2 shadow-md shadow-slate-400 shadow-gray
                    rounded-2xl " key={book.id}>


                    <div className="flex flex-col rounded-2xl">
                      <img src={loginImg} alt="#" className="rounded-2xl" />
                      <p className="font-medium text-lg text-center text-slate-800" >
                        {book.bookTitle}
                      </p>
                    </div>

                    <div className="flex flex-col justify-around items-center h-full rounded-xl" >
                      <div className="flex justify-center w-3/5 rounded-xl bg-green-300">
                        <img src={priceTag} alt="" className="w-6 h-6" />
                        <p className="font-normal text-lg text-slate-800">
                          {book.bookPrice} $
                        </p>
                      </div>

                      <div className="bg-blue-500 hover:bg-blue-500 p-2 px-3 rounded-xl mb-2">
                        <p className="font-semibold text-normal text-center 
                        text-white cursor-pointer"
                          onClick={() => { handleBookInfoClick(book) }}>
                          More Information
                        </p>
                      </div>

                    </div>

                  </div>
                ))
              }
            </div>

          </div>
          : items.filter((book) => book.bookTitle.includes(itemSearchBar.trim())).map((filteredBook) => (
            <div
              className="flex flex-col items-center justify-between 
                  shrink-0 w-62 m-4 shadow-md shadow-slate-400 shadow-gray
                  rounded-2xl "
              key={filteredBook.id}>


              <div className="flex flex-col rounded-2xl">
                <img src={loginImg} alt="#" className="rounded-2xl" />
                <p className="font-medium text-lg text-center text-slate-800" >
                  {filteredBook.bookTitle}
                </p>
              </div>

              <div className="flex flex-col justify-around gap-1 items-center h-full rounded-xl" >
                <div className="flex justify-center w-3/5 rounded-xl  bg-green-300">
                  <img src={priceTag} alt="" className="w-6 h-6" />
                  <p className="font-normal text-lg text-slate-800">{filteredBook.bookPrice} $</p>
                </div>

                <div className="bg-blue-500 hover:bg-blue-500 p-2 m-2 px-3 rounded-xl">
                  <p className="font-semibold text-normal text-center text-white cursor-pointer"
                    onClick={() => { handleBookInfoClick(filteredBook) }}>
                    More Information
                  </p>
                </div>

              </div>

            </div>
          ))
      }
      <MenuBar />
    </div >
  )
}


export default Home;