describe('Accessibility Testing with Cypress and axe', () => {
    // Configuration to use a specific website for your tests
    const url = 'https://example.com'; // You can change this URL to any page you want to test

    beforeEach(() => {
        cy.visit(url); // Visit the URL before each test
        cy.injectAxe(); // Inject the axe script into the page
    });

    it('Should pass default accessibility tests', () => {
        cy.checkA11y(null, null, (violations) => {
            // Log accessibility results to the console
            console.log('Accessibility Violations:', violations);
        });
    });

    it('Should check accessibility with specific configuration', () => {
        cy.checkA11y(
            null, 
            {
                // Options to customize the tests
                includedImpacts: ['critical', 'serious'], // Only check for critical and serious violations
            },
            (violations) => {
                // Log results to the console
                console.log('Critical and Serious Accessibility Violations:', violations);
            }
        );
    });

    it('Should check accessibility with a specific selector', () => {
        cy.get('header').then($header => {
            cy.checkA11y($header, null, (violations) => {
                // Log results to the console
                console.log('Accessibility Violations in the Header:', violations);
            });
        });
    });
});
