window.onload = function() {
  let images = document.querySelectorAll('.image');
  let parent = document.querySelector('#parent');
  let currentImage;

  images.forEach(img => {
    img.setAttribute('draggable', true);

    img.addEventListener('dragstart', function(e) {
      currentImage = this;
    });

    img.addEventListener('dragover', function(e) {
      e.preventDefault();
    });

    img.addEventListener('drop', function(e) {
      e.preventDefault();
      let temp = this.cloneNode(true);
      parent.insertBefore(temp, currentImage);
      parent.insertBefore(currentImage, this);
      parent.replaceChild(this, temp);
    });
  });
};
it('should drag and drop images', () => {
    const draggable = Cypress.$('#div1')[0]; 
    const droppable = Cypress.$('#div5')[0]; 

    const coords = droppable.getBoundingClientRect();

    draggable.dispatchEvent(new MouseEvent('mousedown', { clientX: 0, clientY: 0 }));
    draggable.dispatchEvent(new MouseEvent('mousemove', { clientX: 10, clientY: 0 }));
    draggable.dispatchEvent(new MouseEvent('mousemove', { clientX: coords.x + 10, clientY: coords.y + 10 }));
    draggable.dispatchEvent(new MouseEvent('mouseup'));

    cy.get('#div5').within(() => {
      cy.get('.image').should('have.length', 1); 
    });
});