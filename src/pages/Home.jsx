import { useContext, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { Context } from "../context/Context";
import loginImg from "../assets/loginImage.jpg";
import { useNavigate } from "react-router-dom";


function Home() {
  // all the books, it does not matter the category
  const [items, setItems] = useState([])
  const [category, setCategory] = useState("");
  const [counter, setCounter] = useState(1);
  const { bookInfo, setBookInfo } = useContext(Context);


  const navigate = useNavigate();

  const handleBookInfoClick = (book) => {
    setBookInfo(book)
    navigate("/login/book-info")
  }

  // Fetching all the books
  useEffect(() => {

    const fetchBooks = async () => {
      try {
        const resp =
          await fetch(`http://localhost:8080/books`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });

        const json = await resp.json();
        setItems(json);

        console.log(json)

      } catch (error) {
        console.log("There was an error when fetching the data")
      }
    }

    fetchBooks();
  }, []);




  return (
    <div className="">

      <h1 className="text-center">Home Component</h1>

      {/* Search bar */}

      <h4 className="text-center">Card design</h4>

      <div className="flex flex-wrap justify-around border-2 border-purple-500">

        {/* card-design for books */}
        {
          items.map((book) => (
            <div className="
            flex flex-col shadow-md
            shadow-slate-400 shadow-gray w-10/12
              rounded-md 
              mt-2 mb-2 p-3"
              key={book.id}>

              <img src={loginImg} alt="" className="rounded-lg" />
              <p className="font-mono text-sm w-full text-center" >
                {book.bookTitle}
              </p>
              <p className="font-sans text-sm" >{book.bookPrice} $</p>

              <p onClick={() => {
                handleBookInfoClick(book)
              }}
                className=" border-2
              font-sans text-sm border-red-400 text-center w-full">
                More information
              </p>

            </div>
          ))
        }
      </div>
    </div>
  )
}


export default Home;