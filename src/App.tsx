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

  const [people,setPeople]=useState<IPeople[]>([])
  const [boxes,setBoxes]=useState<IBox[]>([])
  const [currentHuman,setCurrentHuman]=useState<IPeople>()

  useEffect(()=>{
    setPeople(generationPeople(100));
    setBoxes(generateBox(100))
  },[])
const step:(()=>void)=()=>{
  let human = people.shift()
  console.log(human);
  
  setCurrentHuman(human)
  console.log(currentHuman);
  
}


  return (
    <div className=" bg-slate-400 w-full h-screen overflow-hidden">
      <CommandPanel step={step}/>    
      <div className="h-4/6 w-full bg-slate-500 flex gap-2 ">
        <FieldStart people={people}/>
        <Room  boxes={boxes} currentHuman={currentHuman} />
      <WaitingRoom />
      </div>    
      <TotalScore/>   
    </div>
  );
}

export default App;
