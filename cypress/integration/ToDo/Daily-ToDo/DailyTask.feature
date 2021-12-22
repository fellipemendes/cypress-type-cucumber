@feature("CRUD_TodoTest")
Feature: Daily Task ToDo

    Feature Description
    
    Scenario: Create a new Daily ToDo
        Given I filled in the information about new Daily ToDo
        Then The API has to return sucess to the request

    Scenario: Update an existing ToDo
        Given I edit the existing register add new information
        Then the API has to return success to the request

    Scenario: Search for an existing ToDo
        Given I search all the existing registers
        Then the API has to return success to the search