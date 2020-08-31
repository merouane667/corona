import React, { useContext,useEffect } from 'react';
import { Context } from '../../DataCenter/DataCenter';
import { Line,Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = () => {
    
    const {getDailyData,dailyDataState,countryState,dataState}=useContext(Context);

    useEffect(() => {
        getDailyData();


    }, []);

    const lineChart = (
        dailyDataState.length != 0 ?
        (<Line
        data={{
            labels:dailyDataState.map(({date}) => date),
            datasets:[{

                data: dailyDataState.map(({confirmed}) => confirmed),
                label: 'Infected',
                borderColor:'#3333ff',
                fill:true,

            },{
                data: dailyDataState.map(({deaths}) => deaths),
                label: 'Deaths',
                borderColor:'red',
                backgroundColor:'rgba(255,0,0,0.5)',
                fill:true,

            }],
        }}
        />) : null
    );
    if(!dataState.confirmed)
    return ''
    const barChart = (
        dataState ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [dataState.confirmed.value, dataState.recovered.value, dataState.deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in ${countryState}` },
            }}
          />
        ) : null
      );
      
    

    return (
        <div className={styles.container}>
            {countryState ? barChart : lineChart}
        </div>
        
    );
}

export default Chart;
