// scripts/build.ts
import webpack from "webpack";

import { devConfig } from "./config/webpack.dev";

const compiler = webpack(devConfig);

compiler.run((error, stats) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(
    stats!.toString({
      preset: "normal",
      modules: true,
      colors: true,
    })
  );
});
