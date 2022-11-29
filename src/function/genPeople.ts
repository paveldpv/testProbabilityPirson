import { IPeople } from "../interface/Interface"

export const generationPeople :(n:number)=>IPeople[]=(n:number)=>{
  let res=[]
  for (let i = 1; i <= n; i++) {
    let people:IPeople={
      number:i,
      winner:false,
      checkNumber:i      
    }
    res.push(people)
  }
return res
}