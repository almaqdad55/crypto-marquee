import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_COINS_API_KEY,
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({
  method: 'GET',
  url,
  headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) =>
        createRequest(
          `/coins?limit=${count}&referenceCurrencyUuid=OEomm4hQzk_M`
        ),
    }),
    getCryptosDetails: builder.query({
      query: (coinId) =>
        createRequest(`coin/${coinId}?referenceCurrencyUuid=OEomm4hQzk_M`),
    }),
    getCryptosChange: builder.query({
      query: ({ count, timeperiod }) =>
        createRequest(
          `/coins?limit=${count}&referenceCurrencyUuid=OEomm4hQzk_M&timePeriod=${timeperiod}`
        ),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(
          `coin/${coinId}/history?referenceCurrencyUuid=OEomm4hQzk_M&timePeriod=${timeperiod}`
        ),
    }),
    getCryptosDesc: builder.query({
      query: () =>
        createRequest(
          `/coins?referenceCurrencyUuid=OEomm4hQzk_M&timePeriod=24h&tiers=1&orderBy=change&orderDirection=desc&limit=5&offset=0`
        ),
    }),
    getCryptosAsc: builder.query({
      query: () =>
        createRequest(
          `/coins?referenceCurrencyUuid=OEomm4hQzk_M&timePeriod=24h&tiers=1&orderBy=change&orderDirection=asc&limit=5&offset=0`
        ),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptosChangeQuery,
  useGetCryptosDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetCryptosAscQuery,
  useGetCryptosDescQuery,
} = cryptoApi;
