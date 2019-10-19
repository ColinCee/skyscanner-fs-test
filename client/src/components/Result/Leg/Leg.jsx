import React from 'react';
import moment from 'moment';
import BpkLongArrowIcon from 'bpk-component-icon/lg/long-arrow-right';
import styles from './Leg.scss';

const Leg = ({departure, arrival}) => {

  const departureTime = moment(departure);
  const arrivalTime = moment(arrival);
  const duration = moment.duration(arrivalTime.diff(departureTime)).asMinutes();
  console.log({ departure, arrival })
  return (
    <div className={styles.leg}>
      <div className={styles.flightDetails}>
        <img
          src={`${process.env.PUBLIC_URL} EZ.png`}
          alt='Airline Icon'
          className={styles.airlineIcon}
        />
        <div className={styles.flexCol}>
          <span className={styles.timeText}>{departureTime.format('HH:mm')}</span>
          <span className={styles.airportText}>EDI</span>
        </div>
        <BpkLongArrowIcon className={styles.arrowIcon} />
        <div className={styles.flexCol}>
          <span className={styles.timeText}>{arrivalTime.format('HH:mm')}</span>
          <span className={styles.airportText}>LHR</span>
        </div>
      </div>
      <div className={styles.flightInfo}>
        <span className={styles.durationText}>{`${Math.trunc(duration / 60)}h ${duration % 60}`}</span>
        <span className={styles.stopsText}>Direct</span>
      </div>
    </div>
  );
};

export default Leg;
