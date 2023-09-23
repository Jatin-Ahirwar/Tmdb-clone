import React from 'react'
import { getsingle } from '@/utilities/getsingle'
import Nav from '@/app/components/Nav'
import Nav2 from '@/app/components/Nav2'
import Backdrop from '@/app/components/Backdrop'


export const backdropdata =async ({params}) => {
    const data =await getsingle(params.id) 
    // console.log(data)
  return (
    <div>
        <Nav></Nav>
        <Nav2></Nav2>
        <Backdrop>{data}</Backdrop>
        
    </div>
  )
}

export default backdropdata