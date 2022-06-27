import React from 'react'

const Surg5 = () => {
  const current = new Date();
  const today = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`
  return (
    <div>
      <header className='columns-2'>
        <h1>Daily Roster List Surgical R5</h1>
        <h1>Date: {today}</h1>     
      </header><br />
      <main class='flex-container'>
        <section class='col-50 box'>
          <h1 class='box-title'>Day, Evening</h1><hr />
          <div class='flex-container'>
            <div class='col-33'>
            <p>Schedule</p><br />
            <p>Day</p>
            </div>
            <div class='col-33'>
            <p>Profile</p>
            </div>
            <div class='col-33'>
            <p>Employee Name</p>
            </div>
          </div>
        </section>
        <section class='col-50 box'>
          <h1 class='box-title'>RN On Call, Orient and Others</h1><hr />
          <div class='flex-container'>
            <div class='col-33'>
            <p>Schedule</p><br />
            <p>Orient</p>
            </div>
            <div class='col-33'>
            <p>Profile</p>
            </div>
            <div class='col-33'>
            <p>Employee Name</p>
            </div>
          </div>
        </section>
        <section class='col-50 box'>
          <h1 class='box-title'>Evening/Night, Night</h1><hr />
          <div class='flex-container'>
          <div class='col-33'>
            <p>Schedule</p><br />
            <p>Evening/Night</p>
            </div>
            <div class='col-33'>
            <p>Profile</p>
            </div>
            <div class='col-33'>
            <p>Employee Name</p>
            </div>
          </div>
        </section>
        <section class='col-50 box'>
          <h1 class='box-title'>CNAs, LPNs, Scheduled and Call</h1><hr />
          <div class='flex-container'>
          <div class='col-33'>
            <p>Schedule</p><br />
            <p>Day</p>
            </div>
            <div class='col-33'>
            <p >Profile</p>
            </div>
            <div class='col-33'>
            <p >Employee Name</p>
            </div>
          </div>
        </section>
      </main>
      <br />
    </div>
  )
}

export default Surg5