import React from 'react';
import BpkButton from 'bpk-component-button';
import Leg from './Leg';
import styles from './Result.scss';

const Result = props => (
  <div className={styles.result}>
    <Leg {...props} />
    <Leg {...props} />
    <div className={styles.flexRow}>
      <div className={styles.flexCol}>
        <h1 className={styles.priceText}>£98</h1>
        <p className={styles.siteText}>omegaflightstore.com</p>
      </div>
      <BpkButton className={styles.button}>Select</BpkButton>
    </div>
  </div>
);

export default Result;
