import HomePage from "../page-objects/homePage"
import CartPage from "../page-objects/cartPage"
import OrderPage from "../page-objects/orderPage"

describe('Purchasing Process Tests', () => {
    const homePage = new HomePage()
    const cartPage = new CartPage()
    const orderPage = new OrderPage()

    it('Test Adding Product to Cart and then Deleting it', function () {
        homePage.visitPage()
        homePage.addProductToCart()
        homePage.clickGoToCartFromProductButton()
        cartPage.checkThatAddedProductIsInCart()
        cartPage.removeItemFromCart()
        cartPage.checkThatCartIsEmpty()
    })

    it('Test Full Purchasing Process', function () {
        homePage.visitPage()
        homePage.addProductToCart()
        homePage.clickGoToCartFromProductButton()
        cartPage.checkThatAddedProductIsInCart()
        cartPage.clickGoToPayment()
        orderPage.fillAllRequiredFields()
        orderPage.clickOrderFinishButton()
        orderPage.VerifyFinishedOrder()
    })
})