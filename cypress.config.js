import 'cypress-axe';

// Optional: Cypress configuration
Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevent uncaught exceptions from interrupting tests
    return false;
});
