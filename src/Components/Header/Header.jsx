import { React } from "react";
import { connect } from "react-redux";

import "./Header.css";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import logo from "../../assets/Vector.svg";

import { ACTIONS } from "../../store/actions/creators";

const Header = ({ setUser, setMessage, setRepos, setLoading }) => {
  const getPerson = async (name) => {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${name}`);
    console.log(res.status);
    const data = await res.json();
    if (res.status === 404) {
      console.log("true");
      setMessage(true);
      setUser({});
      setLoading(false);
    } else {
      const repos = await fetch(`https://api.github.com/users/${name}/repos`);
      const repoData = await repos.json();
      setMessage(false);
      setRepos(repoData);
      setUser(data);
      setLoading(false);
    }
  };

  return (
    <div className="header">
      <div className="header__container">
        <img
          src={logo}
          className="header__container__logo"
          alt="header_logo"
        ></img>
        <Input
          className="header__container__input"
          placeholder="Enter GitHub username"
          onPressEnter={(e) => {
            getPerson(e.target.value);
          }}
          style={{
            width: "500px",
            height: "40px",
            border: "none",
            borderRadius: "6px",
          }}
          prefix={<SearchOutlined />}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.pages.user,
  message: state.pages.message,
  repos: state.pages.repos,
});

export default connect(mapStateToProps, {
  setUser: ACTIONS.setUser,
  setMessage: ACTIONS.setMessage,
  setRepos: ACTIONS.setRepos,
  setLoading: ACTIONS.setLoading,
})(Header);
