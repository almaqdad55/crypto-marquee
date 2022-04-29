import React from 'react';
import Marquee from 'react-fast-marquee';
import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri';
import logoIcon from '../assets/images/logo_new.png';

const MarqueeBar = ({ cryptocurrencies }) => {
  return (
    <div className="flex justify-center items-center m-2">
      <div>
        <img src={logoIcon} alt="logo" className="h-16" />
      </div>

      <Marquee pauseOnHover={true} speed={70}>
        {cryptocurrencies?.map(
          ({ uuid, symbol, name, iconUrl, price, change }) => (
            <div className="flex justify-center items-center space-x-12 mx-6">
              <div className="flex justify-center items-center space-x-1">
                <div className="flex">
                  <img src={iconUrl} alt="icon" className="h-7" />
                </div>
                <div className="flex flex-col text-xs">
                  <span>{name}</span>
                  <span>{symbol}</span>
                </div>
              </div>
              <div className="flex flex-col text-xs items-center">
                <span>
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'aud',
                    maximumSignificantDigits: 3,
                  }).format(price)}
                </span>
                <div
                  className={` flex items-center ${
                    change > 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  <span>{change} %</span>
                  <span>
                    {change > 0 ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
                  </span>
                </div>
              </div>
            </div>
          )
        )}
      </Marquee>
    </div>
  );
};

export default MarqueeBar;
