import React, { useEffect, useState } from 'react'


import { IBox } from '../interface/Interface'
import openBox from './../source/openBox.png'
import closeBox from './../source/closeBox.png'
type Props = {}

export default function Box({number,open,secretNumber}: IBox) {
 // const [openB,SetOpenB]=useState(open)
  useEffect(()=>{
    
    
  },[])

  return (
    <div 
     className='box' data-key={!open?number:secretNumber}>
      <img src={open?openBox:closeBox} alt="" />
    </div>
  )
}