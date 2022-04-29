import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeBar = ({ cryptocurrencies }) => {
  return (
    <Marquee pauseOnHover={true} speed={70}>
      {cryptocurrencies?.map({
        uuid,
        symbol,
        name,
        iconUrl,
        price,
        change,
      })}
    </Marquee>
  );
};

export default MarqueeBar;
