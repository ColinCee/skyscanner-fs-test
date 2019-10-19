import React, { useState, useEffect } from 'react';
import flights from '../../api/flights';
import Result from './Result';

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

  return (
    <div>
      {results}
    </div>
  );
};

export default ResultList;
