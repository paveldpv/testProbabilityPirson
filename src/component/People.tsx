import React from 'react'
import {IPeople} from './../interface/Interface'
import peopleImage from './../source/people.png'

export default function People({number,winner}:IPeople) {
  
  return (
    <div className={`people ${winner&&"bg-green-500"}`} data-number={number}>
      <img src={peopleImage} alt=""  />      
    </div>
  )
}