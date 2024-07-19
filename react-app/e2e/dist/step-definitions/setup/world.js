"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScenarioWorld = void 0;
var _playwright = _interopRequireDefault(require("playwright"));
var _parseEnv = require("../../env/parseEnv");
var _cucumber = require("@cucumber/cucumber");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class ScenarioWorld extends _cucumber.World {
  constructor(options) {
    super(options);
    _defineProperty(this, "globalConfig", void 0);
    _defineProperty(this, "screen", void 0);
    _defineProperty(this, "newBrowser", async () => {
      const automationBrowsers = ['chromium', 'firefox', 'webkit'];
      const automationBrowser = (0, _parseEnv.env)('UI_AUTOMATION_BROWSER');
      const browserType = _playwright.default[automationBrowser];
      const browser = await browserType.launch({
        devtools: process.env.DEVTOOLS !== 'false',
        headless: process.env.HEADLESS !== 'false',
        args: ['--disable-web-security', '--disable-features=IsolateOrigins, site-per-process']
      });
      return browser;
    });
    this.globalConfig = options.parameters;
  }
  async init(contextOptions) {
    var _this$screen, _this$screen2, _this$screen3;
    await ((_this$screen = this.screen) === null || _this$screen === void 0 || (_this$screen = _this$screen.page) === null || _this$screen === void 0 ? void 0 : _this$screen.close());
    await ((_this$screen2 = this.screen) === null || _this$screen2 === void 0 || (_this$screen2 = _this$screen2.context) === null || _this$screen2 === void 0 ? void 0 : _this$screen2.close());
    await ((_this$screen3 = this.screen) === null || _this$screen3 === void 0 || (_this$screen3 = _this$screen3.browser) === null || _this$screen3 === void 0 ? void 0 : _this$screen3.close());
    const browser = await this.newBrowser();
    const context = await browser.newContext(contextOptions);
    const page = await context.newPage();
    this.screen = {
      browser,
      context,
      page
    };
    return this.screen;
  }
}
exports.ScenarioWorld = ScenarioWorld;
(0, _cucumber.setWorldConstructor)(ScenarioWorld);