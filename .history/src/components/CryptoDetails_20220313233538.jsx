import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  useGetCryptoHistoryQuery,
  useGetCryptosDetailsQuery,
} from '../services/cryptoApi';

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timeperiod, setTimeperiod] = useState('7d');
  const { data, isFetching } = useGetCryptosDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod,
  });
  if (isFetching) return <h1>Loading........</h1>;
  const cryptoDetails = data?.data?.coin;
  console.log(cryptoDetails);

  return (
    <div className="container mx-auto bg-blue-50 mt-[200px]">Holasdsad</div>
  );
};

export default CryptoDetails;
