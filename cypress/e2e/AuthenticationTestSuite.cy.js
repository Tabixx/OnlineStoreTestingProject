import HomePage from "../page-objects/homePage";
import AccountPage from "../page-objects/myAccountPage";
import { faker } from '@faker-js/faker'

describe('Authentication Tests', () => {
    const homePage = new HomePage();
    const accountPage = new AccountPage();

    before(function () {
        cy.fixture('users.json').as('userData')
    })
    
    it('Test Successful login to application', function() {
        homePage.visitPage()
        homePage.clickMyAccountHeaderButton()
        accountPage.fillUsernameFieldWithEmail(this.userData.email)
        accountPage.fillPasswordField(this.userData.password)
        accountPage.clickLoginButton()
        accountPage.checkVisibilityOfMyAccountNavigation()
    })
    it('Test failed login to application', function () {
        accountPage.visitPage()
        accountPage.fillUsernameFieldWithEmail(faker.internet.email())
        accountPage.fillPasswordField(faker.internet.password())
        accountPage.clickLoginButton()
        accountPage.checkVisibilityOfErrorAfterWrongLogin()
    })
})