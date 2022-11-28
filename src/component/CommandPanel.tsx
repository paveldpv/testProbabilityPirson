import React from 'react'
import Regulations from './Regulations'

type Props = {
  step:()=>void,
  counter:number,
  strategy?:boolean,
  dispatchStrategy:React.DispatchWithoutAction,
  speed:number,
  setSpeed:React.Dispatch<React.SetStateAction<number>>,
  autoStep:()=>void
}

export default function ComandPanel({step,counter,dispatchStrategy,strategy,setSpeed,speed,autoStep}: Props) {
  
  

  return (
    <div className='flex flex-row gap-3'>
      <div className=' h-1/6 w-1/3 bg-slate-400  flex flex-col gap-2 my-2'>
      <button onClick={step}
      className='p-2 font-bold text-xs rounded-sm bg-green-900  border-2 border-black border-solid mx-6 my-2'>
        NEXT  STEP
      </button>
      <input type="text" placeholder='speed' className='mx-6 p-2 rounded-sm' 
      value={speed} onChange={(e=>{setSpeed(parseInt(e.target.value))})}/>
      <button onClick={autoStep}
      className='p-2 font-bold text-xs rounded-sm bg-green-900  border-2 border-black border-solid mx-6'>
        AUTO PLAY
      </button>
      </div>
      <fieldset className='flex flex-col gap-4 text-xl p-2 border-2 border-solid border-black rounded-sm my-2 w-1/3 text-center'>
        <legend>Number of Current prisoner attempts</legend>
        <hr />
        <div  className=' underline text-4xl'>
          {counter}
        </div>
      </fieldset>
      <fieldset className='flex flex-col border-2 border-solid border-black rounded-sm my-2 w-1/3 text-xl text-center'>
        <legend>Change variant</legend>        
        <div className=' flex flex-row justify-items-start px-4 gap-4'>
          <input type="radio" name="strategy" id="strategy" checked={strategy}
          onChange={()=>dispatchStrategy()}/>
          <label htmlFor="strategy">Strategy</label>
        </div>
        <div className=' flex flex-row justify-items-start px-4 gap-4'>
          <input type="radio" name="strategy" id="NotStrategy" checked={!strategy}
            onChange={()=>dispatchStrategy()}
           />
          <label htmlFor="NotStrategy">No Strategy</label>
        </div>
       
      </fieldset>
    </div>
  )
}