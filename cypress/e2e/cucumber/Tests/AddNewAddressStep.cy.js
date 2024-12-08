import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import AddNewAdressCy from "../../pages/userDashboard/addNewAddress/AddNewAdress.cy";

When('I try add an address with an invalid CPF', ()=> {
    AddNewAdressCy.execute(
        '55555555',
        'qualquerCoisa',
        'logradouro',
        '11',
        'aqueleLa',
        'aquelaCidade',
        'aqueleEstado')
})

And('I select add address option', ()=> {
    AddNewAdressCy.selectAddAdress()
})

And('I try fill with more than 6 numbers in number field',()=>{
    AddNewAdressCy.fillNumberField('1234567')
})

And('I try fill number field with alphanumeric chars', ()=>{
    AddNewAdressCy.fillNumberField('dddddd')
})

// Unsuccessful messages

Then('I see error phrase to correct the CPF field', ()=>{
    AddNewAdressCy.checkInvalidCpfMessage()
})

Then('I see error phrase to correct the number field about length', ()=>{
    AddNewAdressCy.checkMoreThen6NumberFieldMessage()
})

Then('I see error phrase to correct the number field about typos', ()=>{
    AddNewAdressCy.checkWrongTypeOnNumberField()
})