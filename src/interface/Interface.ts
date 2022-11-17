export interface IPeople{
  number:number,
  winner:boolean,
  checkNumber:number,
  positionX?:number,
  positionY?:number 
}

export interface IBox {
  open:boolean,
  number?:number,
  secretNumber:number,
  positionX?:number,
  positionY?:number 
}