import { Then, And } from "cypress-cucumber-preprocessor/steps";
import GoToUserDashBoard from "../../pages/userDashboard/GoToUserDashBoard.cy";
import CheckPersonalInfoPage from "../../pages/userDashboard/checkPersonalInfo/CheckPersonalInfoPage.cy";

const goToUserDashBoardCy = new GoToUserDashBoard();
const checkPersonalInfoPage = new CheckPersonalInfoPage();

And('I go to user dashboard', ()=>{
    goToUserDashBoardCy.go()
})

And('I go to user data', ()=>{
    checkPersonalInfoPage.go()
})

Then('I can see my user infos', ()=>{
    checkPersonalInfoPage.check()
})