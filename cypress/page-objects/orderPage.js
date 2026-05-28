import { faker } from '@faker-js/faker';

const firstNameField = '#billing_first_name'
const lastNameField = '#billing_last_name'
const countryDropdown = '#billing_country'
const addressField = '#billing_address_1'
const postalCodeField = '#billing_postcode'
const cityField = '#billing_city'
const phoneField = '#billing_phone'
const emailField = '#billing_email'
const finishOrderButton = '#place_order'
const countryDropdownPoland = 'Polska'
const orderConfirmationMessage = 'header.entry-header h1.entry-title'
const orderNumber = '.woocommerce-order-overview__order strong'

class OrderPage{
    fillAllRequiredFields(){
        cy.get(firstNameField).type(faker.person.firstName())
        cy.get(lastNameField).type(faker.person.lastName())
        cy.get(countryDropdown).select(countryDropdownPoland, {force: true})
        cy.get(addressField).type(faker.location.streetAddress())
        cy.get(postalCodeField).type(faker.location.zipCode('##-###'))
        cy.get(cityField).type(faker.location.city())
        cy.get(phoneField).type(faker.string.numeric(9))
        cy.get(emailField).type(faker.internet.email())
    }
    clickOrderFinishButton(){
        cy.get(finishOrderButton).click()
    }
    VerifyFinishedOrder(){
        // cy.contains('Zamówienie otrzymane').should('exist')
        cy.url({timeout: 15000}).should('include', 'order-received')
        cy.get(orderConfirmationMessage, {timeout: 10000}).should('contain.text', 'Zamówienie otrzymane')
        cy.get(orderNumber).should('exist').and('not.be.empty')
    }
}
export default OrderPage