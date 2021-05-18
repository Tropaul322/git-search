import { React } from "react";
import { connect } from "react-redux";

import "./Repos.css";
import { List } from "antd";
import { ACTIONS } from "../../store/actions/creators";
import NoRepoPage from "../NoRepoPage/NoRepoPage";

const Repos = ({ repos }) => {
  return repos.length ? (
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
                  target="_blank"
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
  ) : (
    <NoRepoPage />
  );
};

const mapStateToProps = (state) => ({
  repos: state.pages.repos,
});

export default connect(mapStateToProps, {
  setRepos: ACTIONS.setRepos,
})(Repos);
