import { React } from "react";

import logo from "../../assets/Vector.svg";
import { connect } from "react-redux";

import "./Header.css";
import { ACTIONS } from "../../store/actions/creators";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Header = ({ user, setUser, setMessage}) => {
  const GetPerson = async (name) => {
    const res = await fetch(`https://api.github.com/users/${name}`);
    console.log(res.status);
    const data = await res.json();
    if (res.status === 404) {
      setMessage(true)
    }else {
    setMessage(false)  
    setUser(data)};
  };
  console.log(user);

  return (
    <div className="header">
      <img src={logo} className="header_logo"></img>
      <Input
        className="input_box"
        placeholder="Enter the name"
        onPressEnter={(e) => {
          GetPerson(e.target.value);
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
  );
};

const mapStateToProps = (state) => ({
  user: state.pages.user,
  message: state.pages.message
});

export default connect(mapStateToProps, {
  setUser: ACTIONS.setUser,
  setMessage: ACTIONS.setMessage
})(Header);