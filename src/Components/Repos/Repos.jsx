import { React } from "react";
import { List } from "antd";
import "./Repos.css";
import { connect } from "react-redux";
import { ACTIONS } from "../../store/actions/creators";

const Repos = ({ repos }) => {
  return (
    <div className="Repos_container">
      <h1>Repositories ({`${repos.length}`})</h1>
      <List
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        itemLayout="vertical"
        size="large"
        pagination={{
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
          pageSize: 4,
        }}
        dataSource={repos}
        renderItem={(item) => (
          <List.Item
            style={{
              background: "white",
              marginBottom: "24px",
              width: "877px",
              height: "112px",
            }}
            key={item.name}
          >
            <List.Item.Meta
              title={
                <a
                  className="link"
                  style={{ color: "#0064EB" }}
                  href={item.html_url}
                >
                  {item.name}
                </a>
              }
            />
            <span className="descr">{item.description}</span>
          </List.Item>
        )}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  repos: state.pages.repos,
});

export default connect(mapStateToProps, {
  setRepos: ACTIONS.setRepos,
})(Repos);
