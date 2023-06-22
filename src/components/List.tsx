import React from 'react';

const List = ({ cities, onSelectCity }) => {
  return (
    <div>
      <h2>Select a City:</h2>
      <select onChange={(e) => onSelectCity(e.target.value)}>
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default List;
