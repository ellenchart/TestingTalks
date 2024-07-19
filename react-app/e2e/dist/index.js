"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoke = exports.regression = exports.dev = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _parseEnv = require("./env/parseEnv");
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_dotenv.default.config({
  path: (0, _parseEnv.env)('COMMON_CONFIG_FILE')
});
const hostsConfig = (0, _parseEnv.getJsonFromFile)((0, _parseEnv.env)('HOSTS_URLS_PATH'));
const pagesConfig = (0, _parseEnv.getJsonFromFile)((0, _parseEnv.env)('PAGE_URLS_PATH'));
const mappingFiles = _fs.default.readdirSync("".concat(process.cwd()).concat((0, _parseEnv.env)('PAGE_ELEMENTS_PATH')));
const pageElementMappings = mappingFiles.reduce((pageElementConfigAcc, file) => {
  const key = file.replace('.json', '');
  const elementMappings = (0, _parseEnv.getJsonFromFile)("".concat((0, _parseEnv.env)('PAGE_ELEMENTS_PATH')).concat(file));
  return {
    ...pageElementConfigAcc,
    [key]: elementMappings
  };
}, {});
const worldParameters = {
  hostsConfig,
  pagesConfig,
  pageElementMappings
};
const common = "./src/features/**/*.feature                 --require-module ts-node/register                 --require ./src/step-definitions/**/**/*.ts                 -f json:./reports/report.json                 --world-parameters ".concat(JSON.stringify(worldParameters), "                 --format progress-bar                 --parallel ").concat((0, _parseEnv.env)('PARALLEL'), "                 --retry ").concat((0, _parseEnv.env)('RETRY'));
const dev = exports.dev = "".concat(common, " --tags '@dev'");
const smoke = exports.smoke = "".concat(common, " --tags '@smoke'");
const regression = exports.regression = "".concat(common, " --tags '@regression'");