import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeBar = ({ cryptocurrencies }) => {
  return (
    <Marquee pauseOnHover={true} speed={70}>
      {cryptocurrencies?.map(
        ({ uuid, symbol, name, iconUrl, price, change }) => (
          <div className="flex justify-center items-center">
            <div className="flex h-7">
              <img src={iconUrl} alt="icon" />
            </div>
            <div className="flex flex-col">
              <span>{name}</span>
              <span>{symbol}</span>
            </div>
          </div>
        )
      )}
    </Marquee>
  );
};

export default MarqueeBar;
