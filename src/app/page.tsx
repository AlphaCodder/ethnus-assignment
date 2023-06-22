'use client'
import React, { useState } from 'react';
import List from '../components/List';
import CitiesList from '../components/CitiesList';
import Result from '../components/Result';

const citiesData = [
  { id: 1, name: 'City 1' },
  { id: 2, name: 'City 2' },
  { id: 3, name: 'City 3' },
];

const IndexPage = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [resultUrl, setResultUrl] = useState('');

  const handleSelectCity = (cityName) => {
    setSelectedCity(cityName);
    setResultUrl(`https://example.com/${cityName}`);
  };

  return (
    <div>
      <h1>City Selection</h1>
      <List cities={citiesData} onSelectCity={handleSelectCity} />
      <CitiesList cities={citiesData} />
      <Result url={resultUrl} />
    </div>
  );
};

export default IndexPage;
