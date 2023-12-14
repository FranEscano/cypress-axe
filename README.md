# Cypress Accessibility Testing

This project includes Cypress Axe for automated accessibility testing in a sample Todo application built with React.

## Table of Contents
- [Importance of Accessibility](#importance-of-accessibility)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Accessibility Testing](#accessibility-testing)

## Importance of Accessibility

Accessibility is crucial in software products for the following reasons:

- **Inclusivity:** Accessible software ensures that people with disabilities can use and interact with the application. It promotes inclusivity and a positive user experience for everyone.

- **Legal Compliance:** Many countries and regions have legal requirements regarding software accessibility. Adhering to accessibility standards helps in compliance with these regulations.

- **Business Benefits:** Accessible software can reach a larger audience, leading to increased user engagement and customer satisfaction. It can also enhance the reputation of the product and the company.

- **Ethical Responsibility:** Ensuring that software is accessible is an ethical responsibility for developers. It reflects a commitment to creating technology that benefits all users, regardless of their abilities.

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/todo-app.git
    ```

2. Change into the project directory:

    ```bash
    cd todo-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Dependencies

### Node.js

- **Functionality:** Node.js is a JavaScript runtime that allows you to execute JavaScript code outside of a web browser. It is the runtime environment for this project.

- **Installation:** [Node.js](https://nodejs.org/)

### npm

- **Functionality:** npm is the package manager for JavaScript. It is used to manage project dependencies and execute various commands related to package management.

- **Installation:** npm is included with Node.js. No separate installation is required.

### Cypress

- **Functionality:** Cypress is a JavaScript end-to-end testing framework. It is used for writing and running automated tests for web applications.

- **Installation:** Included in the project dependencies. Installed via `npm install`.

### Cypress Axe

- **Functionality:** Cypress Axe is a Cypress plugin that integrates the Axe accessibility testing library into Cypress tests. It allows for automated accessibility testing of web applications.

- **Installation:** Included in the project dependencies. Installed via `npm install`.

## Accessibility Testing

### Cypress Axe Automated Testing

This project uses Cypress and Cypress Axe for automated accessibility testing. The accessibility tests can be executed using the following commands:

- To test the entire page for accessibility issues:

    ```bash
    npx cypress run --spec cypress/integration/todo.spec.js
    ```

- To exclude specific elements on the page:

    ```bash
    npx cypress run --spec cypress/integration/todo.spec.js --env exclude=".learn"
    ```

- To test specific elements on the page:

    ```bash
    npx cypress run --spec cypress/integration/todo.spec.js --env include=".learn"
    ```

- To include rules with serious and critical impacts only:

    ```bash
    npx cypress run --spec cypress/integration/todo.spec.js --env includedImpacts="critical,serious"
    ```

- To exclude specific accessibility rules:

    ```bash
    npx cypress run --spec cypress/integration/todo.spec.js --env excludeRules="color-contrast"
    ```

### Lighthouse Performance Tool

Additionally, this repository includes a screenshot of the Lighthouse performance tool built into Chrome. Lighthouse is an open-source, automated tool for improving the quality of web pages. It can be accessed through Chrome DevTools or run from the command line.

#### How to use Lighthouse:

1. Open Chrome DevTools by right-clicking on the page, selecting "Inspect", and navigating to the "Audits/Lighthouse" tab.

2. Click on the "Generate report" button to run the Lighthouse audit.

3. Review the Lighthouse report, which provides insights into performance, accessibility, SEO, and best practices.

4. Use the recommendations provided by Lighthouse to improve the overall quality of the web page.

### Manual Testing

While automated testing is valuable for identifying many accessibility issues, manual testing is equally important. Manual testing allows testers to experience the application as real users do and catch issues that automated tests might miss. It involves navigating through the application using various assistive technologies and ensuring that all functionalities are accessible and user-friendly.