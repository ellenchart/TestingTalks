"use strict";

var _cucumber = require("@cucumber/cucumber");
var _htmlBehavior = require("../../support/html-behavior");
var _webElementHelper = require("../../support/web-element-helper");
var _waitForBehavior = require("../../support/wait-for-behavior");
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? contain the text "(.*)"$/, async function (elementKey, negate, expectedElementText) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log("the ".concat(elementKey, " should ").concat(negate ? 'not ' : '', "contain the text ").concat(expectedElementText));
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementText = await page.textContent(elementIdentifier);
    return (elementText === null || elementText === void 0 ? void 0 : elementText.includes(expectedElementText)) === !negate;
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? equal the text "([^"]*)"$/, async function (elementKey, negate, expectedElementText) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log("the ".concat(elementKey, " should ").concat(negate ? 'not ' : '', "equal the text ").concat(expectedElementText));
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementText = await page.textContent(elementIdentifier);
    console.log(elementText);
    console.log(expectedElementText);
    return elementText === expectedElementText === !negate;
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? contain the value "([^"]*)"$/, async function (elementKey, negate, elementValue) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log("the ".concat(elementKey, " should ").concat(negate ? 'not ' : '', "contain the value ").concat(elementValue));
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementAttribute = await (0, _htmlBehavior.getValue)(page, elementIdentifier);
    return (elementAttribute === null || elementAttribute === void 0 ? void 0 : elementAttribute.includes(elementValue)) === !negate;
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? equal the value "([^"]*)"$/, async function (elementKey, negate, elementValue) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log("the ".concat(elementKey, " should ").concat(negate ? 'not ' : '', "equal the value ").concat(elementValue));
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementAttribute = await (0, _htmlBehavior.getValue)(page, elementIdentifier);
    return elementAttribute === elementValue === !negate;
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? be enabled$/, async function (elementKey, negate) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log("the ".concat(elementKey, " should ").concat(negate ? 'not' : '', "be enabled"));
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const isElementEnabled = await page.isEnabled(elementIdentifier);
    return isElementEnabled === !negate;
  });
});