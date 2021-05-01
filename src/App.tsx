import React from "react";
import styles from "./AppStyle.scss";

import { Button } from "antd";
import { Template } from "./template";

export default function App() {
  return (
    <div className={styles["app"]}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        reiciendis voluptate, perferendis maiores possimus voluptatem officia
        harum, voluptas accusamus nobis commodi aliquid doloremque eaque
        eligendi, dolores corporis ipsam quod non.
      </p>
      <Template></Template>
    </div>
  );
}
