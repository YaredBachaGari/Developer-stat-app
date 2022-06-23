import React, { useState } from 'react'
import GhanttChart from './Charts/chartjsCharts/Ghantchart'
import mockLinkedin from '../context/mockData.js/mockLinkedin'
import {DateTime} from 'date-fns'
import {de} from 'date-fns/locale';


const Education = () => {
     const [myuser] = mockLinkedin
     const workExp = myuser.Work_History
     const acedamics = myuser.education
     console.log(acedamics)

    const [experiance, setExperiance ]= useState({
        labels: acedamics.map((comp)=> comp.Degree),
        datasets: [
                {
                    label: 'professional degrees',
                    data: acedamics.map((comp)=>{
                        
                      return[Date.parse(comp.Start_year), Date.parse(comp.End_year)]
                    }
                    ),
                    backgroundColor: [
                      '#50D8D7'
                    ],
                    barPercentage:0.3,
                    // borderColor: 'white',
                    // borderWidth: 1,
                    industry: acedamics.map((comp)=>comp.Field),
                },
        ],
        
    })
// console.log(experiance)
    const config = {
        responsive: true,
        experiance,
        indexAxis:'y',
            scales: {
              responsive: true,
              x: {
                min:'2005-01-01',
                max:'2022-01-01',
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
                  text: 'Acedamic Years',
                  color: '#00325c',
                  font: {
                    // family: 'Comic Sans MS',
                    size: 14,
                    weight: 'bold',
                    lineHeight: 1.2,
                  },
                  padding: {top: 10, left: 0, right: 0, bottom: 0}
                }
              },
              y: {
                responsive: true,
                display: true,
                title: {
                  display: true,
                  text: 'Degrees',
                  color: '#00325c',
                  font: {
                    // family: 'Times',
                    size: 16,
                    style: 'normal',
                    lineHeight: 1.2
                  },
                  padding: {top: 20, left: 0, right: 10, bottom: 0}
                }
              }
            },

        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Acedamic Background ',
            weight: "normal",
            color: "#00325c",
            font: {
            size: 20
            }},

          datalabels:{
            responsive: true,
            display:true,
              anchor:'end',
              align: 'top',
              color: "#00325c",
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

export default Education;