import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];
  const coinTimeStampDate = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(coinHistory?.data?.history[i].timestamp);
    coinTimeStampDate.push(new Date(coinTimestamp[i]));
  }
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
