import React from 'react'
import { Bar } from 'react-chartjs-2';
import {Chart} from 'chart.js';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement,Title, Tooltip, Legend,} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );



const Bargraph = ({chartdata, options}) => {
  return (
    <Bar data= {chartdata} options ={options} plugins={[ChartDataLabels]}/>
  )
}

export default Bargraph