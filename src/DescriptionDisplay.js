import React, { Component } from 'react';

import { Layout, Row, Col, Descriptions, Button, Modal } from 'antd';

import {editCustomer} from './Utils.js';

const { Header, Content, Sider, Footer } = Layout;

class DescriptionDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible:false,
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

        this.setModalVisible = this.setModalVisible.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    setModalVisible(modalVisible) {
        this.setState({ modalVisible })
    }

    handleChanges = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const customerData = {
            customerNumber: this.props.data.customerNumber,
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

        const result = editCustomer(customerData);
        if(result == 'Error') {
            console.log('error');
        } else {
            console.log('success');
        }
    }

    render() {
        if(this.props.data == null) {
            return null;
        } else if (this.props.category == 'customers') {
            return (
                <div>
                    <Button type="primary" onClick={() => this.setModalVisible(true)}>
                        Edit
                    </Button>
                    <Modal
                        title="Edit Customer Info"
                        centered
                        visible={this.state.modalVisible}
                        onOk={() => this.setModalVisible(false)}
                        onCancel={() => this.setModalVisible(false)}
                        >
                        <form onSubmit={this.handleSubmit}>
                            <p>Enter customer name:</p>
                            <input
                                type='text'
                                name='customerName'
                                placeholder={this.props.data.customerName}
                                onChange={this.handleChanges}
                            />
                            <p>Enter contact last name:</p>
                            <input
                                type='text'
                                name='contactLastName'
                                placeholder={this.props.data.contactLastName}
                                onChange={this.handleChanges}
                            />
                            <p>Enter contact first name:</p>
                            <input
                                type='text'
                                name='contactFirstName'
                                placeholder={this.props.data.contactFirstName}
                                onChange={this.handleChanges}
                            />
                            <p>Enter phone number:</p>
                            <input
                                type='text'
                                name='phone'
                                placeholder={this.props.data.phone}
                                onChange={this.handleChanges}
                            />
                            <p>Enter address Line 1:</p>
                            <input
                                type='text'
                                name='addressLine1'
                                placeholder={this.props.data.addressLine1}
                                onChange={this.handleChanges}
                            />
                            <p>Enter address Line 2:</p>
                            <input
                                type='text'
                                name='addressLine2'
                                placeholder={this.props.data.addressLine2}
                                onChange={this.handleChanges}
                            />
                            <p>Enter city:</p>
                            <input
                                type='text'
                                name='city'
                                placeholder={this.props.data.city}
                                onChange={this.handleChanges}
                            />
                            <p>Enter state:</p>
                            <input
                                type='text'
                                name='state'
                                placeholder={this.props.data.state}
                                onChange={this.handleChanges}
                            />
                            <p>Enter postal code:</p>
                            <input
                                type='text'
                                name='postalCode'
                                placeholder={this.props.data.postalCode}
                                onChange={this.handleChanges}
                            />
                            <p>Enter country:</p>
                            <input
                                type='text'
                                name='country'
                                placeholder={this.props.data.country}
                                onChange={this.handleChanges}
                            />
                            <p>Enter sales representative employee number:</p>
                            <input
                                type='number'
                                name='salesRepEmployeeNumber'
                                placeholder={this.props.data.salesRepEmployeeNumber}
                                onChange={this.handleChanges}
                            />
                            <p>Enter credit limit:</p>
                            <input
                                type='number'
                                name='creditLimit'
                                placeholder={this.props.data.creditLimit}
                                onChange={this.handleChanges}
                            />
                            <input
                                type='submit'
                            />
                        </form>
                    </Modal>
                
                <Descriptions title="Customer Info" bordered>
                    <Descriptions.Item label="Customer Number">{this.props.data.customerNumber}</Descriptions.Item>
                    <Descriptions.Item label="Customer Name">{this.props.data.customerName}</Descriptions.Item>
                    <Descriptions.Item label="Contact Last Name">{this.props.data.contactLastName}</Descriptions.Item>
                    <Descriptions.Item label="Contact First Name">{this.props.data.contactFirstName}</Descriptions.Item>
                    <Descriptions.Item label="Phone Number" span={3}>{this.props.data.phone}</Descriptions.Item>
                    <Descriptions.Item label="Address Line 1" span={3}>
                        {this.props.data.addressLine1}
                    </Descriptions.Item>
                    <Descriptions.Item label="Address Line 2" span={3}>
                        {this.props.data.addressLine2}
                    </Descriptions.Item>
                    <Descriptions.Item label="City">{this.props.data.city}</Descriptions.Item>
                    <Descriptions.Item label="State">{this.props.data.state}</Descriptions.Item>
                    <Descriptions.Item label="Postal Code">{this.props.data.postalCode}</Descriptions.Item>
                    <Descriptions.Item label="Country">{this.props.data.country}</Descriptions.Item>
                    <Descriptions.Item label="Sales Rep Employee Number">{this.props.data.salesRepEmployeeNumber}</Descriptions.Item>
                    <Descriptions.Item label="Credit Limit">{this.props.data.creditLimit}</Descriptions.Item>
                </Descriptions>
                </div>
            )
        } else if (this.props.category == 'products') {
            return (
                <Descriptions title="Product Info" bordered>
                <Descriptions.Item label="Product Code">{this.props.data.productCodde}</Descriptions.Item>
                <Descriptions.Item label="Product Name">{this.props.data.productName}</Descriptions.Item>
                <Descriptions.Item label="Product Line">{this.props.data.productLine}</Descriptions.Item>
                <Descriptions.Item label="Product Scale">{this.props.data.productScale}</Descriptions.Item>
                <Descriptions.Item label="Product Vendor">{this.props.data.productVendor}</Descriptions.Item>
                <Descriptions.Item label="Description">{this.props.data.productDescription}</Descriptions.Item>
                <Descriptions.Item label="Quantity in Stock">{this.props.data.quantityInStock}</Descriptions.Item>
                <Descriptions.Item label="Buy Price">{this.props.data.buyPrice}</Descriptions.Item>
                <Descriptions.Item label="MSRP">{this.props.data.MSRP}</Descriptions.Item>
              </Descriptions>
            )
        } else if (this.props.category == 'orders') {
            return (
                <Descriptions title="Order Info" bordered>
                <Descriptions.Item label="Order Number">{this.props.data.orderNumber}</Descriptions.Item>
                <Descriptions.Item label="Order Date">{this.props.data.orderDate}</Descriptions.Item>
                <Descriptions.Item label="Required Date">{this.props.data.requiredDate}</Descriptions.Item>
                <Descriptions.Item label="Shipped Date">{this.props.data.shippedDate}</Descriptions.Item>
                <Descriptions.Item label="Status">{this.props.data.status}</Descriptions.Item>
                <Descriptions.Item label="Comments" span={3}>
                    {this.props.data.comments}
                </Descriptions.Item>
                <Descriptions.Item label="Customer Number">{this.props.data.customerNumber}</Descriptions.Item>
              </Descriptions>
            )
        }
    }
}

export default DescriptionDisplay;

