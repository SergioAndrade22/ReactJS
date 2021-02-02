import { createAction } from "redux-actions";
import { UPDATE_CUSTOMER } from "../constants";
import { apiPutCustomer } from "../api";

export const updateCustomer = createAction(UPDATE_CUSTOMER,
    (id, customer) => apiPutCustomer(id, customer));