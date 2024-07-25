describe('Drag and Drop Images', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Change this to your actual URL
  });

  it('should drag and drop images', () => {
    const draggable = Cypress.$('#div1')[0]; // Pick up this
    const droppable = Cypress.$('#div5')[0]; // Drop over this

    const coords = droppable.getBoundingClientRect();

    draggable.dispatchEvent(new MouseEvent('mousedown', { clientX: 0, clientY: 0 }));
    draggable.dispatchEvent(new MouseEvent('mousemove', { clientX: 10, clientY: 0 }));
    draggable.dispatchEvent(new MouseEvent('mousemove', { clientX: coords.x + 10, clientY: coords.y + 10 }));
    draggable.dispatchEvent(new MouseEvent('mouseup'));

    cy.get('#div5').within(() => {
      cy.get('.image').should('have.length', 1); // Adjust this assertion based on your requirements
    });
  });

  it('should verify presence of elements', () => {
    for (let index = 1; index <= 6; index++) {
      cy.get(`#div${index}`).should('have.length', 1);
    }
  });

  // Add more test cases as needed
});
