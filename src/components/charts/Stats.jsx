import { useEffect } from "react";
import ApexCharts from "apexcharts";
const Stats = () => {
    useEffect(() => {
        const options = {
            chart: {
                type: 'bar'
            },
            series: [{
                name: 'statistics',
                data: [75, 42, 75, 38, 19, 93]
            }],
            xaxis: {
                categories: [2010, 2011, 2012, 2013, 2014, 2015]
            }
        };
        const chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();

        return () => {
            chart.destroy();
        }
    }, [])

    return (
        <div id='chart'></div>
    )
}

export default Stats
