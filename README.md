These test cases test for the following on the website "Swag Labs":
- Opening the website itself
- Successfully logging in with a dummy user and password
- Adding several items to cart and validating the addition
- Checking the contents of the cart
- Inputting personal details during checkout
- The ability to complete or cancel an order based on the total amount of the selected products
- Checking for a successful order if opted to complete the order
- Successfully logging out of the website

The test cases were implemented using the following technologies
- Playwright & Typescript 
    - Used to implement the test cases itself
    - Playwright: https://playwright.dev/
    - Typescript: https://www.typescriptlang.org/
- Node.js
    - Used to help compile other technologies as well as maintain what technologies are used for the test cases
    - https://nodejs.org/en
- CSV Parse
    - Used to extract data from the CSV file
    - https://csv.js.org/parse/
- playwright-bdd
    - Used to help execute the test cases
    - https://github.com/vitalets/playwright-bdd
- Allure Report
    - Used to create a report of the results of the test.
    - https://allurereport.org/


To run the test cases, you can use the command "npm test"