import React from 'react';

const CitiesList = ({ cities }) => {
  return (
    <div>
      <h2>List of Cities:</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CitiesList;
