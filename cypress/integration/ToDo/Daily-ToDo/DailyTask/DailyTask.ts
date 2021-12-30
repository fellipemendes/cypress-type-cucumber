import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';
import ToDoRest from "../../../../support/service/ToDoRest"
import faker from "faker"

let apiRest = new ToDoRest()
let infoTest = { descripton:"", days: 0 }

Before(function() {
    this.url = Cypress.env('baseUrl');
    cy.getToken().as('token')
    infoTest.descripton = faker.lorem.words(3)
    infoTest.days = faker.datatype.number({min: 1, max: 9})    
})

Given(/^I filled in the information about new Daily ToDo$/, function() {
    apiRest.executePost({
        "todoId": 1,
        "description": infoTest.descripton,
        "days": infoTest.days},
        this.token.body.access_token).as('responseRequest')
});

Then(/^The API has to return sucess to the request$/, function(){
    cy.allure().step('check api sucess request', false)
    cy.get("@responseRequest").then(function($el){
        expect($el).property('status').to.eql(201);
    })
});

Given(/^I edit the existing register add new information$/, function(){
    apiRest.executePut(1,{
        "description": infoTest.descripton,
        "done": false},
        this.token.body.access_token).as('responseRequest')
})

Then(/^the API has to return success to the request$/, function(){
    cy.get("@responseRequest").should(function($el){
        expect($el).property('status').to.eql(200);
    })
})

Given(/^I search all the existing registers$/, function(){
    apiRest.executeGet(
        '?description&offset=0&size=5', 
        this.token.body.access_token).as('responseRequest')
})

Then(/^the API has to return success to the search$/, function(){
    cy.get("@responseRequest").should(function($el){
        expect($el).property('status').to.eql(200);
    })
})
