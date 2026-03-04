
import React, { useState,useEffect } from "react";
import './../styles/App.css';


const App = () => {
  const [displayData,setDisplayData]=useState(null)
  const [loading,setLoading]=useState(true);
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
    })
  },[]);

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Data Fetched From API</h1>
       <pre>
        {JSON.stringify(displayData,null ,2)}
       </pre>
    </div>
  )
}

export default App
