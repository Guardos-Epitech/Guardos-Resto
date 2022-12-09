
import createExpoWebpackConfigAsync from '@expo/webpack-config/webpack';
import { Arguments, Environment } from '@expo/webpack-config/webpack/types';
const path = require("path");


module.exports = async function (env: Environment, argv: Arguments) {
    console.log(" ici")
  const config = await createExpoWebpackConfigAsync(env, argv);
  config.module = {
    ...config.module,
        rules: [
            ...config.module.rules,
          {
            test: /\.(ts|tsx)$/i,
            loader: "ts-loader",
            exclude: ["/node_modules/"],
          },
          {
            test: /\.(eot|svg|ttf|woff|woff2|png|jpg|jpeg|gif)$/i,
            type: "asset",
          }
        ]
    };
    config.resolve = {
        ...config.resolve,
        extensions: [".tsx", ".ts", ".js"],
        alias: {
          "@src": path.resolve(__dirname, "src/"),
        }
    };
    console.log("configfile alban")
  return config;
};
