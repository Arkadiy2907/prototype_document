import React from 'react';

const HouseList = ({ houses, handleHouseSelect }) => {
  return (
    <ul className="houses">
      {houses &&
        houses.map((house) => (
          <li key={house.id} onClick={() => handleHouseSelect(house)}>
            дом: {house.name}
          </li>
        ))}
    </ul>
  );
};

export default HouseList;
