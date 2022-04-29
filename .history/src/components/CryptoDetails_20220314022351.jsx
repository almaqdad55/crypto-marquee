import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri';
import {
  useGetCryptoHistoryQuery,
  useGetCryptosDetailsQuery,
} from '../services/cryptoApi';
import SelectList from './SelectList';
import LineChart from './LineChart';

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timeperiod, setTimeperiod] = useState('7d');
  const { data, isFetching } = useGetCryptosDetailsQuery({
    coinId,
    timeperiod,
  });
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod,
  });
  if (isFetching) return <h1>Loading........</h1>;
  const cryptoDetails = data?.data?.coin;
  console.log(cryptoDetails);
  console.log(coinHistory);

  return (
    <div className="container mx-auto  mt-[200px]">
      <h1 className="text-[#0071bd] font-extrabold text-2xl text-center py-3">
        {cryptoDetails.name} ({cryptoDetails.symbol}) Price
      </h1>
      <p className="text-center py-6">
        {cryptoDetails.name} live price in Australian Dollar (AUD). View value
        statistics, market cap and supply.
      </p>
      <div class="w-full border-t border-gray-300"></div>
      {/*    */}
      <div className="flex items-center justify-between p-5 font-bold text-[#0071bd]">
        <h1> {cryptoDetails.name} Price Chart</h1>
        <p>
          Current {cryptoDetails.name} Price:{' '}
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'aud',
          }).format(cryptoDetails.price)}
        </p>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <p>Change ({timeperiod}):</p>
            <p
              className={`${
                cryptoDetails.change < 0 ? 'text-[#f00606]' : 'text-[#13c783]'
              } flex items-center`}
            >
              {cryptoDetails.change} %
              <span>
                {cryptoDetails.change > 0 ? (
                  <RiArrowUpSFill />
                ) : (
                  <RiArrowDownSFill />
                )}
              </span>
            </p>
          </div>

          <div>
            <SelectList setTimeperiod={setTimeperiod} timeperiod={timeperiod} />
          </div>
        </div>
      </div>
      <div className="p-4">
        <LineChart
          coinHistory={coinHistory}
          currentPrice={new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'aud',
          }).format(cryptoDetails.price)}
          coinName={cryptoDetails.name}
        />
      </div>
    </div>
  );
};

export default CryptoDetails;
