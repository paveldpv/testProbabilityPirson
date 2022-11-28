export const stepNoStrategy =(n:number):number[]=>{
   let res:number[]=[]
   for (let i = 1; i <= n; i++) {
      res.push(i)  
   }
   return res.sort(() => Math.random() - 0.5)
}