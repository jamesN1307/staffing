import React from 'react'



const ACFP = () => {
  const current = new Date();
  const today = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`
  return (
    <div>
      <header className='columns-2'>
        <h1>Daily Roster List ACFP</h1>
        <h1>Date: {today}</h1>     
      </header>
      <br />
      <main class="md:columns-4 sm:columns-1">
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
          <h1>Location</h1>
        </div>
      </main>
      <br />
      <section>
      <h1>Daily Roster List CNA</h1>
      </section>
      <br />
      <section>
      <h1>Daily Roster List VAS</h1>
      </section>
      <br />
    </div>
  )
}

export default ACFP