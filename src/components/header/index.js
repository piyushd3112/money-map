import React from 'react'
import "./style.css"

function Header() {
  function logoutFnc() {
    alert("Logout Successfully !");
  }
  return (
    <div className='navbar'>
      <p className='logo'>MoneyMap</p>
      <p className='logo link' onClick={logoutFnc}>Logout</p>
    </div>
  );
}

export default Header;


