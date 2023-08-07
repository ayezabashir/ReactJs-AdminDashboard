import { useEffect } from "react";
import ApexCharts from "apexcharts";

const Revenue = () => {
    useEffect(() => {
        const options = {
            series: [{
                type: 'area',
                data: [60, 70, 32, 104, 10, 100]
            }, {
                type: 'area',
                data: [20, 30, 65, 20, 97, 120]
            }
            ],
            labels: [2008, 2010, 2012, 2014, 2016, 2018],
            chart: {
                type: 'area'
            },
            stroke: {
                curve: 'smooth',
                width: 2
            },
            colors: ['#3a5a5f', '#f6ad26']

        };
        const chart = new ApexCharts(document.querySelector("#revenue-chart"), options);
        chart.render();

        return () => {
            chart.destroy();
        }
    }, [])

    return (
        <div id='revenue-chart'></div>
    )
}

export default Revenue
