import React from 'react'

const Rehab = () => {
  const current = new Date();
  const today = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
  const style = {
    width: '25%'
  };
  return (
    <div>
      <header className='columns-2'>
        <h1>Daily Roster List REHAB</h1>
        <h1>Date: {today}</h1>     
      </header>
      <br />
      <section className='columns-4'>
        <div>
          <h1>Employee Name</h1>
        </div>
        <div>
          <h1>Position/Profile</h1>
        </div>
        <div>
          <h1>Code</h1>
        </div>
        <div>
          <h1>Sitters</h1>
        </div>
      </section>
      <br />
    </div>
  )
}

export default Rehab