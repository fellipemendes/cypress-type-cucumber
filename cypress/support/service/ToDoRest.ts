
export default class ToDoRest {
    
    constructor(){ }

    executeGet(param: string, token: any){
        return cy.request({
            method: 'GET',
            url: `/todos${param}`,
            headers: {
                'Authorization':`Bearer ${token}`
            },                    
            failOnStatusCode: false
        }).as('responseRequest')
    }

    executePost(body: { todoId: number; description: string; days: number }, token: any){
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

    executePut(ID: number, body: { description: string; done: boolean }, token: any){
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
    executeDelete(ID: any, token: any){
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