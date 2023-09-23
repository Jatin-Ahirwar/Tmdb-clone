import Link from 'next/link'
import React from 'react'
const Nav2 = () => {
  return (
    <div className='nav2'>
        <Link className='Link' href="">Overview<i class="ri-arrow-down-s-fill"></i></Link>
        <Link className='Link' href="">Media<i class="ri-arrow-down-s-fill"></i></Link>
        <Link className='Link' href="">Fandom<i class="ri-arrow-down-s-fill"></i></Link>
        <Link className='Link' href="">Share<i class="ri-arrow-down-s-fill"></i></Link>
    </div>
  )
}

export default Nav2