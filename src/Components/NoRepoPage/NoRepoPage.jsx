import { React } from "react";
import { Empty } from "antd";
import noRepoImg from "../../assets/Union1.png";

const NoRepoPage = () => {
  return (
    <div className="page-container">
      <Empty
        image={noRepoImg}
        imageStyle={{ width: "65px", height: "65px" }}
        description=""
      />
      <div className="page-container__text">
        <p>Repository list is empty</p>
      </div>
    </div>
  );
};

export default NoRepoPage;
