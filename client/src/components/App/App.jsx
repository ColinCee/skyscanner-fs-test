import React from 'react';
import BpkText from 'bpk-component-text';

import STYLES from './App.scss';
import Header from './../Header';
import Banner from '../Banner/Banner'
import Actions from '../Actions/Actions';
const c = className => STYLES[className] || 'UNKNOWN';

const App = () => (
  <div className={c('App')}>
    <Header />
    <Banner />
    <Actions />
    <main className={c('App__main')}>
      <BpkText tagName="p">Over to you...</BpkText>
    </main>
  </div>
);

export default App;
