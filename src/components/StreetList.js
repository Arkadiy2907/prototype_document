import React from 'react';

const StreetList = ({ streets, handleStreetSelect }) => {
  return (
    <ul className="streets">
      {streets.map((street) => (
        <li key={street.id} onClick={() => handleStreetSelect(street)}>
          {street.name}
        </li>
      ))}
    </ul>
  );
};

export default StreetList;
