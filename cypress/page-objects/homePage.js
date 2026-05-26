import Urls from "./urls"

const myAccountHeader = '#menu-item-100'

class HomePage{

    clickMyAccountHeaderButton(){
        cy.get(myAccountHeader).click()
    }

    visitPage(){
        const urls = new Urls
        urls.visitHomePage()
    }
}
export default HomePage