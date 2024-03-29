import http from "http";
import express, { Express } from "express";
import getPort from "get-port";
import chalk from "chalk";
import logSymbols from "log-symbols";

import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import historyFallback from "connect-history-api-fallback";
import cors from "cors";
import { merge } from "webpack-merge";
import { devConf } from "./config/config";
import { commonConfig } from "./config/webpack.common";
import open from "open";

const devConfig = merge(commonConfig, devConf);

const HOST = "127.0.0.1";
const PORTS = [8080, 3000];

const setupCompilerMiddleware = (compiler: any, app: Express) => {
  app.use(cors());
  app.use(historyFallback({}));
  app.use(webpackDevMiddleware(compiler, {}));
  app.use(webpackHotMiddleware(compiler, {}));
};

/** 热重载服务器 */
export const start = async () => {
  const port = await getPort({ port: PORTS });
  const address = `http://${HOST}:${port}`;

  const app = express();
  const compiler = webpack(devConfig);
  setupCompilerMiddleware(compiler, app);

  const httpServer = http.createServer(app).listen(port, HOST, () => {
    const tip = `DevServer is running at ${chalk.magenta.underline(address)} ${
      logSymbols.success
    }`;

    console.log(tip);

    open(address);
  });

  process.on("SIGINT", () => {
    httpServer.close();

    // const tip = chalk.greenBright.bold("\nGoodbye.");
    // console.log(tip);
  });
};

// if (require.main == module) {
//   start();
// }
