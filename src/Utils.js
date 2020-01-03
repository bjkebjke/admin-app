const BASE_URL = 'http://localhost:8082/';

const request = (options) => {

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if(!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

export function getCustomers() {
    return request({
        url: BASE_URL + 'customers',
        method: 'GET'
    })
}

export function getProducts() {
    return request({
        url: BASE_URL + 'products',
        method: 'GET'
    })
}

export function getOrders() {
    return request({
        url: BASE_URL + 'orders',
        method: 'GET'
    })
}

export function newCustomer(customerData) {
    return request({
        url: BASE_URL + 'customers',
        method: 'POST',
        body: JSON.stringify(customerData),
        headers: {'content-type' : 'application/json'}
    })
}

export function editCustomer(customerData) {
    return request({
        url: BASE_URL + 'customers',
        method: 'PUT',
        body: JSON.stringify(customerData),
        headers: {'content-type' : 'application/json'}
    })
}

export function getCustomer(customerNumber) {
    return request({
        url: BASE_URL + 'customers'+ "/"+customerNumber,
        method: 'GET'
    })
}