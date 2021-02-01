import CUSTOMERS_URL from '../constants/urls.js';

export const apiGetCustomers = () => fetch(CUSTOMERS_URL).then( response => response.json());