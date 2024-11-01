describe("Weather app tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should contain the button", () => {
    cy.get("button").should("contain.text", "Get weather");
  });

  it("should present the local weather", () => {
    cy.intercept("https://api.openweathermap.org/data/2.5/weather*", {
      weather: [
        {
          id: 800,
          main: "Det regnar köttbullar",
          description: "Det gör ont",
          icon: "01d",
        },
      ],
      main: {
        temp: 30,
        feels_like: 100,
      },
      name: "Stockholm",
    });

    cy.get("button").click();

    cy.get("h2").should("contain.text", "Det regnar köttbullar");
    cy.get("p").should("contain.text", "Det gör ont");
    cy.get("span").should("contain.text", "30");
  });
});
