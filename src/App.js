import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {Navbar, Footer, Header, Sidebar } from './components'
import { Calendar, Employees, Home, Kanban, Profile, ACFP, CAN, Clinic, MedF3, MedR4, Roster, Surg5, Surg6, Rehab, Overflow, NewEmployee, Signup, Login} from './pages'

import './App.css'
import { BiBorderRadius } from 'react-icons/bi';
import { act } from '@testing-library/react';
import { useStateContext } from './context/ContextProvider';

const App = () => {
  const { activeMenu } = useStateContext()
  return (
    <div >
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
          <TooltipComponent
            content="Settings"
            position="Top"
          >
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray "
            >
              <FiSettings />
            </button>

          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
              : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
          <div>

            <Routes>
              {/* dashboard  */}
              <Route path="/" element={(<Login />)} />
              <Route path="/Home" element={(<Home />)} />

              {/* pages  */}
              <Route path="/ACFP" element={<ACFP />} />
              <Route path="/CAN" element={<CAN />} />
              <Route path="/Clinic" element={<Clinic />} />
              <Route path="/Employees" element={<Employees />} />
              <Route path="/Kanban" element={<Kanban />} />
              <Route path="/Calendar" element={<Calendar />} />
              <Route path="/MedF3" element={<MedF3 />} />
              <Route path="/MedR4" element={<MedR4 />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/Roster" element={<Roster />} />
              <Route path="/Surg5" element={<Surg5 />} />
              <Route path="/Surg6" element={<Surg6 />} />
              <Route path="/Overflow" element={<Overflow />} />
              <Route path="/Rehab" element={<Rehab />} />
              <Route path="/NewEmployee" element={<NewEmployee />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  </div>
);
};

export default App;