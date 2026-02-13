import React from "react";
import loadingStyles from "../styles/loading.module.css";
const Loading = () => {
  return (
    <div className={loadingStyles.loading}>
      <span className={loadingStyles.loader}></span>
    </div>
  );
};

export default Loading;
