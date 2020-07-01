import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';


const ChartComponent = () => {
    const chart = useRef(null);

    useEffect(() => {
        console.log(chart)

        var ctx =  chart.current.getContext('2d');

        new Chart( ctx , {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },
            options: {}
          });
    }, [])

    return (
        <div className="chart-wrap">
            <canvas className="chart" ref={ chart }> test </canvas>
            <button> Randomize </button>
        </div>
    )
}

export default ChartComponent;