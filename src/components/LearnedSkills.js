import React, { useState } from 'react'
import Bargraph from './Charts/chartjsCharts/Bar'
import mockLinkedin from '../context/mockData.js/mockLinkedin'


const Experiance = () => {
     const [myuser] = mockLinkedin
     const certif = myuser.certificates
     
    const [experiance, setExperiance ]= useState({
        labels: certif.map((comp)=> comp.course),
        datasets: [
                {
                    label: '',
                    data: certif.map((comp)=>new Date(comp.Issued).getFullYear()
                    ),
                    backgroundColor: [
                        '#50D8D7','#9639B8','#E046B7', '#AFCCE6', '#E08E45', '#4f5165', '#9B2737', '#E08F85'
                    ],
                    barPercentage:1,
                    industry: certif.map((comp)=>comp.institution),
                },
        ],
        
    })

    const config = {
        responsive: true,
        experiance,
        indexAxis:'y',
            scales: {
              x: {
                  
                type: "time",
                time: {
                  unit: "year"
                },
                display: true,
                title: {
                  display: true,
                  text: 'period',
                  color: '#00325c',
                  font: {
                    size: 14,
                    weight: 'bold',
                    lineHeight: 1.2,
                  },
                  padding: {top: 10, left: 0, right: 0, bottom: 0}
                }
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: 'courses',
                  color: '#00325c',
                  font: {
                    size: 16,
                    style: 'normal',
                    lineHeight: 1.2
                  },
                  padding: {top: 30, left: 0, right: 0, bottom: 0}
                }
              }
            },

        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Learning pattern ',
            weight: "normal",
            color: "#00325c",
            font: {
            size: 20
            }},

          datalabels:{
              anchor:'center',
              align: 'center',
              color:'white',
              font: {
                family: 'Comic Sans MS',
                size: 12,
                weight: 'normal',
                lineHeight: 1.2,
                
              },

              formatter: (value, context)=>{
                  console.log(value)
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
    <div className='industry-exp skills'>
       <Bargraph chartdata = {experiance} options ={config} />
    </div>
  )
}

export default Experiance