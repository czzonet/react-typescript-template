import { commonConfig } from "./webpack.common";
import { merge } from "webpack-merge";

export const devConfig = merge(commonConfig, {
  mode: "development",
  devtool: "eval-source-map",
});
