import React from 'react'
import { useEffect } from 'react'


export default function Home() {

  useEffect(() => {
    
    const getBackend = async () => {
      await fetch("http://localhost:5000/hello", {
        method: "GET",
        credentials: "include"
      }).then(res => res.json()).then(data => console.log(data))
    }


    getBackend()


  }, [])


  return (
    <div>This is homepage



    </div>
  )
}
