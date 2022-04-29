import { Routes, Route } from 'react-router-dom';
import {Helmet} from 'react-helmet'

import {
  Navbar,
  Homepage,
  Card,
  Cryptocurrencies,
  Exchanges,
  MarqueeBar,
  News,
  CryptoDetails,
} from './components';

import { useGetCryptosQuery } from './services/cryptoApi';

const App = () => {
  const { data, error, isLoading } = useGetCryptosQuery(100);

  // list of cryptocurrencies
  const cryptocurrencies = data?.data.coins;

  const stats = data?.data.stats;

  console.log(cryptocurrencies);
  console.log(stats);

  if (isLoading) return <h1>Loading.....</h1>;

  return (
    <div className="">
   
        <Helmet>
          <title>Crypto Dashboard</title>
          <link rel="stylesheet" href="/src/assets/images/logo_new.png" />
        </Helmet>
     
      
      <MarqueeBar cryptocurrencies={cryptocurrencies} />
      <Navbar />

      <Routes>
        <Route
          exact
          path="/"
          element={<Homepage data={data} stats={stats} />}
        />
        <Route exact path="cryptocurrencies" element={<Cryptocurrencies />} />
        <Route exact path="Exchanges" element={<Exchanges />} />
        <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
        <Route exact path="News" element={<News />} />
      </Routes>
    </div>
  );
};

export default App;
