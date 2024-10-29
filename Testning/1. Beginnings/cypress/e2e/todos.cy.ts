describe("Todos", () => {
  it("should present hardcoded todos", () => {
    cy.visit("http://localhost:5173");

    // Assign

    // Act

    // Assert
    const lis = cy.get("li");
    lis.should("have.length", 3);
    lis.first().should("contain.text", "Lorem");
  });

  it("should add a new todo", () => {
    cy.visit("http://localhost:5173");

    // Assign
    const testText = "sit amet";
    const theInputTag = cy.get("input#userInput");
    theInputTag.type(testText);

    // Act
    cy.get("button#saveButton").click();

    // Assert
    cy.get("li").last().should("contain.text", testText);
  });
});
