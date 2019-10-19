import React, { useState, useEffect } from 'react';
import { BpkExtraLargeSpinner, SPINNER_TYPES } from 'bpk-component-spinner';
import flights from '../../api/flights';
import Result from './Result';
import styles from './ResultsList.scss';

const ResultList = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const results = await flights.fetch();
    await setData(results.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const results = data.map((value, index) => {
    return <Result {...value} key={index} />;
  });

  if (data.length === 0) {
    return (
      <div className={styles.spinner}>
        <BpkExtraLargeSpinner type={SPINNER_TYPES.primary} />
      </div>
    );
  }
  return (
    <div>
      {results}
    </div>
  );
};

export default ResultList;
