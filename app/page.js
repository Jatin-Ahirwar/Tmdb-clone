"use client"
import React from 'react'
import Link from 'next/link'
import Popular from "@/app/components/Popular"
import Trending from "@/app/components/Trending"
import Nav from './components/Nav'


const page = () => {
    return (
      <div className='main'>
        <Nav></Nav>

        <div className='page'>
          <div className='upper'>
          <div className='mainimg'>
            <img className='bgimg' src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/zZ3Cv1lz61V9OXXvtCPVtCFTVP7.jpg" alt="" />
              <div className='overlay'></div>
              <div className='headingdiv'>
                  <h1>Welcome.</h1>
                  <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
              </div>
          <div className='searchbar'>
              <input className='searchinput' type="text" placeholder='Search for a movie,tv show,person......'/>
              <div className='searchbtn'>Search</div>
          </div>
          </div>
          </div>
          <div className='contentbar'>
            <div className='trending'>
              <h2>Trending</h2>
              <div className='slider'>
                  <Link id='one' className='today'  href=""><div  id='today'>Today</div></Link>
                  <Link id='to' className='today'  href=""><div  id='this-week'>This Week </div></Link>
              </div>
            </div>
          <Trending></Trending>
          </div>
          <Popular></Popular>
        </div>
      </div>
    )    
}

export default page