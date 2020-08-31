import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const Context = createContext();
export const DataCenter = (props) => {

    const [dataState,setData]=useState([]);
    const [dailyDataState,setDailyData]=useState([]);
    const [countriesState,setCountries]=useState([]);
    const [countryState,setCountry]=useState('');
    const url='https://covid19.mathdro.id/api';

    const getData = async (country)=>{
        let changeableUrl = url;
        if(country){
            changeableUrl = `${url}/countries/${country}`;
        }
        try{
            const {data} = await axios.get(changeableUrl);
            const modifiedData = {
                confirmed: data.confirmed,
                recovered:data.recovered,
                deaths:data.deaths,
                lastUpdate:data.lastUpdate
            }

            setData(modifiedData);

        }catch(err){
            console.log(err);
        }
    }

    const getDailyData = async ()=>{
        try{
            const {data} = await axios.get(`${url}/daily`);
            const modifiedData = data.map((dailyData) => ({
                confirmed : dailyData.confirmed.total,
                deaths : dailyData.deaths.total,
                date : dailyData.reportDate,

            }))
            setDailyData(modifiedData);

        }catch(err){
            console.log(err);
        }
    }

    const getCountries= async ()=>{
        try{
            const {data} = await axios.get(`${url}/countries`);
            const modifiedData = data.countries.map((country) => ({
                country : country.name,
                iso2 : country.iso2,

            }))
            setCountries(modifiedData)

        }catch(err){
            console.log(err);
        }
    }
    const getCountry= async (country)=>{
        getData(country);
        setCountry(country)

    }



    return (
        <div>
            <Context.Provider value={{getData,dataState,getDailyData,dailyDataState,getCountries,countriesState,countryState,getCountry}}>
                {props.children}
            </Context.Provider>
            
        </div>
    );
}


