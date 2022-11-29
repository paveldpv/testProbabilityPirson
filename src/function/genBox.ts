import { IBox } from "../interface/Interface"

export const generateBox:(n:number)=>IBox[]=(n:number)=>{  
  let width:number = 62
  let height:number=60
   let arr :number[]=[]
   for (let i = 1; i <= n; i++) {
    arr.push(i)
   }
  let arrRandomSecretNumber=arr.sort(() => Math.random() - 0.5)
      
  let res =[]
  let currentPositionY = 0
  let currentPositionX = 0
  for (let i = 1; i <= n; i++) {       
    let box:IBox={
      open:false,
      number:i,
      secretNumber:Number(arrRandomSecretNumber.shift()),      
      positionX:currentPositionX,
      positionY:currentPositionY 
    }
    currentPositionX = i%10 != 0? width*(i%10):0
    currentPositionY = i%10 == 0?currentPositionY+height:currentPositionY
    
    res.push(box)
    
  }
return res
}
export const boxes = generateBox(100)