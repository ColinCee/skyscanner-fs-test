import React from 'react';
import STYLES from './App.scss';
import Header from './../Header';
import Banner from '../Banner/Banner';
import Actions from '../Actions/Actions';
import ResultList from '../Result/ResultList';

const c = className => STYLES[className] || 'UNKNOWN';

const App = () => (
  <div className={c('App')}>
    <Header />
    <Banner />
    <Actions />
    <ResultList />
  </div>
);

export default App;
