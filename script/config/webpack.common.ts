import { Configuration } from "webpack";
import { projectName, projectRoot, resolvePath } from "../env";

const commonConfig: Configuration = {
  context: projectRoot,
  entry: resolvePath(projectRoot, "./src/index.tsx"),
  output: {
    publicPath: "/",
    path: resolvePath(projectRoot, "./dist"),
    filename: "js/[name]-[hash].bundle.js",
    hashSalt: projectName || "react template",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: "babel-loader",
        options: {},
        exclude: /node_modules/,
      },
    ],
  },
};
