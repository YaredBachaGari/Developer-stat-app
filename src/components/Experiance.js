import React, { useState } from 'react'
import Bargraph from './Charts/chartjsCharts/Bar'
import mockLinkedin from '../context/mockData.js/mockLinkedin'


const Experiance = () => {
     const [myuser] = mockLinkedin
     const workExp = myuser.Work_History

    const [experiance, setExperiance ]= useState({
        labels: workExp.map((comp)=> comp.company),
        datasets: [
                {
                    label: '',
                    data: workExp.map((comp)=>comp.year
                    ),
                    backgroundColor: [
                        '#50D8D7','#9639B8','#E046B7', '#BAFCCE', '#E08E45', '#4f5165', '#6B2737'
                    ],
                    industry: workExp.map((comp)=>comp.industry),
                },

        ],
        
    })

    const config = {
        responsive: true,
        experiance,
        indexAxis:'x',
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: 'Companies',
                  color: '#00325c',
                  font: {
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
                  text: 'Years',
                  color: '#00325c',
                  font: {
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
            text: 'Experiance by industry and company  ',
            weight: "normal",
            color: "#00325c",
            font: {
            size: 20
            }},

          datalabels:{
              anchor:'end',
              align: 'top',
              font: {
                family: 'Comic Sans MS',
                size: 12,
                weight: 'normal',
                lineHeight: 1.2,
              },

              formatter: (value, context)=>{
                  if(context.active){
                      return context.dataset.industry[context.dataIndex]
                  }else{
                      return value
                  } 
                },
            },
            tooltip:{
                enabled: false
            }
        },

      };

  return (
    <div className='industry-exp'>
       <Bargraph chartdata = {experiance} options ={config} />
    </div>
  )
}

export default Experiance