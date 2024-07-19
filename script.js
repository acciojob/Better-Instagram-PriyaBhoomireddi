document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image");

  images.forEach(image => {
    image.addEventListener("dragstart", dragStart);
    image.addEventListener("dragover", dragOver);
    image.addEventListener("drop", drop);
    image.addEventListener("dragenter", dragEnter);
    image.addEventListener("dragleave", dragLeave);
  });

  let draggedElement = null;

  function dragStart(event) {
    draggedElement = event.target;
    event.dataTransfer.setData("text/plain", draggedElement.id);
    setTimeout(() => {
      draggedElement.classList.add("dragging");
    }, 0);
  }

  function dragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }

  function drop(event) {
    event.preventDefault();
    const target = event.target;
    const draggedId = event.dataTransfer.getData("text/plain");

    if (target.classList.contains("image") && target.id !== draggedId) {
      const draggedElement = document.getElementById(draggedId);

      // Swap the background images
      const tempBackground = target.style.backgroundImage;
      target.style.backgroundImage = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = tempBackground;
    }

    // Remove dragging class and reset border styles
    draggedElement.classList.remove("dragging");
    target.classList.remove("over");
  }

  function dragEnter(event) {
    event.preventDefault();
    if (event.target.classList.contains("image")) {
      event.target.classList.add("over");
    }
  }

  function dragLeave(event) {
    if (event.target.classList.contains("image")) {
      event.target.classList.remove("over");
    }
  }
});
