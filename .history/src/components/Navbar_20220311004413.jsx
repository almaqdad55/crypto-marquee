import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { CgArrowsExchangeAlt } from 'react-icons/cg';
import { BiNews } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className="flex justify-center items-center w-full space-x-12  py-6">
      <Link to="/">
        <div className="icon-group">
          <AiOutlineHome className="text-2xl" />
          <span>Homepage</span>
        </div>
      </Link>
      <Link to="/cryptocurrencies">
        <div className="icon-group">
          <HiOutlineCurrencyDollar className="text-2xl" />
          <span>Cryptocurrencies</span>
        </div>
      </Link>
      <Link to="/exchanges">
        <div className="icon-group">
          <CgArrowsExchangeAlt className="text-2xl" />
          <span>Exchanges</span>
        </div>
      </Link>
      <Link to="/news">
        <div className="icon-group">
          <BiNews className="text-2xl" />
          <span>News</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;