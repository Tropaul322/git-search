import { React } from "react";
import "./PersonInfo.css";
import Repos from "../Repos/Repos";
import StartPage from '../StartPage/StartPage'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import Spinner from '../Spinner/Sninner'
import { connect } from "react-redux";
import { ACTIONS } from "../../store/actions/creators";

const PersonInfo = ({ message, user, isLoading }) => {
  return isLoading ? (<Spinner/>) : user.login ? (
    <div className="person_field">
      <div className="person_field-container">
        <div className="person_info">
          <div>
            <img
              className="person_img"
              width="280px"
              height="280px"
              src={user.avatar_url}
              alt="profile-photo"
            ></img>
          </div>
          <div className="person_info2">
            <div>
              <p className="main_text">{user.name}</p>
              <a className="name_link" target="_blank" href={user.html_url}>
                {user.login}
              </a>
            </div>
            <div className="person_follows">
              <div>
                <TeamOutlined style={{ fontSize: "16px" }} />
                <span>{user.followers} Followers</span>
              </div>
              <div>
                <UserOutlined style={{ fontSize: "16px" }} />
                <span>{user.following} Following</span>
              </div>
            </div>
          </div>
        </div>
        <Repos />
      </div>
    </div>
  ) : message === true ? (
    <NotFoundPage/>
  ) : (
    <StartPage/>
  );
};

const mapStateToProps = (state) => ({
  user: state.pages.user,
  message: state.pages.message,
  isLoading: state.pages.isLoading
});

export default connect(mapStateToProps, {
  setUser: ACTIONS.setUser,
})(PersonInfo);
