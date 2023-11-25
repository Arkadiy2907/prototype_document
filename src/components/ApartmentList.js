import React from 'react';

const ApartmentList = ({ apartments, handleApartmentSelect }) => {
  return (
    <ul className="apartments">
      {apartments &&
        apartments.map((apartment) => (
          <li
            key={apartment.addressId}
            onClick={() => handleApartmentSelect(apartment)}
          >
            квартира {apartment.addressId}
          </li>
        ))}
    </ul>
  );
};

export default ApartmentList;
