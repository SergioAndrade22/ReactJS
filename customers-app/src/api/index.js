import CUSTOMERS_URL from '../constants/urls.js';

export const apiGetCustomers = () => fetch(CUSTOMERS_URL).then( response => response.json());

export const apiPutCustomer = (id, customer) => fetch(`${CUSTOMERS_URL}/${id}`,{
    method: 'PUT',
    body: JSON.stringify(customer),
    headers: new Headers({'Content-type': 'application/json'})
}).then(response => response.json());

export const apiPostCustomer = customer => fetch(`${CUSTOMERS_URL}`,{
    method: 'POST',
    body: JSON.stringify(customer),
    headers: new Headers({'Content-type': 'application/json'})
}).then(response => response.json());