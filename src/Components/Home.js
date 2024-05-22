import { useState } from "react"
import { useEffect } from "react"

const Home = ()=>{
  useEffect(()=>{
    fetch("https://academics.newtonschool.co/api/v1/ecommerce/clothes/products",{
      headers:{
        projectId:"bng7dtu7whwk"
      }
    }).then(response=>
      response.json()
    ).then((data)=>console.log(data.data))
  },[])
  return(
    <div>
      <h1>Top Selling</h1>
    </div>
  )
}
export default Home;