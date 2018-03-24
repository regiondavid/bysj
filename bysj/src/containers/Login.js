import React, { Component } from 'react';
import { Form, Button, Icon, Input } from 'antd';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const FormItem = Form.Item;

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios.post('/users/login', values)
          .then((res) => {
            if(res.data.errcode === 0) {
              console.log('ok');
              this.props.history.push('/');
            } else console.log(res.data.errmsg);
          });
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <h2>粮情信息采集系统后台管理</h2>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名' }],
            })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
            })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form>
      </div>
    )
  }
}

const Login = Form.create()(LoginForm);

export default withRouter(Login);
