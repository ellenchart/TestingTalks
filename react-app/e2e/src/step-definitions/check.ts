import { Then } from '@cucumber/cucumber'
import { ScenarioWorld } from './setup/world'
import {
    checkElement,
    uncheckElement,
} from '../support/html-behavior'
import { waitFor } from '../support/wait-for-behavior'
import { getElementLocator } from '../support/web-element-helper'
import {ElementKey } from '../env/global'

Then(
    /^I (check)?(uncheck)? the "([^"]*)" (?:check box|radio button)$/,
    async function (this: ScenarioWorld, checked: boolean, unchecked: boolean, elementKey: ElementKey) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`I ${unchecked?'uncheck ':'check'} the ${elementKey} check box|radio button`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const result = await page.waitForSelector(elementIdentifier, {
                state: 'visible',
            })
            if (result) {
                if (!!unchecked) {
                    await uncheckElement(page, elementIdentifier)
                } else {
                    await checkElement(page, elementIdentifier);
                }
            }
            return result;
        })
    }
)