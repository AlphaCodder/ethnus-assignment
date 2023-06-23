import React from 'react';

const List = ({ states, setSelectedState }) => {
  return (
    <div>
      <h2>Select a State:</h2>
      <select onChange={(e) => {
        setSelectedState(e.target.value)
      }}>
        <option value="">Select a state</option>
        {states.map((state) => (
          <option key={state.stateId} value={state.name}>
            {state.stateName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default List;
