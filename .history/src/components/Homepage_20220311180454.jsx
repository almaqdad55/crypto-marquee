import millify from 'millify';
import { Link } from 'react-router-dom';
import PieChart from './PieChart';
import CoinCard from './CoinCard';
import {
  useGetCryptosDescQuery,
  useGetCryptosAscQuery,
} from '../services/cryptoApi';

import { AiOutlineStock } from 'react-icons/ai';
import { RiStockFill, RiExchangeFundsFill } from 'react-icons/ri';
import { BsCoin, BsCashCoin } from 'react-icons/bs';

const Homepage = ({ data, stats }) => {
  const {
    data: descData,
    error: errorDesc,
    isLoading: isDescLoading,
  } = useGetCryptosDescQuery();
  const {
    data: ascData,
    error: errorAsc,
    isLoading: isAscLoading,
  } = useGetCryptosAscQuery();
  const descCryptos = descData?.data.coins;
  const ascCryptos = ascData?.data.coins;

  if (isDescLoading) return <h1>Loading</h1>;

  return (
    <>
      <div className="flex justify-center items-center my-20  mt-[220px] ">
        <div className="flex flex-col items-center ">
          <h1 className="text-[#093D6E] font-bold text-2xl mx-auto mb-10">
            Dominance of total market volume (24h) for top 10 Cryptocurrencies
            in Australian Dollar
          </h1>
          <PieChart data={data} />
        </div>
        <div className="flex flex-col items-center ">
          <div className="flex flex-col items-center bg-blue-50  p-8 rounded-lg shadow-sm ">
            <h1 className="text-[#093D6E] font-bold text-xl mb-6">
              Global Crypotcurrencies Stats
            </h1>
            <div className="flex flex-col space-y-5">
              <div className="flex items-center  justify-around space-x-6 border-b border-gray-300 pb-2">
                <div className="bg-[#0071bd] text-white rounded-full p-[5px] ">
                  {' '}
                  <AiOutlineStock />
                </div>
                <p>Crypto market cap</p>
                <p>
                  {millify(stats?.totalMarketCap, {
                    precision: 2,
                    space: true,
                    units: ['B', 'KB', 'MB', 'billion', 'trilion'],
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-6 border-b  border-gray-300 pb-2">
                <div className="bg-[#0071bd] text-white rounded-full p-[5px]">
                  <RiStockFill />
                </div>
                <p>24h volume</p>
                <p>
                  {millify(stats?.total24hVolume, {
                    precision: 2,
                    space: true,
                    units: ['B', 'KB', 'MB', 'billion', 'trilion'],
                  })}
                </p>
              </div>

              <div className="flex items-center space-x-6 border-b  border-gray-300 pb-2">
                <div className="bg-[#0071bd] text-white rounded-full p-[5px] ">
                  <BsCoin />
                </div>
                <p>Cryptocurrencies</p>
                <p>
                  {' '}
                  {millify(stats?.totalCoins, {
                    precision: 6,
                    decimalSeparator: ',',
                    units: ['', '0', 'M', 'B', 'T', 'P', 'E'],
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-6 border-b   border-gray-300 pb-2">
                <div className="bg-[#0071bd] text-white rounded-full p-[5px]">
                  {' '}
                  <RiExchangeFundsFill />
                </div>
                <p>Exchanges</p>
                <p>{stats?.totalExchanges}</p>
              </div>
              <div className=" flex items-center  space-x-6 border-b  border-gray-300 pb-2 ">
                <div className="bg-[#0071bd] text-white rounded-full p-[5px]">
                  {' '}
                  <BsCashCoin />
                </div>
                <p>Markets</p>
                <p className=" float-end">
                  {' '}
                  {millify(stats?.totalMarkets, {
                    precision: 6,
                    decimalSeparator: ',',
                    units: ['', '', 'M', 'B', 'T', 'P', 'E'],
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-10">
        <div className=" flex flex-col items-center">
          <h1 className="text-[#093D6E] font-Lato font-bold text-2xl">
            Best Perfomers 24h
          </h1>
          <p className="text-gray-500">
            The top 5 cryptocurrencies with the highest increase in price.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-5 mb-10">
            {descCryptos?.map((cryptocard) => (
              <CoinCard
                key={cryptocard.uuid}
                id={cryptocard.uuid}
                name={cryptocard.name}
                price={cryptocard.price}
                change={cryptocard.change}
                image={cryptocard.iconUrl}
                sparline={cryptocard.sparline}
                symbol={cryptocard.symbol}
                rank={cryptocard.rank}
                color="#86efac"
                desc={true}
              />
            ))}
          </div>
        </div>

        {!isAscLoading && (
          <div className=" flex flex-col items-center">
            <h1 className="text-[#093D6E] font-Lato font-bold text-2xl">
              Worst Perfomers 24h
            </h1>
            <p className="text-gray-500">
              The top 5 cryptocurrencies with the highest decrease in price.
            </p>

            <div className="flex items-center justify-center space-x-6 flex-wrap mt-5 mb-10">
              {ascCryptos.map((cryptocard) => (
                <CoinCard
                  key={cryptocard.uuid}
                  id={cryptocard.uuid}
                  name={cryptocard.name}
                  price={cryptocard.price}
                  change={cryptocard.change}
                  image={cryptocard.iconUrl}
                  sparline={cryptocard.sparline}
                  symbol={cryptocard.symbol}
                  rank={cryptocard.rank}
                  color="#fee2e2"
                  desc={false}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Homepage;
