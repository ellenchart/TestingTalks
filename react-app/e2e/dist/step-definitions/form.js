"use strict";

var _cucumber = require("@cucumber/cucumber");
var _waitForBehavior = require("../support/wait-for-behavior");
var _webElementHelper = require("../support/web-element-helper");
var _htmlBehavior = require("../support/html-behavior");
(0, _cucumber.Then)(/^I fill in the "([^"]*)" input with "([^"]*)"$/, async function (elementKey, input) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log("I fill in the ".concat(elementKey, " input with ").concat(input));
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const result = await page.waitForSelector(elementIdentifier, {
      state: 'visible'
    });
    if (result) {
      await (0, _htmlBehavior.inputValue)(page, elementIdentifier, input);
    }
    return result;
  });
});
(0, _cucumber.Then)(/^I select the "([^"]*)" option from the "([^"]*)"$/, async function (option, elementKey) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log("I select the ".concat(option, " option from the ").concat(elementKey));
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const result = await page.waitForSelector(elementIdentifier, {
      state: 'visible'
    });
    if (result) {
      await (0, _htmlBehavior.selectValue)(page, elementIdentifier, option);
    }
    return result;
  });
});