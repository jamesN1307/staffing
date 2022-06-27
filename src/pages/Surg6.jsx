import React from 'react'
import Schedule from '../pages/Schedule'
const Surg6 = () => {
  const current = new Date();
  const today = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`
  return (
    <div>
      <header className='columns-2'>
        <h1>Surg6</h1>
        <h1>Date: {today}</h1>     
      </header>

      <main class='flex-container'>
        <section class='col-50 box'>
          <h1 class='box-title'>Day, Evening</h1><hr />
          <h1>Day</h1>
          <p>0600-12</p>
          <div class='flex-container'>
            <div class='col-25'>
            <p class='underline'>Schedule</p><br />
            </div>
            <div class='col-25'>
            <p class='underline'>Profile</p>
            </div>
            <div class='col-25'>
            <p class='underline'>Employee Name</p>
            </div>
            <div class='col-25'>
            <p class='underline'>Notes</p>
            </div>
          </div>
        </section>
        <section class='col-50 box'>
          <h1 class='box-title'>RN On Call, Orient and Others</h1><hr />
          <h1>Day</h1>
          <div class='flex-container'>
            <div class='col-25'>
            <p class='underline'>Schedule</p><br />
            </div>
            <div class='col-25'>
            <p class='underline'>Profile</p>
            </div>
            <div class='col-25'>
            <p class='underline'>Employee Name</p>
            </div>
            <div class='col-25'>
            <p class='underline'>Notes</p>
            </div>
          </div>
          <h1>ORIENT</h1>
          <div class='flex-container'>
            <div class='col-25'>
            <p class='underline'>Schedule</p><br />
            </div>
            <div class='col-25'>
            <p class='underline'>Profile</p>
            </div>
            <div class='col-25'>
            <p>Employee Name</p>
            </div>
            <div class='col-25'>
            <p>Notes</p>
            </div>
          </div>
          <h1>WD</h1>
          <div class='flex-container'>
            <div class='col-25'>
            <p>Schedule</p><br />
            </div>
            <div class='col-25'>
            <p>Profile</p>
            </div>
            <div class='col-25'>
            <p>Employee Name</p>
            </div>
            <div class='col-25'>
            <p>Notes</p>
            </div>
          </div>
        </section>
        <section class='col-50 box'>
          <h1 class='box-title'>Evening/Night, Night</h1><hr />
          <div class='flex-container'>
          <div class='col-25'>
            <p class='underline'>Schedule</p><br />
            </div>
            <div class='col-25'>
            <p class='underline'>Profile</p>
            </div>
            <div class='col-25'>
            <p class='underline'>Employee Name</p>
            </div>
            <div class='col-25'>
            <p class='underline'>Notes</p>
            </div>
          </div>
        </section>
        <section class='col-50 box'>
          <h1 class='box-title'>CNAs, LPNs, Scheduled and Call</h1><hr />
          <p>Day</p>
          <div class='flex-container'>
          <div class='col-25'>
            <p class='underline'>Schedule</p><br />
            </div>
            <div class='col-25'>
            <p class='underline'>Profile</p>
            </div>
            <div class='col-25'>
            <p class='underline'>Employee Name</p>
            </div>
            <div class='col-25'>
            <p class='underline'>Notes</p>
            </div>
          </div>
          <h1>Evening/Night</h1>
          <div class='flex-container'>
            <div class='col-25'>
            <p class='underline'>Schedule</p><br />
            </div>
            <div class='col-25'>
            <p class='underline'>Profile</p>
            </div>
            <div class='col-25'>
            <p class='underline'>Employee Name</p>
            </div>
            <div class='col-25'>
            <p class='underline'>Notes</p>
            </div>
          </div>
          <h1>CALL</h1>
          <div class='flex-container'>
            <div class='col-25'>
            <p class='underline'>Schedule</p><br />
            </div>
            <div class='col-25'>
            <p class='underline'>Profile</p>
            </div>
            <div class='col-25'>
            <p>Employee Name</p>
            </div>
            <div class='col-25'>
            <p>Notes</p>
            </div>
          </div>
        </section>
      </main>
      <br />

    </div>
  )
}

export default Surg6