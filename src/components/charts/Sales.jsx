import { useEffect } from "react";
import ApexCharts from "apexcharts";

const Sales = () => {
    useEffect(() => {
        const options = {
            series: [30, 20, 12],
            chartOptions: {
                labels: ['In Store Sales', 'Mail Order Sales', 'Download Sales']
            },
            chart: {
                type: 'donut'
            },
            dataLabels: {
                enables: true,
            },
            plotOptions: {
                pie: {
                    expandOnClick: true,
                    offsetX: 0,
                    offsetY: 0,
                    customScale: 1,
                    size: 200,
                    donut: {
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '16px',
                                fontFamily: 'Helvetica, san-serif',
                                color: '#999',
                                offsetY: -10
                            },
                            value: {
                                show: true,
                                fontSize: '12px',
                                fontFamily: 'Helvetica, san-serif',
                                color: '#777',
                                offsetY: -3
                            }
                        },
                        size: '65%'
                    }
                }
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

export default Sales
