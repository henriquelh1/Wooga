/// <reference types="cypress" />

describe("Api Testing x", () => {

    const baseURL = "https://petstore3.swagger.io/api/v3";

    it("Should validate response code", () => {
        cy.request({
            method: "GET",
            url: baseURL+"/pet/findByStatus?status=available",
            headers: {
                accept: "application/json"
            }
        }).then(resp => {
            expect(resp.status).to.eq(200)
            expect(resp.duration).to.not.be.greaterThan(1500) 

            resp.body.forEach(function(item) { 
                if(item.category.name == "Lions"){
                    cy.log(item.name)
                }
            });
        })
    })

    it("Should add new pet", () => {
        cy.request({
            method: "POST",
            url: baseURL+"/pet",
            body:{
                    "id": 131111454,
                    "name": "Pertsaw",
                    "category": {
                      "id": 1,
                      "name": "Dogs"
                    },
                    "photoUrls": [
                      "no"
                    ],
                    "tags": [
                      {
                        "id": 0,
                        "name": "small"
                      }
                    ],
                    "status": "available"
                  }
            
        }).then(resp => {
            expect(resp.status).to.eq(200)
            cy.log(resp.name)
            expect(resp.body.name).to.eq("Pertsaaw")
           
        })
    })

    it("Should change pet name", () => {
        cy.request({
            method: "PUT",
            url: baseURL+"/pet",
           
            body:{
                    "id": 131111454,
                    "name": "John",
                    "category": {
                      "id": 1,
                      "name": "Dogs"
                    },
                    "photoUrls": [
                      "no"
                    ],
                    "tags": [
                      {
                        "id": 0,
                        "name": "small"
                      }
                    ],
                    "status": "available"
                  }
        }).then(resp => {
            expect(resp.status).to.eq(200)
            cy.log(resp.name)
            expect(resp.body.name).to.eq("John") 
        })
    })
    
    it("Should place an order for a pet", () => {
        cy.request({
            method: "POST",
            url: baseURL+"/store/order",
            body:{
                "id": 10,
                "petId": 1311114548,
                "quantity": 7,
                "shipDate": "2022-02-28T03:27:01.094Z",
                "status": "approved",
                "complete": true
              }
        }).then(resp => {
            expect(resp.status).to.eq(200)
            expect(resp.body.status).to.eq("approved") 
            expect(resp.body.complete).to.eq(true) 
        })
    })

    it("Should not search for an inexistent order", () => {
        cy.request({
            method: "GET",
            url: baseURL+"/store/order/982727277298",
            failOnStatusCode: false,
        }).then(resp => {
            expect(resp.status).to.eq(404)
            expect(resp.body).to.eq("Order not found") 
        })
    })

    it("Should create user", () => {
        cy.request({
            method: "POST",
            url: baseURL+"/user",
            body:{
                "id": 1456,
                "username": "user.user",
                "firstName": "Peter",
                "lastName": "James",
                "email": "peter@email.com",
                "password": "12345",
                "phone": "12345",
                "userStatus": 1
              }
        }).then(resp => {
            expect(resp.status).to.eq(200)
        })
    })

    it("Should delete user", () => {
        cy.request({
            method: "DELETE",
            url: baseURL+"/user/1456",
        }).then(resp => {
            expect(resp.status).to.eq(200)
        })
    })

})
