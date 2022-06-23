import React from 'react'
import { Bar } from 'react-chartjs-2';
import {Chart} from 'chart.js';
import {Chart as ChartJS, CategoryScale,TimeScale, PointElement, LineElement, LinearScale, BarElement,Title, Tooltip, Legend,} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chartjs-adapter-date-fns';
import {DateTime} from 'date-fns'
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
    PointElement, 
    LineElement
  );



const GhanttChart = ({chartdata, options}) => {
  return (
    <Bar data= {chartdata} options ={options} plugins={[ChartDataLabels]}/>
  )
}

export default GhanttChart;