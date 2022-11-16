import React from 'react'
import {IPeople} from './../interface/Interface'
import peopleImage from './../source/people.png'

export default function People({number}:IPeople) {
  return (
    <div className={`people`} data-number={number}>
      <img src={peopleImage} alt=""  />      
    </div>
  )
}