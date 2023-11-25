import React from 'react';

const TenantList = ({ tenants, removeTenant }) => {
  return (
    <>
      {tenants.length === 0 ? (
        <h3>нет жильцов</h3>
      ) : (
        <ul className="tenants">
          {tenants &&
            tenants.map((tenant) => (
              <li key={tenant.id}>
                {tenant.name}{' '}
                <button onClick={() => removeTenant(tenant.id)}>
                  выгнать из квартиры
                </button>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default TenantList;
