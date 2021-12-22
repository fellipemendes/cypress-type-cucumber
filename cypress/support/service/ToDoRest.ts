
export default class ToDoRest {
    
    constructor(){ }

    executeGet(param, token){
        return cy.request({
            method: 'GET',
            url: `/todos${param}`,
            headers: {
                'Authorization':`Bearer ${token}`
            },                    
            failOnStatusCode: false
        }).as('responseRequest')
    }

    executePost(body, token){
        return cy.request({
            method: 'POST',
            url: `/todos`,
            headers: {
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: body,                 
            failOnStatusCode: false
        }).as('responseRequest')
    }

    executePut(ID, body, token){
        return cy.request({
            method: 'PUT',
            url: `/todos/${ID}`,
            headers: {
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: body,                 
            failOnStatusCode: false
        }).as('responseRequest')
    }
    executeDelete(ID, token){
        return cy.request({
            method: 'DELETE',
            url: `/todos/${ID}`,
            headers: {
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json'
            },               
            failOnStatusCode: false
        }).as('responseRequest')
    }
}