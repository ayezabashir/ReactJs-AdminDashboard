import ApexCharts from "apexcharts";
import { useEffect } from "react";

const Todaychart = () => {
    useEffect(() => {
        const options = {
            chart: {
                height: 120,
                width: 90,
                type: "radialBar"
            },
            series: [58],
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 15,
                        size: "50%"
                    },

                    dataLabels: {
                        showOn: "always",
                        name: {
                            show: false,
                        },
                        value: {
                            offsetY: 5,
                            color: "#111",
                            fontSize: "14px",
                            show: true
                        }
                    }
                }
            },
            stroke: {
                lineCap: "round",
            },
            labels: ["Progress"],
            colors: ['#3a5a5f',]

        };
        const chart = new ApexCharts(document.querySelector("#today-chart"), options);
        chart.render();

        return () => {
            chart.destroy();
        }
    }, []);
    return (
        <div id="today-chart"></div>
    )
}

export default Todaychart
