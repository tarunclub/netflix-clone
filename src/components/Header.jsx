import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import smile from '../assets/paymentIcon.png';

function Navbar() {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    return () => {
      window.removeEventListener('scroll', transitionNavbar);
    };
  }, []);
  return (
    <div
      className={`flex items-center justify-between fixed top-0 w-full px-2 py-1 ${
        show && 'bg-black shadow-lg shadow-gray-900'
      } z-20 transition-all duration-300 ease-in`}
    >
      <div>
        <img
          src={logo}
          alt="logo"
          className="w-24 lg:w-28 object-contain cursor-pointer"
        />
      </div>
      <div>
        <img
          src={smile}
          alt="payment"
          className="w-7 h-7 lg:w-9 lg:h-9 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Navbar;
