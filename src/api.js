import Axios from 'axios';

export const fetchStreets = async () => {
  const result = await Axios.get(
    'https://dispex.org/api/vtest/Request/streets'
  );
  return result.data;
};

export const fetchHouses = async (streetId) => {
  const result = await Axios.get(
    `https://dispex.org/api/vtest/Request/houses/${streetId}`
  );
  return result.data;
};

export const fetchApartments = async (cityId, streetId, houseId) => {
  const result = await Axios.get(
    `https://dispex.org/api/vtest/HousingStock?companyId=${cityId}&streetId=${streetId}&houseId=${houseId}`
  );
  return result?.data?.filter(
    (el) => el.streetId === streetId && el.houseId === houseId
  );
};

export const fetchTenants = async (addressId) => {
  const result = await Axios.get(
    `https://dispex.org/api/vtest/HousingStock/clients?addressId=${addressId}`
  );
  return result.data;
};

export const addNewTenant = async (obj, selectedApartment) => {
  try {
    const response = await Axios.post(
      'https://dispex.org/api/vtest/HousingStock/client',
      {
        Id: 0,
        Name: `${obj.name}`,
        Phone: `${obj.phone}`,
        Email: `${obj.email}`,
        BindId: 0,
      },
      {
        headers: {
          accept: 'text/plain',
          'Content-Type': 'application/json',
        },
      }
    );
    obj.id = response.data.id;
  } catch (error) {
    console.log('error addNewTenant', error);
  }

  try {
    await Axios.put(
      'https://dispex.org/api/vtest/HousingStock/bind_client',
      {
        ClientId: obj.id,
        AddressId: selectedApartment.addressId,
      },
      {
        headers: {
          accept: 'text/plain',
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.log('error addNewTenant=', error);
  }
};

export const removeTenant = async (tenantId, selectedApartment) => {
  try {
    await Axios.delete(
      `https://dispex.org/api/vtest/HousingStock/bind_client/${tenantId}`,
      {
        ClientId: tenantId,
        AddressId: selectedApartment.addressId,
      },
      {
        headers: {
          accept: 'text/plain',
        },
      }
    );
  } catch (error) {
    console.log('error del Tenant=', error);
  }
};
