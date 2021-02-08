import axios from 'axios';

const axiosOrders = axios.create({
    baseURL: 'https://burger-builder-2f7ae-default-rtdb.firebaseio.com/'
})

export default axiosOrders;