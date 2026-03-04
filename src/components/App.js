
import React, { useState,useEffect } from "react";
import './../styles/App.css';


const App = () => {
  const [displayData,setDisplayData]=useState(null)
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(false);
  useEffect(()=>{
    fetch('https://dummyjson.com/products').then((response)=>{
      if(!response.ok){
        throw new Error(`HTTP Error, Status: ${response.status}`)
      }
      return response.json();
    }).then(data=>{
      setTimeout(()=>{
        setDisplayData(data.products);
        setLoading(false);
        console.log(data.products)
      },100)
    }).catch((err)=>{
      setError(true);
      setLoading(false);
    })
  },[]);

  if(loading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>No data found</div>
  }

  return (
    <div>
      Data Fetched From API
       <pre>
        {JSON.stringify(displayData,null ,2)}
       </pre>
    </div>
  )
}

export default App
