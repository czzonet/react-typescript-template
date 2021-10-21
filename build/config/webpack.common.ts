import { Configuration } from "webpack";
import { projectName, projectRoot, resolvePath } from "../env";
import webpackBar from "webpackbar";
import webpackBuildNotifier from "webpack-build-notifier";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import { tslOption } from "./tslOption";

export const commonConfig: Configuration = {
  context: projectRoot,
  entry: resolvePath(projectRoot, "./src/index.tsx"),
  output: {
    publicPath: "/",
    path: resolvePath(projectRoot, "./dist"),
    filename: "js/[name]-[fullhash].bundle.js",
    hashSalt: projectName,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      // {
      //   test: /\.(tsx?|js)$/,
      //   loader: "babel-loader",
      //   options: {},
      //   exclude: /node_modules/,
      // },
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: tslOption,
        },
        exclude: /node_modules/,
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     "style-loader",
      //     {
      //       loader: "css-loader",
      //       options: {
      //         modules: {
      //           localIdentName: "[local]--[hash:base64:5]",
      //           exportLocalsConvention: "camelCase",
      //         },
      //         sourceMap: true,
      //         importLoaders: 1,
      //       },
      //     },
      //     {
      //       loader: "sass-loader",
      //       options: {
      //         sourceMap: true,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new webpackBar({
      name: "react-template",
      color: "#61dafb",
    }),
    new webpackBuildNotifier(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolvePath(projectRoot, "./public/index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "*",
          to: resolvePath(projectRoot, "./dist"),
          context: resolvePath(projectRoot, "./public"),
          filter: (resourcePath) =>
            resourcePath != resolvePath(projectRoot, "./public/index.html"),
        },
      ],
    }),
  ],
};
