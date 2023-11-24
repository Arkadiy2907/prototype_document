import React, { useState, useEffect, useCallback } from 'react';
import StreetList from './components/StreetList';
import HouseList from './components/HouseList';
import ApartmentList from './components/ApartmentList';
import TenantList from './components/TenantList';
import Form from './components/Form';
import * as api from './api';
import './App.css';

const App = () => {
  const [streets, setStreets] = useState([]);
  const [selectedStreet, setSelectedStreet] = useState(null);
  const [houses, setHouses] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [apartments, setApartments] = useState([]);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [tenants, setTenants] = useState([]);
  const [isShown, setIsShown] = useState(true);

  const toggleFieldset = () => setIsShown(!isShown);

  useEffect(() => {
    const fetchStreets = async () => {
      const streetsData = await api.fetchStreets();
      setStreets(streetsData);
    };
    fetchStreets();
  }, []);

  useEffect(() => {
    if (selectedStreet) {
      const fetchHouses = async () => {
        const housesData = await api.fetchHouses(selectedStreet.id);
        setHouses(housesData);
      };
      fetchHouses();
    }
  }, [selectedStreet]);

  useEffect(() => {
    if (selectedHouse) {
      const fetchApartments = async () => {
        const apartmentsData = await api.fetchApartments(
          selectedStreet.cityId,
          selectedStreet.id,
          selectedHouse.id
        );
        setApartments(apartmentsData);
      };
      fetchApartments();
    }
  }, [selectedHouse, selectedStreet]);

  const handleStreetSelect = (street) => {
    setSelectedStreet(street);
    setSelectedHouse(null);
    setSelectedApartment(null);
    setTenants([]);
  };

  const handleHouseSelect = (house) => {
    setSelectedHouse(house);
    setSelectedApartment(null);
    setTenants([]);
  };

  const handleApartmentSelect = (apartment) => {
    setSelectedApartment(apartment);
    setTenants([]);
  };

  const fetchTenants = useCallback(async () => {
    if (selectedApartment) {
      const tenantsData = await api.fetchTenants(selectedApartment.addressId);
      setTenants(tenantsData);
    }
  }, [selectedApartment]);

  const addNewTenant = async (obj) => {
    await api.addNewTenant(obj, selectedApartment);
    setTenants([...tenants, obj]);
  };

  const removeTenant = async (tenantId) => {
    await api.removeTenant(tenantId, selectedApartment);
    setTenants(tenants.filter((tenant) => tenant.id !== tenantId));
  };

  useEffect(() => {
    fetchTenants();
  }, [fetchTenants, selectedApartment]);

  if (streets.length === 0) {
    return <div>LOADING...</div>;
  }

  return (
    <div className="wrapper">
      <div className="wrap_list">
        <h1 onClick={toggleFieldset}>Список жильцов по адресам</h1>

        <div>
          <h2 onClick={toggleFieldset}>выбор улицы</h2>
          {isShown && (
            <StreetList
              streets={streets}
              handleStreetSelect={handleStreetSelect}
            />
          )}
          {selectedStreet && (
            <>
              <h2 onClick={toggleFieldset}>
                выбор дома на улице {selectedStreet.name}
              </h2>
              {isShown && (
                <HouseList
                  houses={houses}
                  handleHouseSelect={handleHouseSelect}
                />
              )}
            </>
          )}
          {selectedHouse && (
            <>
              <h2 onClick={toggleFieldset}>
                выбор квартиры в доме {selectedHouse.name}
              </h2>
              {isShown && (
                <ApartmentList
                  apartments={apartments}
                  handleApartmentSelect={handleApartmentSelect}
                />
              )}
            </>
          )}
          {selectedApartment && (
            <>
              <h2 onClick={toggleFieldset}>
                жители квартиры {selectedApartment.addressId}
              </h2>
              {isShown && (
                <>
                  <TenantList tenants={tenants} removeTenant={removeTenant} />
                  <Form onChange={addNewTenant} />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
