import React from 'react'
import ReactApexChart from 'react-apexcharts';

const Donut = () => {
    const state = {
          
        series: [44, 22, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
  return (
    <div>
      <ReactApexChart options={state.options} series={state.series} type="donut" />
    </div>
  )
}

export default Donut
