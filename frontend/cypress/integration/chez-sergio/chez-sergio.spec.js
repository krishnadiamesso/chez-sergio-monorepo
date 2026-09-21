describe("example to-do app", () => {
  it("should display the product page", () => {
    cy.visit("http://localhost:8080");

    cy.get("img[alt='Parmesana']").click();

    cy.get("h2.display-2").should("have.text", "Parmesana");

    cy.get("h3.display-4").invoke("text").should("match", /35/);
  });

  it("should add and remove product to/from cart", () => {
    cy.visit("http://localhost:8080");

    cy.get("img[alt='Parmesana']").click();

    cy.request("POST", "/api/v1/cart_items", { pizza_id: 0 });

    cy.get("button#remove-cart")
      .invoke("text")
      .should("match", /Remove item from cart/);
  });
});
