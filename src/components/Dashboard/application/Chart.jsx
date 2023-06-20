import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale } from 'chart.js';

// Register required elements and scale globally
Chart.register(LineElement, PointElement, LinearScale);

const ChartComponent = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Visitors',
        data: [100, 200, 300, 400, 500, 600],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.4,
        elements: {
          point: {
            radius: 0, // Set point radius to 0 to hide points
          },
        },
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear', // Use linear scale for numeric data
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Visitors',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ChartComponent;
