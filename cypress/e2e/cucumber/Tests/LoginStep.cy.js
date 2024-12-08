import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import GoToLoginPageCy from "../../pages/login/GoToLoginPage.cy";
import LoginPageCy from "../../pages/login/LoginPage.cy";
import goToLoginPageCy from "../../pages/login/GoToLoginPage.cy";

Given("I am on the login page", () => {
    GoToLoginPageCy.enterURL()
    GoToLoginPageCy.openHamburgerMenu()
    goToLoginPageCy.clickOnEnterButton()
});

When("I enter valid credentials", () => {
    LoginPageCy.enterUserNamePassword(Cypress.env('USERNAME'), Cypress.env('PASSWORD'));
});

And("I click on the login button", () => {
    LoginPageCy.clickSubmitButton()
});

Then("I should see first name in drawer button", () => {
    LoginPageCy.verifyPageUsername()
});

// Unsuccessfully login steps.

When("I enter not valid credentials", ()=>{
    LoginPageCy.enterUserNamePassword('invalid_username', 'invalid_password');
})

Then("should see not valid login message", () => {
    LoginPageCy.checkNotValidCredentialsMessage('E-mail, CPF/CNPJ ou senha incorretos.')
})

