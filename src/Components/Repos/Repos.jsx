import { React } from "react";
import { connect } from "react-redux";

import "./Repos.css";
import { List, Tooltip } from "antd";
import { ACTIONS } from "../../store/actions/creators";
import NoRepoPage from "../NoRepoPage/NoRepoPage";

const Repos = ({ repos }) => {
  return repos.length ? (
    <div className="repos-container">
      <h1>Repositories ({`${repos.length}`})</h1>
      <List
        className="item"
        size="large"
        itemLayout="vertical"
        size="large"
        pagination={{
          responsive: true,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
          pageSize: 4,
        }}
        dataSource={repos}
        renderItem={(item) => (
          <List.Item className="list_item" key={item.name}>
            <List.Item.Meta
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              title={
                <a
                  className="repos-container__link"
                  style={{ color: "#0064EB" }}
                  href={item.html_url}
                  target="_blank"
                >
                  {item.name}
                </a>
              }
            />
            <Tooltip
              title="prompt text"
              title={item.description}
              trigger="click"
            >
              <span className="repos-container__description">
                {item.description}
              </span>
            </Tooltip>
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
