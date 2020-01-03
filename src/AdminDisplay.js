import React, { Component } from 'react';

import { Layout, Input, Table } from 'antd';
import DescriptionDisplay from './DescriptionDisplay.js';
import {getCustomers, getProducts, getOrders} from './Utils.js';

const { Header, Content, Sider, Footer } = Layout;
const {Search} = Input;

class AdminDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: [],
            datum: null,
            category: null
          }

        this.loadData = this.loadData.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    loadData(key) {
        this.setState({
          isLoading: true
        });
        if(key == "customers") {
          getCustomers()
            .then(response => {
                this.setState({
                  data: response,
                  isLoading: false
                });
            }).catch(error => {
            this.setState({
              isLoading: false
            });
          });
        } else if(key == "products") {
          getProducts()
          .then(response => {
              this.setState({
                data: response,
                isLoading: false
              });
          }).catch(error => {
          this.setState({
            isLoading: false
          });
        });
        } else if(key == "orders") {
          getOrders()
            .then(response => {
                this.setState({
                  data: response,
                  isLoading: false
                });
            }).catch(error => {
            this.setState({
              isLoading: false
            });
          });
        }
    }

    onSearch(value) {
        if(this.props.category == "customers") {
            var queryResult = [];
            
            this.state.data.forEach(function(customer){
                //console.log("customerNumber = " + customer.customerNumber);
                if(customer.customerName.toLowerCase().includes(value.toLowerCase())){
                   queryResult.push(customer);
                }
            });
            
            this.setState({
                data: queryResult
            })
        } else if(this.props.category == "products") {
            var queryResult = [];
            
            this.state.data.forEach(function(product){
                //console.log("customerNumber = " + customer.customerNumber);
                if(product.productName.toLowerCase().includes(value.toLowerCase())){
                   queryResult.push(product);
                }
            });
            
            this.setState({
                data: queryResult
            })
        } else if(this.props.category == "orders") {
            var queryResult = [];
            
            this.state.data.forEach(function(order){
                //console.log("customerNumber = " + customer.customerNumber);
                if(order.orderNumber.toString().includes(value)){
                   queryResult.push(order);
                }
            });
            
            this.setState({
                data: queryResult
            })
        }
    }

    componentDidMount() {
        this.setState({
            category:this.props.category
        });
        this.loadData(this.props.category);
    }
    /*
    componentWillReceiveProps(newProps) {
        this.setState({
            category:this.props.category
        });
        this.loadData(this.props.category);
    }
    */

    render() {
        var columns;
        if(this.props.category == "customers") {
            columns = [
            {
                title: 'Number',
                dataIndex: 'customerNumber',
                width: 100,
            },
            {
                title: 'Last Name',
                dataIndex: 'contactLastName',
                width: 100,
            },
            {
                title: 'First Name',
                dataIndex: 'contactFirstName',
                width: 100,
            },
            ];
        } else if(this.props.category == "products") {
            columns = [
            {
                title: 'Product Code',
                dataIndex: 'productCode',
                width: 125,
            },
            {
                title: 'Product Name',
                dataIndex: 'productName',
                width: 125,
            },
            ];
        } else if(this.props.category == "orders") {
            columns = [
            {
                title: 'Order Number',
                dataIndex: 'orderNumber',
                width: 125,
            },
            {
                title: 'Order Date',
                dataIndex: 'orderDate',
                width: 125,
            },
            ];
        }
    
        return (
            <Layout style={{ padding: '0 50px', marginTop: 90}}>
            <Sider width={300}>
                <Layout>
                    <Header>
                        <Search placeholder="input search text" onSearch={value => this.onSearch(value)} enterButton />
                    </Header>
                    <Content>
                        <Table 
                        columns={columns}
                        dataSource={this.state.data} 
                        pagination={{ pageSize: 50 }} 
                        scroll={{ y: 240 }}
                        onRow={(record, rowIndex) => {
                            return {
                            onClick: () => {
                                this.setState({
                                datum: this.state.data[rowIndex]
                                });
                            } // click row
                            
                            };
                        }} />,
                    </Content>
                </Layout>
                
            </Sider>
            <Content>
                <DescriptionDisplay data={this.state.datum} category={this.state.category} />
            </Content>
            </Layout>
        )
        
    }
}

export default AdminDisplay;