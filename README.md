# Cypress + Typescript + Cucumber

## Cypress Automation using Typescript and Cucumber
 - Cypress requires [Node.js](https://nodejs.org/en/download/)
 - [Allure Report](https://github.com/Shelex/cypress-allure-plugin) requires Java 8 or above

<br>

## Step definitions
In order to use the [recommended way](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#step-definitions), the `.feature` file will use  steps definitions from a directory with the same name as your `.feature`.

Assuming the feature files in `cypress/integration/ToDo/Daily-ToDo/DailyTask.feature`, so all the .ts files will be inside `cypress/integration/ToDo/Daily-ToDo`
<br>
<br>
### Reusable step definitions

All the shared step definitions have to be in `cypress\integration\common`
<br>
*It's a good place to put global hooks*

<br>

## Run the following commands in a terminal


 **Installing dependencies**  
```
npm i
```

**Open Cypress Test Runner**
```
npx cypress open 
```

**To Run all Tests**
```
npx cypress run 
```

**To Run Tagged Tests**
```
npx cypress-tags run -e TAGS='@focus'
```
*you also can create a script for tagged tests in package.json and run using '**npm run cy:focus**'*
```
cy:focus": "npx cypress-tags run -e TAGS='@focus'
```

<br>

## **Allure Report**


**Generate Allure Report**  
```
npm run allure:report
```

**Open Allure Report**  
```
npm run allure:open
```