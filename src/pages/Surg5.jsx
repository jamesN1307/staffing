import React from 'react'

const Surg5 = () => {
  const current = new Date();
  const today = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`
  return (
    <div>
      <header className='columns-2'>
        <h1>Surg5</h1>
        <h1>Date: {today}</h1>     
      </header>
    </div>
  )
}

export default Surg5