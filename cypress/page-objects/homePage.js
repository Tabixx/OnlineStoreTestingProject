import Urls from "./urls"

const myAccountHeader = '#menu-item-100'
const dataBlockNameNew = 'div[data-block-name="woocommerce/product-new"]'
const checkCartFromProductLevel = '.added_to_cart.wc-forward'

class HomePage{

    clickMyAccountHeaderButton(){
        cy.get(myAccountHeader).click()
    }

    addProductToCart(HoodieWithZipper){
        cy.get(dataBlockNameNew).within(() =>{
            cy.get(HoodieWithZipper.locator).click()
        })
    }

    clickGoToCartFromProductButton(){
        cy.wait(1000)
        cy.get(dataBlockNameNew).within(() =>{
            cy.get(checkCartFromProductLevel).click()
        })
    }

    visitPage(){
        const urls = new Urls
        urls.visitHomePage()
    }
}
export default HomePage