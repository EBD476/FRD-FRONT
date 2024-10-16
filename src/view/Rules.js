import React,{useState} from 'react';
import { SmileOutlined,LoadingOutlined, CloseOutlined,MinusCircleOutlined,DownOutlined,EllipsisOutlined,PlusOutlined,ReloadOutlined,MoreOutlined } from '@ant-design/icons';
import { Button, Result , notification,Space ,Spin, Dropdown ,Form, Input, Card, Typography, Segmented, Table ,Tag, Row,Col,Switch,Drawer} from 'antd';
import { AddRuleModal } from "./AddRuleModal";

const { Search } = Input;
 
const key = 'updatable';

const items = [
    {
      label: 'Submit and continue',
      key: '1',
    },
    {
        label: 'Delete',
        key: '2',
    },
    {
        label: 'Edit',
        key: '3',
    },
    {
        label: 'Send to cse',
        key: '4',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: {
        compare: (a, b) => a.name - b.name,
        multiple: 3,
      },
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: {
        compare: (a, b) => a.age - b.age,
        multiple: 3,
      },
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      sorter: {
        compare: (a, b) => a.address - b.address,
        multiple: 3,
      },
     
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? '#2db7f5' : '#87d068';
            if (tag === 'loser') {
              color = '#f50';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
          <Dropdown
           trigger={['click']}
           menu={{
            items,
           }}
        >
          <a>             
            {/* <DownOutlined style={{ fontSize: '10px'}} /> */}
            <MoreOutlined style={{ fontSize: '18px'}}  />
            {/* <EllipsisOutlined  style={{ fontSize: '14px',padding:5}}/> */}
          </a>
        </Dropdown>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

const App: React.FC = () => {
    const [api, contextHolder]= notification.useNotification();
    const [form] = Form.useForm();
    const [modalOpen, setModalOpen] = useState(false);
    const openRuleModal = () => setModalOpen(true);
    const closeRuleModal = () => setModalOpen(false);
    const toggleRuleModal = () => setModalOpen(state => !state);
    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = useState(false);

    // const syncRules = () => fetch("/api/syncRules").then();
    // const clearState = () => fetch("/api/clearState").then();
    // const pushToFlink = () => fetch("/api/rules/pushToFlink").then();

    const showDrawer = () => {
        setOpen(true);
      };
    
      const onClose = () => {
        setOpen(false);
      };

    const openNotification = (pauseOnHover) => () => {
        api.open({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          showProgress: true,
          pauseOnHover,
        });
    
    };

    return (
        <>
        <div  style={{ marginTop:100, marginLeft:100, marginRight:100,minHeight: 400, }}>
           <h1>Rules &nbsp;&nbsp;&nbsp;<Spin indicator={<LoadingOutlined spin style={{color:'#f8994c'}} />} /></h1>                        
          {contextHolder}
          <br/> 

          <Row>
            <Col span={6}>
                <Segmented
                    options={[
                        'Daily',
                        {
                        label: 'Weekly',
                        value: 'Weekly',
                        disabled: true,
                        },
                        'Monthly',
                        {
                        label: 'Quarterly',
                        value: 'Quarterly',
                        disabled: true,
                        },
                        'Yearly',
                    ]}
                />
            </Col>
            <Col span={4} offset={12}>
                <Space>
                <Button type="primary" onClick={openRuleModal} block icon={<PlusOutlined />}>
                    Add Rule
                </Button>
                <Button type="" onClick={openNotification(false)}  icon={<ReloadOutlined />}>
                    Reload
                </Button>
                <Button type="" onClick={setLoading}  icon={<ReloadOutlined />}>                    
                </Button>
                <Dropdown.Button
                    type=""
                    // loading={loadings[0]}
                    menu={{
                    items,
                    }}
                    trigger={['click']}                    
                    onClick={showDrawer}
                    >
                    Actions
                </Dropdown.Button>
                </Space>
            </Col>
            </Row>               
 
            <br/><br/> 
            <Search placeholder="input search text"  allowClear  style={{ width: 400, }} />
            <br/><br/>  
            <Spin spinning={loading} indicator={<LoadingOutlined spin />} size="large" delat="1000"> 
                 <Table columns={columns} dataSource={data} onChange={onChange} bordered size="small"/> 
            </Spin>
            <AddRuleModal isOpen={modalOpen} toggle={toggleRuleModal} onClosed={closeRuleModal}  />            
            <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
         </div>
        </>
      );
};

export default App;