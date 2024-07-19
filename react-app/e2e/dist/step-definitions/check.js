"use strict";

var _cucumber = require("@cucumber/cucumber");
var _htmlBehavior = require("../support/html-behavior");
var _waitForBehavior = require("../support/wait-for-behavior");
var _webElementHelper = require("../support/web-element-helper");
(0, _cucumber.Then)(/^I check the "([^"]*)" radio button$/, async function (elementKey) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log("I check the ".concat(elementKey, " radio button"));
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const result = await page.waitForSelector(elementIdentifier, {
      state: 'visible'
    });
    if (result) {
      await (0, _htmlBehavior.checkElement)(page, elementIdentifier);
    }
    return result;
  });
});