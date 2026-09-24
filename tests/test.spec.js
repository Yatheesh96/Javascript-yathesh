import {test,expect} from '@playwright/test';

test('radio page', async({page}) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.locator('#checkBoxOption1').check();


    await page.pause();
})