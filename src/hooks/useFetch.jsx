import { useEffect, useState } from "react"
import { data } from "react-router-dom"

export const useFetch = (url) => {

  const [items, setItems] = useState([]);
  
  const fetchItems = async () => {

    try {
      const resp = await fetch(url, {
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

  useEffect(() => {
    // setTimeout(() => {
      fetchItems()
    // }, 1500)
  }, [url])

  return {
    items
  }
}