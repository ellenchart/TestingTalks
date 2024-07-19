"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJsonFromFile = exports.envNumber = exports.env = void 0;
const getJsonFromFile = path => {
  return require("".concat(process.cwd()).concat(path));
};
exports.getJsonFromFile = getJsonFromFile;
const env = key => {
  const value = process.env[key];
  if (!value) {
    throw Error("No environment variable found for ".concat(key));
  }
  return value;
};
exports.env = env;
const envNumber = key => {
  return Number(env(key));
};
exports.envNumber = envNumber;