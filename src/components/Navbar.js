/* eslint-disable jsx-a11y/anchor-is-valid */
import { React  } from 'react'
import { Link } from 'react-router-dom';

function NavigationMenu() {
  const handleClick = (e) => {
    e.preventDefault();
    const jfmotourl = "https://www.jfmoto.sk/"
    window.open(jfmotourl, "_blank")
  }
  return (
<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <div className="flex items-center"> 
    <a  className="flex items-center"> 
        <img src="https://i.ibb.co/DfbV0Nq/bandw-logo-symbol.png" className="h-8 mr-3" alt="CFMoto-logo" />
        <img src="https://i.imgur.com/kkgyAYX.png" className="h-6  mr-3" alt="JFMoto-logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">JFMoto</span>
   </a>
</div>

  <div className="flex md:order-2">
      <button type="button" onClick={handleClick} className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-300 dark:hover:bg-red-600 dark:focus:ring-red-800">Pokračovať na E-Shop</button>
      
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
              <Link to="/home" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-red-600" aria-current="page">Home</Link>
          </li>
          <li>
              <Link to="/models" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-red-600">Models</Link>
          </li>
          <li>
              <Link to="/reserve" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-red-600">Reserve</Link>
          </li>

      </ul>
</div>
  </div>
</nav>

    );
}

export default NavigationMenu



