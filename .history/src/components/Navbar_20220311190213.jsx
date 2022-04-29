import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai';
import { BsCoin } from 'react-icons/bs';
import { CgArrowsExchangeAlt } from 'react-icons/cg';
import { BiNews } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className="fixed  w-full top-20 bg-white z-50">
      <div className="  flex justify-center items-center space-x-12  py-6">
        <Link to="/">
          <div className="icon-group">
            <AiOutlineHome className="text-2xl" />
            <span>Homepage</span>
          </div>
        </Link>
        <Link to="/cryptocurrencies">
          <div className="icon-group">
            <BsCoin className="text-2xl" />
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
    </div>
  );
};

export default Navbar;
