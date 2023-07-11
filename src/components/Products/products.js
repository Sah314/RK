import React from 'react';

import { useEffect,useState } from "react";


function Products(){
    let [fetcheddata , updateFetcheddata] =useState([]);
     let api= `http://localhost:4000/products`
    //let api= `https://rkindustriesapi.onrender.com/products`
    useEffect(()=>{
        (async ()=>{
          let data= await fetch(api).then(res=>res.json());
          updateFetcheddata(data);
          console.log(data);
        })()  

      },[api])


    return(
        <div>
            <h2 className="mr-3 mb-4 py-4 font-extrabold text-4xl text-[#f59e0b] dark:text-[#7d77f2]" id='products'>Our Products</h2>
        <div className="grid grid-cols-3 gap-4 my-4">
            {
                fetcheddata.map((product)=>{
                    return(
                        <div key={product.id} className="p-3 flex flex-col dark:bg-[#1e0036] ">

                          <img src={product.image} alt="product" className="rounded-lg"
                          />

                          <h3 className=" text-[#f59e0b] dark:text-[#7d77f2]">{product.name}</h3>
                          <h3 className=" text-[#f59e0b] dark:text-[#7d77f2]">{product.type}</h3>
                      </div> 
                    )
                })
            }
        
        </div>
        </div> 
    );
}


export default Products;