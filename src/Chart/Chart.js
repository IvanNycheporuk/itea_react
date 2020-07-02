import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js';

const ChartComponent = () => {
    const [ chartData, setChartData ] = useState([0, 10, 5, 2, 20, 30, 45])
    const chart = useRef(null);

    const randomInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomizeData = ( count, min, max ) => () => {
        let randomArr = [];

        for (let i = 0; i < count; i++) {
            randomArr.push( randomInteger(min, max) );
        }

        setChartData( randomArr );
    }

    useEffect(() => {
        var ctx =  chart.current.getContext('2d');

        new Chart( ctx , {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: chartData
                }]
            },
            options: {}
          });
    }, [chartData])

    return (
        <div className="chart-wrap">
            <canvas className="chart" ref={ chart }> test </canvas>
            <button onClick={ randomizeData(7, 0 , 100) }> Randomize </button>
        </div>
    )
}

export default ChartComponent;