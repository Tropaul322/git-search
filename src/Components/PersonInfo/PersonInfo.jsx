import { React } from "react";
import "./PersonInfo.css";
import Repos from "../Repos/Repos";

import { connect } from "react-redux";
import { ACTIONS } from "../../store/actions/creators";

const PersonInfo = ({ message, user, setMessage }) => {
  return user.login ? (
    <div className="person_field">
      <div className="person_info">
        <div>
          <img
            className="person_img"
            width="280px"
            height="280px"
            src={user.avatar_url}
          ></img>
        </div>
        <div className="person_info2">
          <div>
            <p className="main_text">{user.name}</p>
            <a className="name_link" href={user.html_url}>
              {user.login}
            </a>
          </div>
          <div className="person_follows">
            <span>{user.followers} followers</span>
            <span>{user.following} following</span>
          </div>
        </div>
      </div>
      <Repos />
    </div>
  ) : message === true ? (
    <p>NOt</p>
  ) : (
    <p>Select user</p>
  );
};

const mapStateToProps = (state) => ({
  user: state.pages.user,
  message: state.pages.message,
});

export default connect(mapStateToProps, {
  setUser: ACTIONS.setUser,
  setMessage: ACTIONS.setMessage,
})(PersonInfo);
