import React, { useEffect, useState } from 'react'


import { IBox } from '../interface/Interface'
import openBox from './../source/openBox.png'
import closeBox from './../source/closeBox.png'
type Props = {}

export default function Box({number,open,secretNumber}: IBox) {
  const [openB,SetOpenB]=useState(open)
  useEffect(()=>{
    
    
  },[])

  return (
    <div onClick={()=>SetOpenB(true)}
     className='box' data-key={openB?number:secretNumber}>
      <img src={openB?openBox:closeBox} alt="" />
    </div>
  )
}