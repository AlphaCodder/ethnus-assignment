import React from 'react';
import stateData from '../data/state.json';
type State = {
  stateId: string,
  stateName: string,
  city: Array<{
    cityId: string,
    cityName: string
  }>
}
const CitiesList = ({ selectedState, handleSelectCity }: { selectedState: any, handleSelectCity: any }) => {
  const stateObj = stateData.filter((state) => state.stateName === selectedState) as unknown as State[];
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
