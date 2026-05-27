import HomePage from "../page-objects/homePage"
import CartPage from "../page-objects/cartPage"

describe('Purchasing Process Tests', () => {
    const homePage = new HomePage()
    const cartPage = new CartPage()

 it('Test Adding Product to Cart and then Deleting it', function () {
        homePage.visitPage()
        homePage.addProductToCart()
        homePage.clickGoToCartFromProductButton()
        cartPage.checkThatAddedProductIsInCart()
        cartPage.removeItemFromCart()
        cartPage.checkThatCartIsEmpty()
    })
})