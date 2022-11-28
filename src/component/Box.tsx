import React, { useEffect, useState } from 'react'
import openBox from './../source/openBox.png'
import closeBox from './../source/closeBox.png'

import { IBox } from '../interface/Interface'


type Props = {}

export default function Box({number,open,secretNumber,positionX,positionY}: IBox) {
  let style={
    width:`62.5px`,
    height:`50px`,
    left:positionX + `px`,
    top:positionY+`px`
  }

  
  return (
    <div style={style}
     className={`box`} data-key={!open?number:secretNumber}>
      <img src={open?openBox:closeBox} alt="" />
    </div>
  )
}