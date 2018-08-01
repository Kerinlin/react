import React, { Component } from 'react';
// 对react ui的部分引用
import { Table, Pagination, Input, Row, Button, Modal, Form, message} from "antd";
import axios from 'axios'
import 'antd/dist/antd.css'
import './App.css';
const { Search } = Input;
const FormItem = Form.Item;
const { confirm } = Modal
class App extends Component {
  columns=[
    {
    dataIndex:'username',
    title:'用户'
    },
    {
      dataIndex: 'age',
      title: '年龄' 
    },
    {
      dataIndex: 'address',
      title: '地址'
    },
    {
      dataIndex: 'action',
      title: '操作',
      width:200,
      render:(text,row)=>{
        return(
          <div>
            <Button type="primary" onClick={()=>{this.modal('edit',row)}}>编辑</Button>
            <Button type="danger" style={{marginLeft:10}} onClick={()=>this.remove(row)}>删除</Button>
          </div>
        )
      }
    },
]
  state = {
    visible: false,
    users: [{
      username: '曾凯',
      age: 18,
      address: '杭州',
      id: 1
    }]
  }
  modal(type,row) {
    this.setState({
      visible: true
    },()=>{
      this.props.form.resetFields();
      if(type==='add') return;
      this.props.form.setFieldsValue({
        username:row.username,
        age:row.age,
        address:row.address
      })
    })
  }
  remove(row){
    var that=this;
    confirm({
      title:'是否删除该用户？',
      okText:'是',
      cancelText:'否',
      onOk(){
        // console.log(data.id);
        const _users=that.state.users.filter(data=>{
          console.log(data);
          return data.id !== row.id
        });
        that.setState({
          users:_users
        })
      }
    })
  }
  searchUser(event){
    axios.get('http://localhost:3006/users')
      .then(data=>{
        console.log(data);
      })
  }
  handleOk() {
    // console.log('ok');
    // this.setState({
    //   visible: false
    // })
    this.props.form.validateFieldsAndScroll((err, values) => {
      // console.log(err)
      if (!err) {
        let data={
          username:values.username,
          age: values.age,
          address: values.address,
        };
        axios.post('http://127.0.0.1:3006/user',data)
          .then(msg=>{
            console.log(msg); 
            this.setState({
              visible: false
            });
            message.success('添加成功')         
          })
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }
    return (
      <div className="App">
        <Row>
          <Search style={{ width: 300 }} onChange={this.searchUser.bind(this)}></Search>
          <Button type="primary" style={{ marginLeft: 20 }} onClick={() => this.modal('add')}>添加用户</Button>
        </Row>
        <Row style={{ paddingTop: 20 }}>
          <Table dataSource={this.state.users} columns={this.columns} rowKey={row=>row.id} bordered pagination={false}>          
          </Table>
        </Row>
        <Modal title="添加用户" visible={this.state.visible} onOk={() => this.handleOk()} onCancel={() => this.setState({ visible: false })}>
          <Form>
            <FormItem label="用户" {...formItemLayout}>
              {
                getFieldDecorator('username', { rules: [{ required: true, message: "请输入名字" }] })
                  (<Input placeholder="username"></Input>)
              }
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {
                getFieldDecorator('age', {
                  rules: [
                    { required: true, message: '请输入年龄' }
                  ]
                }
                )(
                  <Input placeholder="age"></Input>
                )
              }
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {
                getFieldDecorator('address', {
                  rules: [
                    { required: true, message: '请输入地址' }
                  ]
                }
                )(
                  <Input placeholder="address"></Input>
                )
              }
            </FormItem>
          </Form>

        </Modal>


      </div>
    );
  }
}
export default Form.create()(App);
