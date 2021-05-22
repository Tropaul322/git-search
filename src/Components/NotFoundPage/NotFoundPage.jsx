import { React } from "react";
import { Empty } from "antd";
import NotFoundImg from "../../assets/Union.png";

const NotFoundPage = () => {
  return (
    <div className="page-container">
      <Empty
        image={NotFoundImg}
        imageStyle={{ width: "65px", height: "75px" }}
        description=""
      />
      <div className="page-container__text">
        <p>User not found</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
