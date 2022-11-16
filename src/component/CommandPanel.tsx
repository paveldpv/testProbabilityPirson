import React from 'react'
import Regulations from './Regulations'

type Props = {
  step:()=>void
}

export default function ComandPanel({step}: Props) {
  return (
    <div className=' h-1/6 w-1/3 bg-slate-400  flex flex-col gap-2'>
      <button onClick={step}
      className='p-2 font-bold text-xs rounded-sm bg-green-900  border-2 border-black border-solid mx-6 my-2'>
        NEXT  STEP
      </button>
      <input type="text" placeholder='speed' className='mx-6 p-2 rounded-sm'/>
      <button className='p-2 font-bold text-xs rounded-sm bg-green-900  border-2 border-black border-solid mx-6'>
        AUTO PLAY
      </button>
    </div>
  )
}