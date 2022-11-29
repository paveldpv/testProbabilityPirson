import { useEffect, useState,useReducer } from "react";

import CommandPanel from "./component/CommandPanel";
import FieldStart from './component/FieldStart'
import Room from "./component/Room";
import WaitingRoom from "./component/WaitingRoom";
import TotalScore from "./component/TotalScore";

import {generationPeople}  from './function/genPeople'
import {generateBox} from './function/genBox'
import {stepNoStrategy} from "./function/genRandomArr";

import { IPeople,IBox } from "./interface/Interface";

import './App.css'

function App() {  
 
  const checkedBox=async(people:IPeople,box:IBox[],counter:number,speed:number,randomArr?:number[]):Promise<void>=>{
    await new Promise(res=>{
   // let t:number=randomArr?randomArr.shift()||1:people.checkNumber-1
    let openBox = box[people.checkNumber-1]
    setCurrentHuman(prev=>(prev&&{...prev,positionX:openBox.positionX,positionY:openBox.positionY}))
    openBox.open=true 

    // setBoxes(boxes.map((box,index)=>{
    //   if(index==people.checkNumber-1){
    //     return({...box,open:true})    }
    //   else{
    //     return({...box})
    //   }    
    // }))

    if(people.number===openBox.secretNumber){       
        setTimeout(() => {
      res(people.winner=true)    
      //res(setWaitingRoom([...waitingRoom,people]) )     
          waitingRoom.push(people)
      res(setBoxes(boxes.map(box=>({...box,open:false}))))     
      }, speed);   
       
    }
    else{ 
      
      let nextBox:number=randomArr?randomArr.shift()||1:openBox.secretNumber      
      //console.log(nextBox);                
      people.checkNumber=nextBox
      counter++
      setCounter(counter)     
      if(counter!=50){
        setTimeout(() => {
         res(checkedBox(people,box,counter,speed,randomArr)) 
        }, speed);      
      }
      else{
        setTimeout(() => {

      //res(setWaitingRoom([...waitingRoom,people])  ) 
      // let t =[...waitingRoom,people]
      // setWaitingRoom(t)       
      waitingRoom.push(people)
      res(setBoxes(boxes.map(box=>({...box,open:false})))) 
      return
     }, speed);        
      }
      
    }})
  }

  const [people,setPeople]             = useState<IPeople[]>([])
  const [boxes,setBoxes]               = useState<IBox[]>([])
  const [currentHuman,setCurrentHuman] = useState<IPeople>()
  const [counter,setCounter]           = useState(0)
  const [waitingRoom,setWaitingRoom]   = useState<IPeople[]>([])
  const [strategy, dispatchStrategy]   = useReducer(prev=>!prev,true)
  const [speed,setSpeed]               = useState(500)
 // const [randomArr,setRandomArr]       = useState<Number[]>([])

  useEffect(()=>{    
    setPeople(generationPeople(100));
    setBoxes(generateBox(100))    
    //setRandomArr(stepNoStrategy(50))       
    console.log(`generate Human and generate box`);      
  },[])


  
 const step=async():Promise<void> =>{
  
    let currentHuman = people.shift()    
    setCurrentHuman(currentHuman)
    if(!currentHuman){ alert(`end game(=)`)} 
    else if(strategy){
      setCounter(0)
      await checkedBox(currentHuman,boxes,0,speed)   
     
    }
    else{
      setCounter(0)
     await checkedBox(currentHuman,boxes,0,speed,stepNoStrategy(50))
    }  
    
  }

 const autoStep=async():Promise<void>=>{
 // await setInterval(await step)
  for (let i = 0; i < 100; i++) {
    await new Promise(res=>{
      res(step().then(()=>console.log(i)))      
    })
    //await step()
   
    
  }
 }


  return (
    <div className=" bg-slate-400 w-full h-screen overflow-hidden">
      <CommandPanel
       autoStep={autoStep}
       step={step} 
       counter={counter} 
       dispatchStrategy={dispatchStrategy}
       strategy={strategy}
       speed={speed} 
       setSpeed={setSpeed}/>    
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
