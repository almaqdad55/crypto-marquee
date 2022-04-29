import { Link } from 'react-router-dom';

//import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({ cryptocurrencies, isLoading }) => {
  //console.log(cryptocurrencies);
  if (isLoading) return <h1>Loading</h1>;
  return (
    <>
      <div className="container flex justify-center mx-auto mt-[200px] h-screen overflow-y-hidden">
        <div className="flex flex-col">
          <div className="w-full h-70vh overflow-y-scroll shadow-2xl rounded-md">
            <div className="border-b border-gray-200 shadow">
              <table className="divide-y divide-gray-300 ">
                <thead className="bg-pink-100 w-full">
                  <tr>
                    <th className="px-6 py-2 text-xs text-gray-500">#</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Coin</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Price</th>
                    {/* <th className="px-6 py-2 text-xs text-gray-500">1h</th>
                <th className="px-6 py-2 text-xs text-gray-500">24h</th> */}

                    {/* <th className="px-6 py-2 text-xs text-gray-500">
                  24h Volume
                </th> */}
                    <th className="px-6 py-2 text-xs text-gray-500">Mkt Cap</th>
                    {/* <th className="px-6 py-2 text-xs text-gray-500">
                  Last 7 Days
                </th> */}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-300  cursor-pointer ">
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
                        <td className="px-6 py-4 text-sm text-gray-500 ">
                          {' '}
                          {rank}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          <div className="flex items-center space-x-2">
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
                        {/* <td
                        className={`px-6 py-4 text-sm ${
                          price_change_percentage_1h_in_currency < 0
                            ? 'text-[#f00606]'
                            : 'text-[#13c783]'
                        }`}
                      >
                        %{' '}
                        {price_change_percentage_1h_in_currency.toFixed(2)}
                      </td> */}
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
