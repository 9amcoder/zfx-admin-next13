import React, { FunctionComponent } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

interface DataElement {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

interface ChartComponentProps {
  data?: DataElement[];
}

const ChartComponent: FunctionComponent<ChartComponentProps> = ({ data = [] }) => {
  const labels = data.map((item) => item.name);
//   const dataset1 = {
//     label: 'Dataset 1',
//     data: data.map((item) => item.uv),
//     borderColor: 'rgb(255, 99, 132)',
//     backgroundColor: 'rgba(255, 99, 132, 0.5)',
//   };
  const dataset2 = {
    label: 'Dataset',
    data: data.map((item) => item.pv),
    borderColor: 'rgb(53, 162, 235)',
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
  };
  const chartData = {
    labels,
    datasets: [dataset2],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: '',
      },
    },
    scales: {
      x: {
        type: 'category',
      },
      y: {
        type: 'linear',
      },
    },
  };

  Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  return <Line data={chartData} options={options as any} />;
};

export default ChartComponent;