
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
      },1000)
    }).catch((err)=>{
      setError(true);
      setLoading(false);
    })
  },[]);

  if(loading){
    return <div>Loading...</div>
  }

  if(error){
    return <h1>No data found</h1>
  }

  return (
    <div>
      
       <pre>
        <h1>Data Fetched From API</h1>
        {JSON.stringify(displayData,null ,2)}
       </pre>
    </div>
  )
}

export default App
