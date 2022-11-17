import CommandPanel from "./component/CommandPanel";
import FieldStart from './component/FieldStart'
import Room from "./component/Room";
import WaitingRoom from "./component/WaitingRoom";
import TotalScore from "./component/TotalScore";

import {generationPeople}  from './function/genPeople'
import {generateBox} from './function/genBox'
import './App.css'

import { IPeople,IBox } from "./interface/Interface";

import { useEffect, useState } from "react";

function App() {  

function timer(ms:number) {
 return new Promise(res => setTimeout(res, ms));
}
const checkedBox:(people:IPeople,box:IBox[],counter:number)=>void=(people,box,counter=0)=>{
  if(people.number==box[people.checkNumber-1].secretNumber){
    people.winner=true
    setWaitingRoom([...waitingRoom,people])    
  }
  else{      
    
    people.checkNumber=box[people.checkNumber-1].secretNumber        
    console.log(`people`,people);
    
    counter++
    counter!=50?checkedBox(people,box,counter):setWaitingRoom([...waitingRoom,people])
  }
}

  const [people,setPeople]=useState<IPeople[]>([])
  const [boxes,setBoxes]=useState<IBox[]>([])
  const [currentHuman,setCurrentHuman]=useState<IPeople>()
  const [counter,setCounter]=useState(0)
  const [waitingRoom,setWaitingRoom]=useState<IPeople[]>([])

  useEffect(()=>{
    setPeople(generationPeople(100));
    setBoxes(generateBox(100))
    console.log(`generate`);
    
  },[])


const step:(()=>void)=()=>{
  let currentHuman = people.shift()    
  setCurrentHuman(currentHuman)
  let currentBox = boxes
  if(currentHuman){
    checkedBox(currentHuman,boxes,0)
    // for (let i = 0; i < 50; i++) {
    //   let humanNumber=currentHuman.number
      
    // }
    // temp[human.number-1].open=true
    // if(human.number==temp[human.number].secretNumber){
    //   setWaitingRoom([...waitingRoom,human])
    // }

  }
  // console.log(currentBox);  
  // setBoxes(currentBox)
  
}


  return (
    <div className=" bg-slate-400 w-full h-screen overflow-hidden">
      <CommandPanel step={step} counter={counter}/>    
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
