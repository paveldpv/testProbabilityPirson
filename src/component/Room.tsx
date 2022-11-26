import React, { useEffect }  from 'react'
import { IBox, IPeople } from '../interface/Interface'
import {generateBox} from './../function/genBox'
import Box from './Box'
import People from './People'
import { useState } from 'react'

type Props = {
boxes:IBox[],
currentHuman:IPeople|undefined
}

export default function Room({boxes,currentHuman}: Props) {   
  let style={    
    left:currentHuman?.positionX + `px`,
    top:currentHuman?.positionY + `px`,
  }

  return (
    <div className='w-1/3 border-2  relative border-solid border-gray-800 rounded-md flex flex-wrap hover:scale-125 hover:bg-zinc-600 transition-all delay-75'>
      <div  style={style} className={` absolute z-50 border-2 border-solid border-pink-400 p-2 ${!currentHuman&&`hidden`} transition-all delay-75`}>
        {currentHuman&&<People winner={currentHuman.winner} number={currentHuman?.number} checkNumber={currentHuman.checkNumber}/>}
      </div>
      {boxes.map(box=>{
          return(<Box 
            key={box.number} 
            open={box.open} 
            number={box.number} 
            secretNumber={box.secretNumber}
            positionX={box.positionX}
            positionY = {box.positionY}
            /> )
      })}
    </div>
  )
}