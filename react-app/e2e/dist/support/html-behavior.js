"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectValue = exports.inputValue = exports.getValue = exports.clickElement = exports.checkElement = void 0;
const clickElement = async (page, elementIdentifier) => {
  await page.click(elementIdentifier);
};
exports.clickElement = clickElement;
const inputValue = async (page, elementIdentifier, input) => {
  await page.focus(elementIdentifier);
  await page.fill(elementIdentifier, input);
};
exports.inputValue = inputValue;
const selectValue = async (page, elementIdentifier, option) => {
  await page.focus(elementIdentifier);
  await page.selectOption(elementIdentifier, option);
};
exports.selectValue = selectValue;
const checkElement = async (page, elementIdentifier) => {
  await page.check(elementIdentifier);
};
exports.checkElement = checkElement;
const getValue = async (page, elementIdentifier) => {
  const value = await page.$eval(elementIdentifier, el => {
    return el.value;
  });
  return value;
};
exports.getValue = getValue;