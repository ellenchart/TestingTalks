"use strict";

var _cucumber = require("@cucumber/cucumber");
var _navigationBehavior = require("../support/navigation-behavior");
var _waitForBehavior = require("../support/wait-for-behavior");
(0, _cucumber.Given)(/^I am on the "([^"]*)" page$/, async function (pageId) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log("I am on the ".concat(pageId, " page"));
  await (0, _navigationBehavior.navigateToPage)(page, pageId, globalConfig);
  await (0, _waitForBehavior.waitFor)(() => (0, _navigationBehavior.currentPathMatchesPageId)(page, pageId, globalConfig));
});
(0, _cucumber.Given)(/^I am directed to the "([^"]*)" page$/, async function (pageId) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log("I am directed to the ".concat(pageId, " page"));
  await (0, _waitForBehavior.waitFor)(() => (0, _navigationBehavior.currentPathMatchesPageId)(page, pageId, globalConfig));
});