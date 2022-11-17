import { IBox } from "../interface/Interface"

export const generateBox:(n:number)=>IBox[]=(n:number)=>{  
   let arr :number[]=[]
   for (let i = 1; i <= n; i++) {
    arr.push(i)
   }
  let arrRandomSecretNumber=arr.sort(() => Math.random() - 0.5)
   //console.log(arrRandomSecretNumber.sort());
   
  let res =[]
  for (let i = 1; i <= n; i++) {
    let box:IBox={
      open:false,
      number:i,
      secretNumber:Number(arrRandomSecretNumber.shift())
    }
    res.push(box)
  }
return res
}