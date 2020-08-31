import React, { useContext,useEffect } from 'react';
import { Context } from '../../DataCenter/DataCenter';
import { Card, CardContent , Typography , Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = () => {
    const {getData,dataState}=useContext(Context);

    useEffect(() => {
        getData();


    }, []);

    if(!dataState.confirmed)
    return 'Loading...'
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3}  className={cx(styles.card , styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varaint='h5' class="text-center border px-1 py-2" style={{fontSize:'1.5em'}}>
                            <CountUp start={0} end={dataState.confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color='textSecondary' >{new Date(dataState.lastUpdate).toDateString()} </Typography>
                        <Typography varaint='body2'>Number of <span style={{color:'rgba(0, 0, 255, 0.5)'}}>active</span> cases of COVID-19</Typography>
                    </CardContent>

                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography varaint='h5' class="text-center border px-1 py-2" style={{fontSize:'1.5em'}}>
                            <CountUp start={0} end={dataState.recovered.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(dataState.lastUpdate).toDateString()}</Typography>
                        <Typography varaint='body2'>Number of <span style={{color:'rgba(0, 255, 0, 0.5)'}}>recoveries</span> cases of COVID-19</Typography>
                    </CardContent>

                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography varaint='h5' class="text-center border px-1 py-2" style={{fontSize:'1.5em'}}>
                            <CountUp start={0} end={dataState.deaths.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(dataState.lastUpdate).toDateString()}</Typography>
                        <Typography varaint='body2'>Number of <span style={{color:'rgba(255, 0, 0, 0.5)'}}>deaths</span> deaths cases of COVID-19</Typography>
                    </CardContent>

                </Grid>
            </Grid>



        </div>
    );
}

export default Cards;
