import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import GoToLoginPageCy from "../../pages/login/GoToLoginPage.cy";
import LoginPageCy from "../../pages/login/LoginPage.cy";

Given("I am on the login page", () => {
    GoToLoginPageCy.enterURL()
    GoToLoginPageCy.goToLoginPage()
});

When("I enter valid credentials", () => {
    LoginPageCy.enterUserNamePassword(Cypress.env('USERNAME'), Cypress.env('PASSWORD'));
});

And("I click on the login button", () => {
    LoginPageCy.clickSubmitButton()
});

Then("I should see username in drawer button", () => {
    LoginPageCy.verifyPageUsername()
});