import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
export const options = {
     plugins: {
       title: {
         display: true,
         text: 'Chart.js Bar Chart - Stacked',
       },
     },
     responsive: true,
     scales: {
       x: {
         stacked: true,
       },
       y: {
         stacked: true,
       },
     },
   };
export function StackedBarChart({data}:any){
     return <Bar options={options} data={data} />;

}