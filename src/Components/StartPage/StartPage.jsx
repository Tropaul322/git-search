import { React } from "react";
import { Empty } from "antd";
import "./StartPage.css";
import StartPageImg from "../../assets/image.png";

const StartPage = () => {
  return (
    <div className="page-container">
      <Empty
        image={StartPageImg}
        imageStyle={{ width: "65px", height: "65px" }}
        description=""
      />
      <div className="page-container__text">
        <p>Start with searching a GitHub user</p>
      </div>
    </div>
  );
};

export default StartPage;
