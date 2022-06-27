import React from 'react';
const current = new Date();
const today = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
const Header = ({ category, title }) => (
  <div className="mb-10 md:flex ">
    <p className="text-lg text-gray-400">{category}</p>
    <p className="text-3xl  font-extrabold tracking-tight text-slate-900 ">
      {title} {today}
    </p>
    {/* <p className="text-3xl flex-end tracking-tight text-slate-900" >{today}</p> */}
  </div>
);

export default Header;