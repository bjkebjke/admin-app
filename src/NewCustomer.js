import React, { Component } from 'react';

import {Layout} from 'antd';

import {newCustomer} from './Utils.js';

class NewCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerName: null,
            contactLastName: null,
            contactFirstName: null,
            phone: null,
            addressLine1: null,
            addressLine2: null,
            city: null,
            state: null,
            postalCode: null,
            country: null,
            salesRepEmployeeNumber: null,
            creditLimit: null
        }
        this.handleChanges = this.handleChanges.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const customerData = {
            customerName: this.state.customerName,
            contactLastName: this.state.contactLastName,
            contactFirstName: this.state.contactFirstName,
            phone: this.state.phone,
            addressLine1: this.state.addressLine1,
            addressLine2: this.state.addressLine2,
            city: this.state.city,
            state: this.state.state,
            postalCode: this.state.postalCode,
            country: this.state.country,
            salesRepEmployeeNumber: this.state.salesRepEmployeeNumber,
            creditLimit: this.state.creditLimit
        };

        console.log(customerData);

        const result = newCustomer(customerData);
        if(result == 'Error') {
            console.log('error');
        } else {
            console.log('success');
        }

    }

    handleChanges = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    render() {
        return (
            <Layout style={{ padding: '0 50px', marginTop: 64}}>
                <form onSubmit={this.handleSubmit}>
                    <p>Enter customer name:</p>
                    <input
                        type='text'
                        name='customerName'
                        onChange={this.handleChanges}
                    />
                    <p>Enter contact last name:</p>
                    <input
                        type='text'
                        name='contactLastName'
                        onChange={this.handleChanges}
                    />
                    <p>Enter contact first name:</p>
                    <input
                        type='text'
                        name='contactFirstName'
                        onChange={this.handleChanges}
                    />
                    <p>Enter phone number:</p>
                    <input
                        type='text'
                        name='phone'
                        onChange={this.handleChanges}
                    />
                    <p>Enter address Line 1:</p>
                    <input
                        type='text'
                        name='addressLine1'
                        onChange={this.handleChanges}
                    />
                    <p>Enter address Line 2:</p>
                    <input
                        type='text'
                        name='addressLine2'
                        onChange={this.handleChanges}
                    />
                    <p>Enter city:</p>
                    <input
                        type='text'
                        name='city'
                        onChange={this.handleChanges}
                    />
                    <p>Enter state:</p>
                    <input
                        type='text'
                        name='state'
                        onChange={this.handleChanges}
                    />
                    <p>Enter postal code:</p>
                    <input
                        type='text'
                        name='postalCode'
                        onChange={this.handleChanges}
                    />
                    <p>Enter country:</p>
                    <input
                        type='text'
                        name='country'
                        onChange={this.handleChanges}
                    />
                    <p>Enter sales representative employee number:</p>
                    <input
                        type='number'
                        name='salesRepEmployeeNumber'
                        onChange={this.handleChanges}
                    />
                    <p>Enter credit limit:</p>
                    <input
                        type='number'
                        name='creditLimit'
                        onChange={this.handleChanges}
                    />
                    <input
                        type='submit'
                    />
                </form>
            </Layout>
        )
        
    }
}

export default NewCustomer;

/*
customerName VARCHAR(50)
contactLastName VARCHAR(50)
contactFirstName VARCHAR(50)
phone VARCHAR(50)
addressLine1 VARCHAR(50)
addressLine2 VARCHAR(50)
city VARCHAR(50)
state VARCHAR(50)
postalCode VARCHAR(15)
country VARCHAR(50)
salesRepEmployeeNumber INT(11)
creditLimit DOUBLE
*/