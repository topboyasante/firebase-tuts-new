import React, { useEffect, useState } from 'react'
import Auth from './assets/components/Auth'
import {getDocs,collection} from "firebase/firestore"

import { db } from './assets/config/FirebaseConfig'

function App() {

  const [reviewsList,setReviewsList] =useState([])

  const reviewsCollectionRef = collection(db, "reviews")
  

  useEffect(()=>{
    async function getReviewsList(){
      // Read Data
      try{
        const data = await getDocs(reviewsCollectionRef)
        const filteredData = data.docs.map((doc)=>({...doc.data(), id:doc.id}))
        setReviewsList(filteredData)
      }
      catch(err){
        alert(err)
      }
      // Set Reviews state
    }
    getReviewsList()
  },[])

  return (
    <main>
      <Auth/>

      <section>
        {reviewsList.map((item)=>{
          return(
            <div key={item.id}>
              <p>{item.restaurant}: {item.review}</p>
              <p>{item.rating}</p>
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default App