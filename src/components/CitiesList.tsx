import React from 'react';
import stateData from '../data/state.json';

const CitiesList = ({ selectedState, handleSelectCity }) => {
  const stateObj = stateData.filter((state) => state.stateName === selectedState) as unknown as {
    stateId: string,
    stateName: string,
    city: Array<{
      cityId: string,
      cityName: string
    }>
  }
  return (
    <div>
      <h2>List of Cities:</h2>
      <select onChange={e => handleSelectCity(e.target.value)}>
        <option value="">Select a city</option>
        {stateObj[0].city.map((city) => (
          <option key={city.cityId} value={city.cityName}>
            {city.cityName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitiesList;
