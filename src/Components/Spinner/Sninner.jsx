import { React } from "react";
import { Spin } from "antd";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="loading">
      <Spin size="large" />
    </div>
  );
};
export default Spinner;
