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