import React from 'react';
import {Link} from 'react-router-dom';

const current = new Date();
const today = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

const Header = ({ category, title }) => (
  <div className=" mb-10 columns-2" class="flex flex-row">
    <div  class="basis-3/4">
    <p className="text-lg text-gray-400">{category}</p>
    <p className="text-3xl  font-extrabold tracking-tight text-slate-900 ">
      {title} {today}
    </p>
    </div>
    <div class="basis-1/4">
    <Link to="/newEmployee"><button class="w-40 border-2 border-slate-700">Add a Staff Member</button></Link>
    </div>
  </div>
);
export default Header;