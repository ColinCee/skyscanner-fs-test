import React from 'react';
import { Image } from 'semantic-ui-react';
import BpkLongArrowIcon from 'bpk-component-icon/lg/long-arrow-right';
import styles from './Leg.scss';

const Leg = () => (
  <div className={styles.leg}>
    <div className={styles.flightDetails}>
      <Image
        src={`${process.env.PUBLIC_URL} EZ.png`}
        className={styles.airlineIcon}
      />
      <div className={styles.flexCol}>
        <span className={styles.timeText}>07:00</span>
        <span className={styles.airportText}>EDI</span>
      </div>
      <BpkLongArrowIcon className={styles.arrowIcon} />
      <div className={styles.flexCol}>
        <span className={styles.timeText}>08:30</span>
        <span className={styles.airportText}>LHR</span>
      </div>
    </div>
    <div className={styles.flightInfo}>
      <span className={styles.durationText}>1h 30</span>
      <span className={styles.stopsText}>Direct</span>
    </div>
  </div>
);

export default Leg;
