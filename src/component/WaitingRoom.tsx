import React from 'react'
import { IPeople } from '../interface/Interface'
import People from './People'
type Props = {
  waitingPeople:IPeople[]

}

export default function WaitingRoom({waitingPeople}: Props) {
  return (
    <div className='w-1/3 border-2 border-solid border-red-200 rounded-md gridHundred'>
      {waitingPeople.map(human=><People key={human.number} number={human.number} winner={human.winner} checkNumber={human.checkNumber}/>)}
    </div>
  )
}