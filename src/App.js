import React, { useContext } from 'react';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import { Context, DataCenter } from './DataCenter/DataCenter';
import styles from './App.module.css';
import coronaImage from './images/image.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <DataCenter>

      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt='COVID_19'></img>
        <Cards/>
        <CountryPicker/>
        <Chart/>



      </div>

    </DataCenter>
  );
}

export default App;
