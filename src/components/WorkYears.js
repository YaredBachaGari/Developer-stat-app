import React, { useState } from 'react'
import GhanttChart from './Charts/chartjsCharts/Ghantchart'
import mockLinkedin from '../context/mockData.js/mockLinkedin'
import {DateTime} from 'date-fns'
import {de} from 'date-fns/locale';


const WorkYears = () => {
     const [myuser] = mockLinkedin
     const workExp = myuser.Work_History
     const certs = myuser.certificates

    const [experiance, setExperiance ]= useState({
        labels: workExp.map((comp)=> comp.company),
        datasets: [
                {
                    label: 'Interruption',
                    data: workExp.map((comp)=>{
                      
                      return[Date.parse(comp.start_date), Date.parse(comp.end_date)]
                    }
                    ),
                    backgroundColor: [
                        '#50D8D7','#9639B8','#E046B7', '#BAFCCE', '#E08E45', '#4f5165', '#6B2737'
                    ],
                    barPercentage:0.15,
                    // borderColor: 'white',
                    // borderWidth: 1,
                    industry: workExp.map((comp)=>comp.industry),
                },
                // {
                //    label: 'industry',
                //     data:workExp.map((comp)=>comp.industry),
                //     backgroundColor: [
                //         "rgba(75,192,192,1)",
                //         "#2a71d0",
                //         "#50AF95",
                //         "#f3ba2f",
                //         "#ecf0f1",
                //     ],
                // }
        ],
        
    })
// console.log(experiance)
    const config = {
        responsive: true,
        experiance,
        indexAxis:'y',
            scales: {
              x: {
                min:'2012-07-01',
                max:'2023-03-01',
                type: "time",
                time: {
                  unit: "year"
                },
                
                display: true,
                grace:'50px',
                ticks:{
                  stepSize:1
                },
                title: {
                  display: true,
                  text: 'Years of experiance',
                  color: '#00325c',
                  font: {
                    // family: 'Comic Sans MS',
                    size: 14,
                    weight: 'bold',
                    lineHeight: 1.2,
                  },
                  padding: {top: 20, left: 0, right: 0, bottom: 0}
                }
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: 'Company',
                  color: '#00325c',
                  font: {
                    // family: 'Times',
                    size: 16,
                    style: 'normal',
                    lineHeight: 1.2
                  },
                  padding: {top: 10, left: 0, right: 0, bottom: 0}
                }
              }
            },

        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Continuity of the experiance ',
            weight: "normal",
            color: "#00325c",
            font: {
            size: 20
            }},

          datalabels:{
            display:true,
              anchor:'center',
              align: 'top',
              font: {
                family: 'Comic Sans MS',
                size: 12,
                weight: 'normal',
                lineHeight: 1.2,
              },

              formatter: (value, context)=>{
                console.log(context)
                  if(context.active){
                      return context.dataset.industry[context.dataIndex]
                  }else{
                      return `${new Date(value[0]).getFullYear()} - ${new Date(value[1]).getFullYear()}`
                  } 
                },
                // formatter: (value, context)=>{
                //   console.log(context.dataset.data)
                //   return context.dataset.data[context.dataIndex]
                //   },
            },
            tooltip:{
                enabled: false
            }
        },

      };

  return (
    <div className='industry-exp'>
       <GhanttChart chartdata = {experiance} options ={config} />
    </div>
  )
}

export default WorkYears;