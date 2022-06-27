import React from 'react'
import Schedule from '../pages/Schedule'
const Surg6 = () => {
  const current = new Date();
  const today = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`
  return (
    <div>
     <Schedule />
    </div>
  )
}

export default Surg6