import React from 'react'

const MedF3 = () => {
  const current = new Date();
  const today = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`
  return (
    <div>
      <header className='columns-2'>
        <h1>MedF3</h1>
        <h1>Date: {today}</h1>     
      </header>
    </div>
  )
}

export default MedF3