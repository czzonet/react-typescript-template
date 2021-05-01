import React from "react";
import styles from "./index.scss";

/** 含有默认的红和粉两种配色的antd按钮样式的组合的组件 用于专门覆盖antd按钮样式 */
export const Template = (props) => {
  const { children } = props;

  return <div className={styles.template}>{children}</div>;
};
