import Axios from 'axios';

const baseUrl = 'https://dispex.org/api/vtest/';

export const fetchStreets = async () => {
  try {
    const result = await Axios.get(`${baseUrl}Request/streets`);
    return result.data;
  } catch (error) {
    console.error('error fetchStreets', error);
  }
};

export const fetchHouses = async (streetId) => {
  try {
    const result = await Axios.get(`${baseUrl}Request/houses/${streetId}`);
    return result.data;
  } catch (error) {
    console.error('error fetchHouses', error);
  }
};

export const fetchApartments = async (cityId, streetId, houseId) => {
  try {
    const result = await Axios.get(
      `${baseUrl}HousingStock?companyId=${cityId}&streetId=${streetId}&houseId=${houseId}`
    );
    return result?.data?.filter(
      (el) => el.streetId === streetId && el.houseId === houseId
    );
  } catch (error) {
    console.error('error fetchApartments', error);
  }
};

export const fetchTenants = async (addressId) => {
  try {
    const result = await Axios.get(
      `${baseUrl}HousingStock/clients?addressId=${addressId}`
    );
    return result.data;
  } catch (error) {
    console.error('error fetchTenants', error);
  }
};

export const addNewTenant = async (obj, selectedApartment) => {
  try {
    const response = await Axios.post(
      `${baseUrl}HousingStock/client`,
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
      `${baseUrl}HousingStock/bind_client`,
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
      `${baseUrl}HousingStock/bind_client/${tenantId}`,
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
