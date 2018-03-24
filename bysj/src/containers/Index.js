import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Route, Link } from 'react-router-dom';
import Routes from '../routers.js';
const { Header, Content, Footer, Sider } = Layout;

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
            <Link to="/home">
                <Icon type="home" />
                <span className="nav-text">主页</span>
            </Link>
              </Menu.Item>
              <Menu.Item key="2">
            <Link to="/temperature">
                <Icon type="video-camera" />
                <span className="nav-text">温度</span>
            </Link>
              </Menu.Item>
              <Menu.Item key="3">
            <Link to="/humidity">
                <Icon type="upload" />
                <span className="nav-text">湿度</span>
            </Link>
              </Menu.Item>
              <Menu.Item key="4">
            <Link to="/gas">
                <Icon type="bar-chart" />
                <span className="nav-text">气体</span>
            </Link>
              </Menu.Item>
            <Menu.Item key="5">
              <Icon type="cloud-o" />
              <span className="nav-text">虫情</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 0}}>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              {Routes.map((route, index) => {
                  return (
                  <Route
                    key={index}
                    path={route.path}
                    component={route.component}
                  />
                )}
              )}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©2018 Created by Region David
          </Footer>
        </Layout>
      </Layout>
    )
  }
}
