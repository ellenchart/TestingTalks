"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigateToPage = exports.getCurrentPageId = exports.currentPathMatchesPageId = void 0;
const navigateToPage = async (page, pageId, _ref) => {
  let {
    pagesConfig,
    hostsConfig
  } = _ref;
  const {
    UI_AUTOMATION_HOST: hostName = 'localhost'
  } = process.env;
  const hostPath = hostsConfig["".concat(hostName)];
  const url = new URL(hostPath);
  const pageConfigItem = pagesConfig[pageId];
  url.pathname = pageConfigItem.route;
  await page.goto(url.href);
};
exports.navigateToPage = navigateToPage;
const pathMatchesPageId = (path, pageId, _ref2) => {
  let {
    pagesConfig
  } = _ref2;
  const pageRegexString = pagesConfig[pageId].regex;
  const pageRegex = new RegExp(pageRegexString);
  return pageRegex.test(path);
};
const currentPathMatchesPageId = (page, pageId, globalConfig) => {
  const {
    pathname: currentPath
  } = new URL(page.url());
  return pathMatchesPageId(currentPath, pageId, globalConfig);
};
exports.currentPathMatchesPageId = currentPathMatchesPageId;
const getCurrentPageId = (page, globalConfig) => {
  const {
    pagesConfig
  } = globalConfig;
  const pageConfigPageIds = Object.keys(pagesConfig);
  const {
    pathname: currentPath
  } = new URL(page.url());
  const currentPageId = pageConfigPageIds.find(pageId => pathMatchesPageId(currentPath, pageId, globalConfig));
  if (!currentPageId) {
    throw Error("Failed to get page name from current route ".concat(currentPath, ",  possible pages: ").concat(JSON.stringify(pagesConfig)));
  }
  return currentPageId;
};
exports.getCurrentPageId = getCurrentPageId;