import { IBox } from "../interface/Interface"

export const generateBox:(n:number)=>IBox[]=(n:number)=>{
  const arrRandomSecretNumber= Array(n).fill(Number).map(() => Math.round(Math.random() * n))
   
  let res =[]
  for (let i = 0; i < n; i++) {
    let box:IBox={
      open:false,
      number:i,
      secretNumber:Number(arrRandomSecretNumber.shift())
    }
    res.push(box)
  }
return res.sort(()=>Math.random()-0.5)
}