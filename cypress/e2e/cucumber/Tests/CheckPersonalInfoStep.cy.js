import { Then, And } from "cypress-cucumber-preprocessor/steps";
import GoToUserDashBoard from "../../pages/userDashboard/GoToUserDashBoard.cy";
import CheckPersonalInfoPage from "../../pages/userDashboard/checkPersonalInfo/CheckPersonalInfoPage.cy";

And('I go to user dashboard', ()=>{
    GoToUserDashBoard.go()
})

And('I go to user data', ()=>{
    CheckPersonalInfoPage.go()
})

Then('I can see my user infos', ()=>{
    CheckPersonalInfoPage.check()
})