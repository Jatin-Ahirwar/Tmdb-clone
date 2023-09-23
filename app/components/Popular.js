import React, { useEffect, useState } from 'react'
import axios from '@/utilities/axios'
import Link from 'next/link'
const Api_key = "75842d12fc750d152abce067177a2e53"


const Popular = () => {
    const [movies, setmovies] = useState([])
    const getmovies =async ()=>{
        try {
            const { data } =await axios.get(`/movie/popular?api_key=${Api_key}`) 
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getmovies()
    },[])
    console.log(movies)
  return (
    <div className='Latest-Trailers'></div>
  )
}

export default Popular