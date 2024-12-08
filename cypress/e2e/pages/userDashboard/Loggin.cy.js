import GoToLoginPageCy from "../login/GoToLoginPage.cy";
import LoginPageCy from "../login/LoginPage.cy";

class Loggin{
    go(){
        GoToLoginPageCy.enterURL()
        GoToLoginPageCy.openHamburgerMenu()
        GoToLoginPageCy.clickOnEnterButton()

        LoginPageCy.enterUserNamePassword(Cypress.env('USERNAME'), Cypress.env('PASSWORD'));
        LoginPageCy.clickSubmitButton()
    }
}

export default new Loggin();