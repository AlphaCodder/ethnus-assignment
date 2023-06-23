import React from 'react';

type State = {
  stateId: string,
  stateName: string,
  city: Array<{
    cityId: string,
    cityName: string
  }>
}

const List = ({ states, setSelectedState }: { states: State[], setSelectedState: any }) => {
  return (
    <div>
      <h2>Select a State:</h2>
      <select onChange={(e) => {
        setSelectedState(e.target.value)
      }}>
        <option value="">Select a state</option>
        {states.map((state) => (
          <option key={state.stateId} value={state.stateName}>
            {state.stateName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default List;
