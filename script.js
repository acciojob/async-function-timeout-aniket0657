describe("example to-do app", () => {
    beforeEach(() => {
        cy.visit(baseUrl + "/main.html"); // Ensure the correct URL
    });

    it("Checking empty form", () => {
        cy.get("input#text").should("be.empty");
        cy.get("input#delay").should("be.empty");
        cy.get("button#btn").should("exist");
        cy.get("div#output").should("be.empty");
    });

    it("Checking values - 1", () => {
        const text = "Test - 1";
        const delay = 1000;

        cy.get("input#text").type(text);
        cy.get("input#delay").type(delay);
        cy.get("button#btn").click();

        // Wait for the delay and check the output
        cy.wait(delay + 500); // Give some buffer time
        cy.get("div#output").should("have.text", text);
    });

    it("Checking values - 2", () => {
        const text = "Test - 2";
        const delay = 2000;

        cy.get("input#text").type(text);
        cy.get("input#delay").type(delay);
        cy.get("button#btn").click();

        // Wait for the delay and check the output
        cy.wait(delay + 500); // Give some buffer time
        cy.get("div#output").should("have.text", text);
    });
});
