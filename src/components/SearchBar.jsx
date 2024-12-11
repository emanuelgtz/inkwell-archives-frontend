import { useContext, useState } from "react";
import searchIcon from "../assets/searchIcon.png"
import { Context } from "../context/Context";

function SearchBar() {

  const { setItemSearchBar } = useContext(Context);
  const [value, setValue] = useState('')

  const onInputChange = (event) => {
    setItemSearchBar(event.target.value);
    setValue(event.target.value);
  }

  return (
    <div className="flex justify-center p-1.5 w-full bg-blue-500">
      <div className="flex justify-around w-5/6">
        <input type="text" placeholder="Search a book..." 
        className="bg-gray-50 shadow-md
        border-gray-300 text-gray-900 text-sm 
        rounded-xl pl-2 focus:ring-blue-500  block w-full 
        dark:shadow-gray-900 dark:shadow-inner
        dark:bg-slate-700 dark:border-gray-600 
        dark:placeholder-gray-400
        dark:text-white dark:focus:ring-blue-500 
        outline-none"
        onChange={onInputChange}
        value={value} />
        <img src={searchIcon} alt="" className="ml-2 w-9" />
      </div>
    </div>
  )
}

export default SearchBar;