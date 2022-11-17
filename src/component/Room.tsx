import React from 'react'
import { IBox, IPeople } from '../interface/Interface'
import {generateBox} from './../function/genBox'
import Box from './Box'
import People from './People'

type Props = {
boxes:IBox[],
currentHuman:IPeople|undefined
}

export default function Room({boxes,currentHuman}: Props) {
 // console.log(generateBox(100));
  
  return (
    <div className='w-1/3 border-2 border-solid border-gray-800 rounded-md gridHundred hover:scale-125 hover:bg-zinc-600 transition-all delay-75'>
      {currentHuman&&<People winner={currentHuman.winner} number={currentHuman?.number} checkNumber={currentHuman.checkNumber}/>}
      {boxes.map(box=>{
        return(<Box key={box.number} open={box.open} number={box.number} secretNumber={box.secretNumber}/> )
      })}
    </div>
  )
}