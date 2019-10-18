import React, { useState, useEffect } from 'react';
import flights from '../../api/flights';

const ResultList = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const results = await flights.fetch();
    setData(results.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <div>
      Hello
    </div>
  );
};

export default ResultList;
