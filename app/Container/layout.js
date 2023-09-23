import React from 'react'
import Link from 'next/link'

const layout = ({children}) => {
    return (
        <>
        <div className='main'>
          <div className='nav'>
            <div className='left'>
            <Link href="/"><img className='navlogo' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" /></Link>
            <Link className='link' href="/Container/Movies">Movies</Link>
            <Link className='link' href="/Container/Tvshows">TV Shows</Link>
            <Link className='link' href="#">People</Link>
            <Link className='link' href="">More</Link>
            </div>
            <div className='right'>
            <Link className='link' href=""><i class="ri-add-line"></i></Link>
            <Link className='link' id='en' href="">EN</Link>
            <Link className='link' href="">Login</Link>
            <Link className='link' href="">Join TMDB</Link>
            <Link className='link' href=""><img className='search' src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg" alt="" /></Link>
            </div>
          </div>
        {children}
        </div>
    </>

)
}

export default layout
