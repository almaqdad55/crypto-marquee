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
          <AiOutlineHome />
          <span>Homepage</span>
        </div>
      </Link>
      <Link to="/cryptocurrencies">
        <div className="icon-group">
          <HiOutlineCurrencyDollar />
          <span>Cryptocurrencies</span>
        </div>
      </Link>
      <Link to="/exchanges">
        <div className="icon-group">
          <CgArrowsExchangeAlt />
          <span>Exchanges</span>
        </div>
      </Link>
      <Link to="/news">
        <div className="icon-group">
          <BiNews />
          <span>News</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
