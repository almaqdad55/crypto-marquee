import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import Moment from 'react-moment';

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];
  const coinTimeStampDate = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);

    coinTimestamp.push(coinHistory?.data?.history[i].timestamp);
    coinTimeStampDate.push(new Date(coinTimestamp[i] * 1000));
  }

  // for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
  //   var ts = new Date();
  //   coinTimestamp.push(coinHistory?.data?.history[i].timestamp);
  //   coinTimeStampDate.push(ts.toDateString(coinTimestamp[i]));
  // }
  console.log(coinPrice);
  console.log(coinTimestamp);
  console.log(coinTimeStampDate);

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In AUD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
        gridLines: {
          color: 'white',
        },
      },
    ],
  };

  const options = {
    scales: {
      y: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
