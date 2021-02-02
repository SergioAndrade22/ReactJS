import { createAction } from "redux-actions";
import { UPDATE_CUSTOMER } from "../constants";
import { apiPostCustomer } from "../api";

export const updateCustomer = createAction(UPDATE_CUSTOMER,
    customer => apiPostCustomer(customer));