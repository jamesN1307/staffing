import React from 'react'

const Overflow = () => {
  const current = new Date();
  const today = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`
  return (
    <div>
      <header className='columns-2'>
        <h1>F5 and RA6 OVERFLOW Assignments</h1>
        <h1>Date: {today}</h1>     
      </header>
      <br />
      <section>
        <h1>F5 Overflow</h1>
        <hr />
        <section className='columns-5'>
          <div>
            <h1>0700</h1>
            <p>1.</p>
            <p>2.</p>
          </div>
          <div>
            <h1>1100</h1>
            <p>1.</p>
            <p>2.</p>
          </div>
          <div>
            <h1>1500</h1>
            <p>1.</p>
            <p>2.</p>
          </div>
          <div>
            <h1>1900</h1>
            <p>1.</p>
            <p>2.</p>
          </div>
          <div>
            <h1>2300</h1>
            <p>1.</p>
            <p>2.</p>
          </div>
        </section>
        <br />
        <section className='columns-2'>
          <div>
            <h1>CNA:</h1>
            <p>sitter x 1</p>
          </div>
          <div>
            <h1>CNA:</h1>
            <p>sitter(s)</p>
          </div>
        </section>
      </section>
      <br />
      <section>
        <h1>RA6 ED Overflow</h1>
        <hr />
        <section className='columns-5'>
          <div>
            <h1>0700</h1>
          </div>
          <div>
            <h1>1100</h1>
          </div>
          <div>
            <h1>1500</h1>
          </div>
          <div>
            <h1>1900</h1>
          </div>
          <div>
            <h1>2300</h1>
          </div>
        </section>
        <br />
        <section className='columns-2'>
          <div>Primary RN:</div>
          <div>Primary RN:</div>
        </section>
        <br />
        <section className='columns-5'>
          <div>
            <h1>Sitters x2:</h1>
            <p>1.</p>
            <p>2.</p>
          </div>
          <div>
            <h1>Sitters x2:</h1>
            <p>1.</p>
            <p>2.</p>
          </div>
          <div>
            <h1>Sitters:</h1>
            <p>1.</p>
            <p>2.</p>
          </div>
          <div>
            <h1>Sitters:</h1>
            <p>1.</p>
            <p>2.</p>
          </div>
          <div>
            <h1>Sitters:</h1>
            <p>1.</p>
            <p>2.</p>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Overflow