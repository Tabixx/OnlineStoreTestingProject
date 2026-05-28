const productName = '.product-name'
const removeItemButton = '.remove'
const emptyCartAlert = '.cart-empty.woocommerce-info'
const goToPayment = '.wc-proceed-to-checkout'

class CartPage{

    checkThatAddedProductIsInCart(HoodieWithZipper){
        cy.get(productName).contains(HoodieWithZipper.name).should('exist')
    }

    removeItemFromCart(){
        cy.get(removeItemButton).click()
    }

    checkThatCartIsEmpty(){
        cy.get(emptyCartAlert).should('exist')
    }

    clickGoToPayment(){
        cy.get(goToPayment).click()
    }
}
export default CartPage