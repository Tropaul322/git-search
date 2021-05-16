import { React } from "react";
import { List } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import "./Repos.css";

const Repos = () => {
  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      href: "https://ant.design",
      title: `ant design part ${i}`,
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      content:
        "We supply a series of design principles, practical patterns and high quality design resources",
    });
  }
  return (
    <div className="Repos_container">
      <h1>Repositories (10)</h1>
      <List
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 4,
        }}
        dataSource={listData}
        renderItem={(item) => (
          <List.Item
            style={{
              background: "white",
              marginBottom: "24px",
              width: "877px",
              height: "112px",
            }}
            key={item.title}
          >
            <List.Item.Meta
              title={
                <a
                  className="link"
                  style={{ color: "#0064EB" }}
                  href={item.href}
                >
                  {item.title}
                </a>
              }
              /* description={item.description} */
            />
            <span className="descr">{item.content}</span>
          </List.Item>
        )}
      />
    </div>
  );
};
export default Repos;
