import React from 'react'
import { Header } from '../components';
import Roster from '../pages/Roster'
import Scheduler from '../pages/Calendar'
import Schedule from '../pages/Schedule'
const Rehab = () => {
  const current = new Date();
  const today = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
  const style = {
    width: '25%'
  };
  return (
    // <div>
    //   <header className='columns-2'>
    //     <h1>Daily Roster List REHAB</h1>
    //     <h1>Date: {today}</h1>     
    //   </header>
    //   <br />
    //   <section className='columns-4'>
    //     <div>
    //       <h1>Employee Name</h1>
    //     </div>
    //     <div>
    //       <h1>Position/Profile</h1>
    //     </div>
    //     <div>
    //       <h1>Code</h1>
    //     </div>
    //     <div>
    //       <h1>Sitters</h1>
    //     </div>
    //   </section>
    //   <br />
    // </div>
    <div>
      <Header title="REHAB ROSTER"  />
      <div>
        <Schedule />
      </div>
      <div className="column-2"> 
        <Roster />
      </div>
      <div>
        <Scheduler />
      </div>
    </div>
    
  )
}

export default Rehab