import React from 'react'

const MedR4 = () => {
  const current = new Date();
  const today = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`
  return (
    <div>
      <header className='columns-2'>
        <h1>MedR4</h1>
        <h1>Date: {today}</h1>     
      </header>
    </div>
  )
}

export default MedR4