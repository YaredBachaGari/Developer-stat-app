// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);


const ChartComponent=({Chrtdata})=>{
  const chartConfigs = {
    type: "bar2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Top Five Most forked Repos",
        yAxisName:'Forks',
        xAxisName: 'Repositories',
        yAxisNameFontSize:'16px',
        xAxisNameFontSize:'16px',
        theme: "fusion",
        decimals:2,
        paletteColors:'#50D8D7,#9639B8,#E046B7, #BAFCCE, #E08E45, #4f5165, #6B2737'
      },
      // Chart Data
      data:Chrtdata
    }
  };
  
  return (<ReactFC {...chartConfigs} />);
}


export default ChartComponent;


