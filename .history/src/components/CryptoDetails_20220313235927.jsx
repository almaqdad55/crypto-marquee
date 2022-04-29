import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  useGetCryptoHistoryQuery,
  useGetCryptosDetailsQuery,
} from '../services/cryptoApi';
import SelectList from './SelectList';

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
  //if (isFetching) return <h1>Loading........</h1>;
  const cryptoDetails = data?.data?.coin;
  console.log(cryptoDetails);

  return (
    <div className="container mx-auto bg-blue-50 mt-[200px]">
      <h1 className="text-[#0071bd] font-extrabold text-2xl text-center py-3">
        {cryptoDetails.name} ({cryptoDetails.symbol}) Price
      </h1>
      <p className="text-center py-6">
        {cryptoDetails.name} live price in Australian Dollar (AUD). View value
        statistics, market cap and supply.
      </p>
      <div class="w-full border-t border-gray-300"></div>
      {/*    */}
      <div className="flex items-center">
        <h1> {cryptoDetails.name} Price Chart</h1>
        <SelectList setTimeperiod={setTimeperiod} timeperiod={timeperiod} />
        <span>
          change ({timeperiod}): {cryptoDetails.change}
        </span>
      </div>
    </div>
  );
};

export default CryptoDetails;
