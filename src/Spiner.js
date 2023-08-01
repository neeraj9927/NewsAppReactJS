import React from 'react'
import { DualRing } from 'react-awesome-spinners'

export default function Spiner() {
  return (
    <div className='container'>
        <div className="row" id='spiner'>
      <div className="d-flex justify-content-center" id='spinercenter'>
            <DualRing size={84} color={'#f1c40f'}/>                
            </div>
        </div>
      </div>
  )
}
