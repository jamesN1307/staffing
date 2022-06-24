import * as React from 'react';

const Home = () => {
  const current = new Date();
  const today = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`
  return (
    <div>
      <header className='columns-2'>
        <h1 className="text-2xl">Clinic</h1>
        <h1 className="text-xl">Date: {today}</h1>
      </header>
      <main>
        <br></br>
        <section class="md:columns-2 sm:columns-1">
          <div>
            <div>
              <h1 className="text-2xl">Staffing Coordinator:</h1>
              <h3 className="text-lg">AM:</h3>
              <h3 className="text-lg">PM:</h3>
            </div>
            <br></br>
            <div>
              <h1 className="text-2xl">Shift Administrators:</h1>
              <h3 className="text-lg">AM:</h3>
              <h3 className="text-lg">PM:</h3>
            </div>
            <br></br>
            <div>
              <h1 className="text-2xl">General Notes:</h1>
              <h3 className="text-lg">AM:</h3>
              <h3 className="text-lg">PM:</h3>
            </div>
            <br></br>
            <div>
              <h1 className="text-2xl">CNA Incentive Shifts:</h1>
              <h3 className="text-lg">0700 - 04:</h3>
              <h3 className="text-lg">1100 - 04:</h3>
              <h3 className="text-lg">1500 - 04:</h3>
              <h3 className="text-lg">1900 - 04:</h3>
              <h3 className="text-lg">2300 - 04:</h3>
            </div>
            <br></br>
            <div>
              <h1 className="text-2xl">Shift Notifications Sent:</h1>
              <h3 className="text-lg">0700 - 12:</h3>
              <h3 className="text-lg">1900 - 12:</h3>
              <h3 className="text-lg">1900 - 12:</h3>
            </div>
            <br></br>
            <div>
              <h1 className="text-2xl">Staffing Forecast: #s and call</h1>
              <h3 h3 className="text-lg">AC 7a:</h3>
              <h3 h3 className="text-lg">11a:</h3>
              <h3 h3 className="text-lg">3p:</h3>
              <h3 h3 className="text-lg">7p:</h3>
              <h3 h3 className="text-lg">11p:</h3>
              <h3 h3 className="text-lg">Next Day:</h3>
            </div>
            <br></br>
            <div>
              <h1 className="text-2xl">Total Ill Calls:</h1>
              <h1 className="text-xl">Today/Yesterday:</h1>
              <h1 className="text-xl">AC:</h1>
              <h3 className="text-lg">RNs:</h3>
              <h3 className="text-lg">CNAs:</h3>
            </div>
            <br></br>
            <div>
              <h1 className="text-xl">Audit Complete:</h1>
              <h3 className="text-lg">Y/N</h3>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-2xl">Daily Census:</h1>
              <h3 className="text-lg">AM:</h3>
              <h3 className="text-lg">PM:</h3>
            </div>
            <br></br>
            <div>
              <h1 className="text-2xl">ED Info:</h1>
              <h3 className="text-lg">AM CN:</h3>
              <h3 className="text-lg">PM CN:</h3>
            </div>
            <br></br>
            <div>
              <h1 className="text-2xl">ED Needs:</h1>
              <h3 className="text-lg">0700:</h3>
              <h3 className="text-lg">1900:</h3>
            </div>
            <br></br>
            <div>
              <h1 className="text-2xl">PBMU Watch Info:</h1>
              <h3 className="text-lg">AM:</h3>
              <h3 className="text-lg">PM:</h3>
            </div>
            <br></br>
            <div>
              <h1 className="text-2xl">Total Sitters Needed:</h1>
              <h3 className="text-lg">7a:</h3>
              <h3 className="text-lg">7p:</h3>
            </div>
            <br></br>
            <div>
              <h1 className="text-2xl">Sitter Sheet Completed:</h1>
              <h3 className="text-lg">Day:</h3>
              <h3 className="text-lg">Night:</h3>
            </div>
            <br></br>
            <div>
              <h1 className="text-2xl">H/O Clinic email sent:</h1>
              <h3 className="text-lg">Day:</h3>
            </div>
            <br></br>
            <div>
              <h1 className="text-2xl">CAP Act Done:</h1>
              <h3 className="text-lg">7a:</h3>
              <h3 className="text-lg">3p:</h3>
              <h3 className="text-lg">7p:</h3>
            </div>
            <br></br>
            <div>
              <h1 className="text-2xl">ACFP Line Recorded:</h1>
              <h3 className="text-lg">7a:</h3>
              <h3 className="text-lg">11a:</h3>
              <h3 className="text-lg">3p:</h3>
              <h3 className="text-lg">7p:</h3>
              <h3 className="text-lg">11p:</h3>
            </div>
            <br></br>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home