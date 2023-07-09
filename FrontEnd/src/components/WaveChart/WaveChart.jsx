import React, { useEffect } from 'react'
import Chart from "react-apexcharts";

// function to generate random data for the chart after every 1 second



function WaveChart() {
    const [series, setSeries] = React.useState([
        {
            name: "series1",
            data: [31, 40, 28, 51, 42, 109, 100],
        },
    ]);

    useEffect(() => {
        setInterval(() => {
            setSeries((series) => [
                {
                    name: "series1",
                    // limit the data from 0 to 100
                    data: series[0].data.map((d) =>
                        d < 0 ? 0 : d > 100 ? 100 : d + Math.floor(Math.random() * 20) - 10
                    ),
                },
            ]);
        }, 5000);
    }, [series]);


    const options = {
        chart: {
            height: "100%",
            type: "line",
            animation: {
                enabled: true,
                easing: "linear",
                dynamicAnimation: {
                    speed: 3000,
                },            
        },
        zoom: {
            enabled: false,
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        colors: ["#6527be"],
        grid: {
            show: true,
        },
        // xaxis: {
        //     timestamp: {
        //         unit: "second",
        //     },
        //     categories: [
        //         "2021-09-19T00:00:00.000Z",
        //         "2021-09-19T01:30:00.000Z",
        //         "2021-09-19T02:30:00.000Z",
        //         "2021-09-19T03:30:00.000Z",
        //         "2021-09-19T04:30:00.000Z", 
        //         "2021-09-19T05:30:00.000Z",
        //         "2021-09-19T06:30:00.000Z",
        //     ],
        // },
        
    },
    };


  return (
   <div id='chart'>
         <Chart options={options} series={series} type="line" height="90%" />
   </div>
  )
}

export default WaveChart
