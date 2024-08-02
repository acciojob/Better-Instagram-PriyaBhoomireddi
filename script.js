window.onload = function() {
    let images = document.querySelectorAll('.image');
    let currentImage;

    images.forEach(img => {
        img.addEventListener('dragstart', function(e) {
            currentImage = this;
            e.dataTransfer.setData('text/plain', getComputedStyle(this).backgroundImage);
        });

        img.addEventListener('dragover', function(e) {
            e.preventDefault();
        });

        img.addEventListener('drop', function(e) {
            e.preventDefault();
            currentImage.style.backgroundImage = getComputedStyle(this).backgroundImage;
            this.style.backgroundImage = e.dataTransfer.getData('text/plain');
        });
    });
};