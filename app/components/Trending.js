import React, { useEffect, useState } from 'react'
import axios from '@/utilities/axios'
import Link from 'next/link'
const Api_key = "75842d12fc750d152abce067177a2e53"


const Popular = () => {
    const [movies, setmovies] = useState([])
    const getmovies =async ()=>{
        try {
            const { data } =await axios.get(`trending/movie/week?api_key=${Api_key}`) 
            setmovies([...data.results])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getmovies()
    },[])
    console.log(movies)
  return (
    <div className='datadiv'>
                {/* <div  className='boxx'>
                    <div className='percentage'></div>
                    <img className='cardimg' src="https://image.tmdb.org/t/p/original//kHlX3oqdD4VGaLpB8O78M25KfdS.jpg" alt="" />
                    <div className='moviedata'>
                    <h3>movie name</h3>
                    <h4>date</h4>
                    </div>
                </div>         */}
        {movies.length !== 0 && 
        movies.map((movie,index)=>{
            
            return(
                <Link href={`/movie/` + movie.id}>
                <div key={index} className='boxx'>
                    <div className='percentage'>73 <span>%</span></div>
                    <img className='cardimg' src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path} alt="" />
                    <div className='moviedata'>
                    <Link href={"/movie/" + movie.id}>
                    <h3 >{movie.title}</h3>
                    </Link>
                    <h4>{movie.release_date}</h4>
                    </div>
                </div>
               </Link>
            )
        })
        }
    </div>    
  )
}

export default Popular