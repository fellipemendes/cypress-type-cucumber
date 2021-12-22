export default class Token {

    constructor() {}

    getToken = () => {
        return cy.request({
            method: 'POST',
            url: `/login`,
            headers: {
                'Content-Type': 'application/json'   
            },               
            body: {
                "username": "fellipe.mendes@ciandt.com.br",
                "password": "123456"
            }
        })
    }
}
