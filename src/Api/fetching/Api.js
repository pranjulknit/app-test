
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Apicard from "../Apicard/Apicard";
import "./Api.css";

function Api(){

    const[products,setInput] = useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((response)=>response.json())
        .then((data)=>setInput(data?.products))
        .catch((err)=>console.log(err));
    },[]);

    return (
        <div className="api">
           {
            products?.map((input,key)=>(
                <Apicard image={input.images[0]} brand={input.brand} title={input.title} rating={input.rating} description={input.description} price={input.price} stock={input.stock}/> 

            ))
           } 
                
        </div>
      );

}


export default Api;