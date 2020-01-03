import React, { Component } from 'react';
import {
  Link,
  Route,
  withRouter,
  Switch
} from 'react-router-dom';
import './App.css';

import AdminDisplay from './AdminDisplay.js'

import { Layout, Menu, Table, Icon } from 'antd';
import NewCustomer from './NewCustomer';

const { Header, Content, Sider, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
      datum: null,
      category: null
    }

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick({key}) {
    this.setState({
      category: key
    })
  }

  render() {
    return (
      <Layout >
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu
            mode="horizontal"
            style={{ lineHeight: '64px' }}
            onClick={this.handleMenuClick}
          >
            <Menu.Item key="customers">
              <Link to="/customers">
                Customers
              </Link>
            </Menu.Item>
            <Menu.Item key="products">
              <Link to="/products">
                Products
              </Link>
            </Menu.Item>
            <Menu.Item key="orders">
              <Link to="/orders">
                Orders
              </Link>
            </Menu.Item>
            <Menu.Item key="new">
              <Link to="/new">
                <Icon type="plus" />
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <div>
            <Switch>
              <Route path="/customers" 
              render={(props) => <AdminDisplay key={Date.now()} category={this.state.category}/>}>
              </Route>
              <Route path="/products" render={(props) => <AdminDisplay key={Date.now()} category={this.state.category}/>}>

              </Route>
              <Route path="/orders" render={(props) => <AdminDisplay key={Date.now()} category={this.state.category}/>}>

              </Route>
              <Route path="/new" component={NewCustomer}>

              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
}

export default withRouter(App);
