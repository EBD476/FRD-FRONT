import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined,ClockCircleOutlined,FieldBinaryOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic , Timeline} from 'antd';

const { Meta } = Card;
const App: React.FC = () => (

    <div style={{ margin:100,marginBottom:0}}>
    <h1>Overview</h1>           
    <br/><br/>
        <Row gutter={10}>
            <Col span={12}>
            <Card bordered={false} style={{background: 'linear-gradient(to right, #8bc34a, #c5e1a5)'}}>
                <Statistic
                title="Total Count"
                value={12545}
                precision={0}
                valueStyle={{ color: '#3f8600' }}
                // prefix={<FieldBinaryOutlined />}
                suffix=""
                />
            </Card>
            </Col>
            <Col span={12}>
            <Card bordered={false}  style={{background:'linear-gradient(to right, #ff9800, #ffc107)'}}>
                <Statistic
                title="Total Warnings"
                value={1546}
                precision={0}
                valueStyle={{ color: '#fff' }}
                // prefix={<FieldBinaryOutlined />}
                suffix=""
                />
            </Card>
            </Col>
        </Row>
        <Row gutter={10} style={{marginTop:50}}>
            <Col span={12}>
                <Card bordered={false}>
                <Timeline
                    items={[
                    {
                        children: 'Create a services site 2015-09-01',
                    },
                    {
                        children: 'Solve initial network problems 2015-09-01',
                    },
                    {
                        dot: <ClockCircleOutlined className="timeline-clock-icon" />,
                        color: 'red',
                        children: 'Technical testing 2015-09-01',
                    },
                    {
                        children: 'Network problems being solved 2015-09-01',
                    },
                    {
                        children: 'Network problems being solved 2015-09-01',
                    },
                    {
                        children: 'Network problems being solved 2015-09-01',
                    },
                    {
                        children: 'Network problems being solved 2015-09-01',
                    },
                    {
                        children: 'Network problems being solved 2015-09-01',
                    },
                    ]}
                />
                </Card>
            </Col>
            <Col span={12}>
            <Card
            //    style={{background:'linear-gradient(to left bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12)'}}
                // cover={
                //     <p>
                //         this is test of card description
                //     </p>
                // // <img
                // //     alt="example"
                // //     src={require(`../assets/images/bg1.jpg`)}
                // // />
                // }
                actions={[
                // <SettingOutlined key="setting" />,
                // <EditOutlined key="edit" />,
                // <EllipsisOutlined key="ellipsis" />,
                ]}
            >
            <Meta            
                title="Chart data"
                description="This is the description"
                />
            </Card>
            </Col>
        </Row>
        <br/>
        <Row gutter={10} style={{marginTop:50}}>

        </Row>
    </div>
);

export default App;