import CommandPanel from "./component/CommandPanel";
import FieldStart from './component/FieldStart'
import Room from "./component/Room";
import WaitingRoom from "./component/WaitingRoom";
import TotalScore from "./component/TotalScore";

import {generationPeople}  from './function/genPeople'
import {generateBox} from './function/genBox'
import './App.css'

import { IPeople,IBox } from "./interface/Interface";

import { useEffect, useState,useReducer } from "react";

function App() {  


  const checkedBox=(people:IPeople,box:IBox[],counter:number,speed:number,strategy:boolean):void=>{
    
    let openBox = box[people.checkNumber-1]
    setCurrentHuman(prev=>(prev&&{...prev,positionX:openBox.positionX,positionY:openBox.positionY}))
    openBox.open=true 

    setBoxes(boxes.map((box,index)=>{
      if(index==people.checkNumber-1){
        return({...box,open:true})    }
      else{
        return({...box})
      }    
    }))

    if(people.number==box[people.checkNumber-1].secretNumber){       
      setTimeout(() => {
      people.winner=true    
      setWaitingRoom([...waitingRoom,people])    
         
      setBoxes(boxes.map(box=>({...box,open:false})))
      }, speed);    
    }
    else{          
      people.checkNumber=box[people.checkNumber-1].secretNumber      
      counter++
      setCounter(counter)     
      if(counter!=50){
        setTimeout(() => {
          checkedBox(people,box,counter,speed,strategy)
        }, speed);      
      }
      else{
        setTimeout(() => {
        setWaitingRoom([...waitingRoom,people])
          
        setBoxes(boxes.map(box=>({...box,open:false})))
        }, 500);        
      }
    }
  }

  const [people,setPeople]             = useState<IPeople[]>([])
  const [boxes,setBoxes]               = useState<IBox[]>([])
  const [currentHuman,setCurrentHuman] = useState<IPeople>()
  const [counter,setCounter]           = useState(0)
  const [waitingRoom,setWaitingRoom]   = useState<IPeople[]>([])
  const [strategy, dispatchStrategy]   = useReducer(prev=>!prev,true)
  const [speed,setSpeed]               = useState(500)

  useEffect(()=>{    
    setPeople(generationPeople(100));
    setBoxes(generateBox(100))      
  },[])

  
 const step:(()=>void)=()=>{
  let currentHuman = people.shift()    
  setCurrentHuman(currentHuman)
  if(!currentHuman){ alert(`end game(=)`)} 
  else if(strategy){
    setCounter(0)
    checkedBox(currentHuman,boxes,0,speed,strategy)
  }
  else{
    console.log(`no strategy`);
  }
}



  return (
    <div className=" bg-slate-400 w-full h-screen overflow-hidden">
      <CommandPanel step={step} counter={counter} dispatchStrategy={dispatchStrategy} strategy={strategy} speed={speed} setSpeed={setSpeed}/>    
      <div className="h-4/6 w-full bg-slate-500 flex gap-2 ">
        <FieldStart people={people}/>
        <Room  boxes={boxes} currentHuman={currentHuman} />
      <WaitingRoom waitingPeople={waitingRoom} />
      </div>    
      <TotalScore/>   
    </div>
  );
}

export default App;
