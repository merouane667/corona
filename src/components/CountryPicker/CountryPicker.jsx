import React, { useContext,useEffect } from 'react';
import { Context } from '../../DataCenter/DataCenter';
import {NativeSelect, FormControl} from '@material-ui/core';
import Styles from './CountryPicker.module.css';

const CountryPicker = () => {
    const {getCountries,countriesState,countryState,getCountry}=useContext(Context);

    useEffect(() => {
        getCountries();


    }, [countriesState]);

    if(!countriesState)
    return ''

    return (
        <div>
            <FormControl >
                <NativeSelect defaultValue='' onChange={(e) => getCountry(e.target.value)}>
                    <option id='option' value="" >Global</option>
                {
                    countriesState.map((country,i) => <option key={i} value={country.country} style={{backgroundImage:'url(https://www.countryflags.io/ma/shiny/64.png)'}}> {country.country}</option>)
                }

                </NativeSelect>
            </FormControl>


            
        </div>
    );
}

export default CountryPicker;
