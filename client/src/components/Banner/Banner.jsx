import React from 'react';
import BpkText from 'bpk-component-text';
import BpkLongArrowIcon from 'bpk-component-icon/lg/long-arrow-right';
import styles from './Banner.scss';

const Banner = () => (
  <div className={styles.banner}>
    <div className={styles.container}>
      <div>
        <BpkText className={styles.location}>EDI</BpkText>
        <BpkLongArrowIcon />
        <BpkText className={styles.location}>LHR</BpkText>
      </div>
      <div>
        <BpkText className={styles.subtitle}>2 Travellers, Economy</BpkText>
      </div>
    </div>
  </div>
);

export default Banner;
