describe("MovieSearch tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should present movies when searching", () => {
    // Assign
    cy.get("input#searchText").type("star");

    // Act
    cy.get("button#search").click();

    // Assert
    cy.get("div.movie").should("have.length", 10);
  });

  it("should show a new result set after the second search", () => {
    // Assign
    cy.get("input#searchText").type("star");
    cy.get("button#search").click();
    cy.get("input#searchText").clear().type("harry");

    // Act
    cy.get("button#search").click();

    // Assert
    cy.get("div.movie").should("have.length", 10);
  });

  it("should present a movie according to design", () => {
    // Assign
    cy.intercept("https://omdbapi.com/*", {
      Response: "True",
      Search: [{ Title: "The Matrix", Poster: "somerandomurl.jpg" }],
    });
    cy.get("input#searchText").type("star");

    // Act
    cy.get("button#search").click();

    // Assert
    cy.get("div.movie").should("have.length", 1);
    cy.get(".movie h2").should("contain.text", "The Matrix");
    cy.get(".movie img").should("have.attr", "src", "somerandomurl.jpg");
    cy.get(".movie img").should("have.attr", "alt", "The Matrix");
  });

  it("should not search if searchtext is too short", () => {
    // Assign
    cy.get("input#searchText").type("st");

    // Act
    cy.get("button#search").click();

    // Assert
    cy.get("#movies").should(
      "contain.text",
      "Du måste skriva minst tre tecken för att kunna söka"
    );
  });

  it("should show an error message if there is an error during search", () => {
    // Assign
    cy.intercept("https://omdbapi.com/*", {
      Response: "False",
      Error: "Some error message",
    });
    cy.get("input#searchText").type("star");

    // Act
    cy.get("button#search").click();

    // Assert
    cy.get("#movies").should("contain.text", "Some error message");
  });
});
