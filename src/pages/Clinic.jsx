import React from 'react'
import Header from '../components/Header'
const Clinic = () => {
  const current = new Date();
  const today = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`
  return (
    <div>
      <Header title="Clinic Roster"  />
    </div>
  )
}

export default Clinic