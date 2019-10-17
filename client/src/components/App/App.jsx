import React from 'react';
import STYLES from './App.scss';
import Header from './../Header';
import Banner from '../Banner/Banner';
import Actions from '../Actions/Actions';
import Result from '../Result/Result';

const c = className => STYLES[className] || 'UNKNOWN';

const App = () => (
  <div className={c('App')}>
    <Header />
    <Banner />
    <Actions />
    <Result />
  </div>
);

export default App;
