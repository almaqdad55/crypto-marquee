import { Doughnut, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const PieChart = ({ data: cryptocurrencies }) => {
  const coinsLabels = [];
  const coinsVolumes = [];
  for (let i = 0; i < 10; i += 1) {
    // for (let i = 0; i < 10; i += 1) {
    coinsLabels.push(cryptocurrencies?.data?.coins[i].name);
    coinsVolumes.push(
      parseFloat(cryptocurrencies?.data?.coins[i]['24hVolume'])
    );
  }

  let colors = [];
  while (colors.length < 100) {
    do {
      var color = Math.floor(Math.random() * 1000000 + 1);
    } while (colors.indexOf(color) >= 0);
    colors.push('#' + ('000000' + color.toString(16)).slice(-6));
  }
  function random_bg_color() {
    let bgColor = [];
    for (let i = 0; i < 10; i += 1) {
      let x = 10 + Math.floor(Math.random() * 256);
      let y = 50 + Math.floor(Math.random() * 256);
      let z = 100 + Math.floor(Math.random() * 256);
      bgColor.push(
        '#' + ((1 << 24) + (x << 16) + (y << 8) + z).toString(16).slice(1)
      );
    }
    return bgColor;
  }

  //console.log(coinsVolumes);
  const data = {
    labels: coinsLabels,
    datasets: [
      {
        label: 'The last 24h trading volume',
        data: coinsVolumes,
        hoverOffset: 4,
        backgroundColor: random_bg_color(),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    // plugins: {
    //   legend: {
    //     display: false,
    //   },
    // },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + '%';
          return percentage;
        },
        color: '#333',
      },
    },
  };
  return (
    <div className="relative w-70w h-40v">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PieChart;
