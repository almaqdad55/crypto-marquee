import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeBar = ({ cryptocurrencies }) => {
  return (
    <Marquee pauseOnHover={true} speed={70}>
      {cryptocurrencies?.map(
        ({ uuid, symbol, name, iconUrl, price, change }) => (
          <div>
            <div className="flex justify-center items-center space-x-2">
              <div className="flex h-7">
                <img src={iconUrl} alt="icon" />
              </div>
              <div className="flex flex-col">
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
  );
};

export default MarqueeBar;
