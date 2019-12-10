// / <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

// Scenario: Booking
Given(/I visit the homepage$/, () => {
    cy.visit('/');
});

When(/^I search for a Booking$/, () => cy.log('I search for a Booking'));

Then(/^It generates a fixture file stubbed API$/, () => {
    cy.log(`I search for a Booking ${Cypress.env('REACT_APP_URL')}`);
    cy.request({
        method: 'GET',
        url: `${Cypress.env('REACT_APP_URL')}bookings`,
    })
        .then((response) => {
            cy.writeFile(
                'cypress/fixtures/getBookings.json',
                response.body
            );
        });

    cy.fixture('getBookings').should((getBookings) => {
        cy.log('getBookings')
        expect(getBookings.size).to.exist;
    });
});