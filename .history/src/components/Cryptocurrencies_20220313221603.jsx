import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useGetCryptosChangeQuery } from '../services/cryptoApi';
import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri';
import SelectList from './SelectList';

const Cryptocurrencies = () => {
  //console.log(cryptocurrencies);
  const [timePeriod, setTimePeriod] = useState('7d');
  const [count, setCont] = useState(100);
  const time = ['24h', '7d', '30d', '1y', '5y'];

  const { data, error, isLoading } = useGetCryptosChangeQuery({
    count,
    timePeriod,
  });
  const cryptocurrencies = data?.data.coins;
  console.log(cryptocurrencies);
  //console.log(data?.data.coins);
  if (isLoading) return <h1>Loading</h1>;
  return (
    <>
      <div className="container flex justify-center mx-auto mt-[200px] mb-[50px] h-screen overflow-y-hidden">
        <div className="flex flex-col">
          <div className="w-full h-70vh overflow-y-scroll shadow-2xl rounded-md">
            <div className="border-b border-gray-200 shadow ">
              <table className="divide-y divide-gray-300 bg-gray-100">
                <thead className="">
                  <tr>
                    <th className="px-6 py-2 text-sm text-gray-500 text-left">
                      #
                    </th>
                    <th className="px-6 py-2 text-sm text-gray-500 text-left">
                      Coin
                    </th>
                    <th className="px-6 py-2 text-sm text-gray-500 text-left">
                      Price
                    </th>
                    <th className=" px-2 py-2 text-sm text-gray-500 text-cneter">
                      <SelectList
                        setTimePeriod={setTimePeriod}
                        timePeriod={timePeriod}
                      />
                    </th>

                    <th className="px-6 py-2 text-sm text-gray-500 text-center">
                      Market Cap
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-black divide-y divide-gray-300  cursor-pointer ">
                  {cryptocurrencies?.map(
                    ({
                      uuid,
                      name,
                      rank,
                      price,
                      symbol,
                      change,
                      marketCap,
                      iconUrl,

                      sparkline,
                    }) => (
                      <tr
                        key={uuid}
                        className="whitespace-nowrap odd:bg-white even:bg-sky-50  even:hover:bg-sky-100  odd:hover:bg-gray-100"
                      >
                        <td className="px-6 py-4 text-xs text-gray-500  ">
                          {' '}
                          {rank}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          <div className="flex items-center space-x-2 justify-start">
                            <img src={iconUrl} alt="" className="h-7" />
                            <div className="flex flex-col">
                              <p>{name}</p>
                              <p className="text-gray-500">
                                {symbol.toUpperCase()}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">
                            {new Intl.NumberFormat('en-US', {
                              style: 'currency',
                              currency: 'aud',
                            }).format(price)}
                          </div>
                        </td>
                        <td
                          className={`px-6 py-6 text-sm flex justify-center items-center  ${
                            change < 0 ? 'text-[#f00606]' : 'text-[#13c783]'
                          }`}
                        >
                          <span>{Math.abs(change)} %</span>
                          <span>
                            {change > 0 ? (
                              <RiArrowUpSFill />
                            ) : (
                              <RiArrowDownSFill />
                            )}
                          </span>
                        </td>
                        {/* <td
                        className={`px-6 py-4 text-sm ${
                          market_cap_change_percentage_24h < 0
                            ? 'text-[#f00606]'
                            : 'text-[#13c783]'
                        }`}
                      >
                        % {market_cap_change_percentage_24h.toFixed(2)}
                      </td> */}
                        {/* <td className="px-6 py-4 text-sm text-gray-500">
                        {new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'aud',
                        }).format(total_volume)}
                      </td> */}
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'aud',
                          }).format(marketCap)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <div className="h-100 w-200">
                            {/* <LineChart data={sparkline_in_7d} /> */}
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cryptocurrencies;
