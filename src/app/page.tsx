'use client'
import React, { useState } from 'react';
import List from '../components/List';
import CitiesList from '../components/CitiesList';
import Result from '../components/Result';
import stateData from '../data/state.json';


const statesData = stateData

const IndexPage = () => {
  const [selectedState, setSelectedState] = useState();
  const [cityName, setCityName] = useState();
  const [resultUrl, setResultUrl] = useState('');

  const handleSelectCity = (cityName: any) => {
    setCityName(cityName);
    setResultUrl(`https://states.gov.in/${selectedState}/${cityName}`);
  };

  return (
    <div>
      <h1>City Selection</h1>
      <List states={stateData} setSelectedState={setSelectedState} />
      {selectedState && <CitiesList selectedState={selectedState} handleSelectCity={handleSelectCity} />}
      <Result url={resultUrl} />
    </div>
  );
};

export default IndexPage;
