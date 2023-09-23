"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
const Backdrop =async (data) => {
    const movie =await data
    // const content = (movie.children)
    console.log(movie)
    // console.log(result)
    // const getmovie = await result

    // console.log(getmovie)
    // const [movie, setmovie] = useState([])
    // setmovie([...result])
    // setmovie([...result.children])
    // console.log(final)
  return (
    <div className='backdrop'>
            <img className='backdropimg' src={"https://image.tmdb.org/t/p/original/" + movie.children.backdrop_path} alt="" />
        <div className='moviedump'>
            <img className='cardimg' src={"https://image.tmdb.org/t/p/original/" + movie.children.poster_path} alt="" />
        </div>
            <div className='backdropright'>
                <div id='toppp'>
                    <h1 className='titlee'>{movie.children.title} <span>({movie.children.release_date})</span></h1>
                    {/* <p className='desc'>{movie.children.tagline}</p> */}
                </div>
                <div className='tasks'>
                    <div className='rating'>
                        60 <span>%</span>
                    </div>
                    <h3 className='hh'>user score</h3>
                    <div className='div'>
                        <div className='circle'><i class="ri-menu-fold-fill"></i></div>
                        <div className='circle'><i class="ri-heart-fill"></i></div>
                        <div className='circle'><i class="ri-battery-saver-fill"></i></div>
                        <div className='circle'><i class="ri-star-s-fill"></i></div>
                        <Link className='l' href=""><i class="ri-play-mini-fill"></i> Play Trailer</Link>
                    </div>
                </div>
                <p>{movie.children.tagline}</p>
                <h3 className='overview'>Overview</h3>
                <h4>{movie.children.overview}</h4>
                <div className='two'>
                    <div className='writer'>
                        <h3>Scott Waugh</h3>
                        <p>Character</p>
                    </div>
                    <div className='writer'>
                        <h3>Scott Waugh</h3>
                        <p>Character</p>
                    </div>
                </div>
           <div></div>


        </div>
    </div>
  )
}

export default Backdrop