import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';
import GetToken from "../../../../support/service/getToken"
import ToDoRest from "../../../../support/service/ToDoRest"

let Token = new GetToken()
let apiRest = new ToDoRest()

Before(function() {
    this.url = Cypress.env('baseUrl');
    Token.getToken().as('token')
})
    
Given(/^I filled in the information about new Daily ToDo$/, function() {
    apiRest.executePost(
        {
            "todoId": 1,
            "description": "exec the TC",
            "days": 1
        },
        this.token.body.access_token).as('responseRequest')
});

Then(/^The API has to return sucess to the request$/, function(){
    cy.allure().step('check api sucess request', false)
    cy.get("@responseRequest").then(function($el){
        expect($el).property('status').to.eql(201);
    })
});

Given(/^I edit the existing register add new information$/, function(){
    apiRest.executePut(1,
        {
            "description": "write automated tests",
            "done": false
        },
        this.token.body.access_token).as('responseRequest')
})

Then(/^the API has to return success to the request$/, function(){
    cy.get("@responseRequest").should(function($el){
        expect($el).property('status').to.eql(200);
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
})
