import React from 'react'
import { IPeople } from '../interface/Interface'
import {generationPeople} from './../function/genPeople'
import People from './People'

type Props = {
  people:IPeople[]
}

export default function Pirson({people}: Props) {
  return (
    <div className='w-1/3 border-2 border-solid border-gray-800 rounded-md gridHundred hover:scale-125 hover:bg-zinc-600 transition-all delay-75'>
      {people.map(people=>{
        return(
          <People key={people.number} number={people.number} winner={people.winner} checkNumber={people.checkNumber}/>
        )
      })}
    </div>
  )
}