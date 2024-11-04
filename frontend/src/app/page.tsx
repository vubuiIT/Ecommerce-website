import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'column',
      gap:'2vh'
    }}>
      <div
        className="image"
        style={{
          height: '30vh',
          width: '90vw',
          border: '1px solid red',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        image
      </div>
      <div
        className="products"
        style={{
          display:'flex',
          flexDirection:'row',
          gap:'2vw',
          flexWrap:'wrap',
          width:'90vw',
          justifyContent:'space-between'
        }}
      >
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          hoverable={true}
        >
          <Meta
            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
            title="Card title"
            description="This is the description"
          />
        </Card>

        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          hoverable={true}
        >
          <Meta
            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
            title="Card title"
            description="This is the description"
          />
        </Card>

        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          hoverable={true}
        >
          <Meta
            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
            title="Card title"
            description="This is the description"
          />
        </Card>

        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          hoverable={true}
        >
          <Meta
            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </div>
    </div>
  );
}

