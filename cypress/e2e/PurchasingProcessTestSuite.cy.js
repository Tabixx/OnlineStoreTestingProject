import HomePage from "../page-objects/homePage"
import CartPage from "../page-objects/cartPage"
import OrderPage from "../page-objects/orderPage"

describe('Purchasing Process Tests', () => {
    const homePage = new HomePage()
    const cartPage = new CartPage()
    const orderPage = new OrderPage()

    beforeEach(function() {
    cy.fixture('products.json').as('productsData')
})

    it('Test Adding Product to Cart and then Deleting it', function () {
        homePage.visitPage()
        homePage.addProductToCart(this.productsData.HoodieWithZipper)
        homePage.clickGoToCartFromProductButton()
        cartPage.checkThatAddedProductIsInCart(this.productsData.HoodieWithZipper)
        cartPage.removeItemFromCart()
        cartPage.checkThatCartIsEmpty()
    })

    it('Test Full Purchasing Process', function () {
        homePage.visitPage()
        homePage.addProductToCart(this.productsData.HoodieWithZipper)
        homePage.clickGoToCartFromProductButton()
        cartPage.checkThatAddedProductIsInCart(this.productsData.HoodieWithZipper)
        cartPage.clickGoToPayment()
        orderPage.fillAllRequiredFields()
        orderPage.clickOrderFinishButton()
        orderPage.VerifyFinishedOrder()
    })
})