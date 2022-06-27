import React from 'react'
import '../styles/style.css'

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
      <section class='flex-container'>
        <div class='col-25'>
          <h1 >Employee Name</h1>
        </div>
        <div class='col-25'>
          <h1 >Position/Profile</h1>
        </div>
        <div class='col-25'>
          <h1 >Code</h1>
        </div>
        <div class='col-25'>
          <h1 >Sitters</h1>
          <hr />
          <p>7a:</p><br />
          <p>11a:</p><br />
          <p>3p:</p><br />
          <p>7p:</p><br />
          <p>11p:</p><br />
        </div>
      </section>
      <br />
    </div>
  )
}

export default Rehab