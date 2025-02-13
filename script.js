document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("no-btn");
  const yesBtn = document.getElementById("yes-btn");
<<<<<<< HEAD

  function moveButton() {
=======
  const valentinePage = document.getElementById("valentine-page");
  const navButtons = document.querySelectorAll(".nav-btn");
  const sections = document.querySelectorAll(".content-section");
  const mainContent = document.getElementById("main-content");

  moveButton = () => {
>>>>>>> 1ba722a (Initial commit)
    const x = Math.random() * (400 - noBtn.offsetWidth);
    const y = Math.random() * (400 - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
<<<<<<< HEAD
  }
=======
  };

  switchSection = (targetId) => {
    sections.forEach((section) => {
      if (section.id === targetId) {
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
      }
    });
  };

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetSection = button.dataset.target;
      switchSection(targetSection);
    });
  });

  setTimeout(() => switchSection("home"), 100);
>>>>>>> 1ba722a (Initial commit)

  noBtn.addEventListener("mouseover", moveButton);
  noBtn.addEventListener("touchstart", moveButton);

  yesBtn.addEventListener("click", () => {
<<<<<<< HEAD
    window.location.href = "pages/home.html";
  });
});
=======
    console.log("Yes button clicked");
    valentinePage.classList.add("hidden");
    mainContent.classList.remove("hidden");
  });

  function updateCountdown(startDate) {
    const start = new Date(startDate);
    const now = new Date();
    const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    document.getElementById("days-counter").innerText = `${diff} days`;
    const progress = Math.min((diff % 1000) / 10, 100);
    document.getElementById("progress").style.width = `${progress}%`;
    document.getElementById("milestone-days").innerText = 1000 - (diff % 1000);
  }
  updateCountdown("2022-07-04");
  setInterval(() => updateCountdown("2022-07-04"), 86400000);
});

const image = "./assets/images/couple.jpg";
const rows = 3;
const cols = 3;
const puzzleContainer = document.getElementById("puzzle");
const shuffleButton = document.getElementById("shuffle");
let pieces = [];

function createPuzzle() {
  pieces = [];
  for (let i = 0; i < rows * cols; i++) {
    const piece = document.createElement("div");
    piece.classList.add("puzzle-piece");
    const row = Math.floor(i / rows);
    const col = i % cols;
    piece.style.backgroundImage = `url(${image})`;
    piece.style.backgroundPosition = `-${col * 100}px -${row * 100}px`;
    piece.style.order = i;
    piece.setAttribute("data-id", i);
    piece.setAttribute("draggable", true);
    piece.addEventListener("dragstart", handleDragStart);
    piece.addEventListener("dragover", handleDragOver);
    piece.addEventListener("dragenter", handleDragEnter);
    piece.addEventListener("dragleave", handleDragLeave);
    piece.addEventListener("drop", handleDrop);
    piece.addEventListener("dragend", handleDragEnd);
    pieces.push(piece);
    puzzleContainer.appendChild(piece);
  }
}

function shufflePuzzle() {
  pieces.forEach((piece) => {
    const randomIndex = Math.floor(Math.random() * pieces.length);
    const temp = pieces[randomIndex].style.order;
    pieces[randomIndex].style.order = piece.style.order;
    piece.style.order = temp;
  });
}

function checkPuzzleCompletion() {
  let isComplete = true;
  pieces.forEach((piece) => {
    if (
      parseInt(piece.style.order) !== parseInt(piece.getAttribute("data-id"))
    ) {
      isComplete = false;
    }
  });
  if (isComplete) {
    showCompletionMessage();
  }
}

function showCompletionMessage() {
  alert("Kent : 'You are amazing, Babe. I love You!!' ");
}

let draggedPiece = null;

function handleDragStart(event) {
  draggedPiece = event.target;
  setTimeout(() => {
    draggedPiece.style.opacity = "0.5";
  }, 0);
}

function handleDragEnd(event) {
  draggedPiece.style.opacity = "1";
  draggedPiece = null;
  checkPuzzleCompletion();
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDragEnter(event) {
  event.target.classList.add("hover");
}

function handleDragLeave(event) {
  event.target.classList.remove("hover");
}

function handleDrop(event) {
  event.preventDefault();
  if (
    event.target.classList.contains("puzzle-piece") &&
    draggedPiece !== event.target
  ) {
    // Swap positions of the pieces
    const temp = draggedPiece.style.order;
    draggedPiece.style.order = event.target.style.order;
    event.target.style.order = temp;

    // Update the styling of the pieces
    draggedPiece.classList.remove("hover");
    event.target.classList.remove("hover");
  }
  checkPuzzleCompletion(); // Check completion after each drop
}

// Add drag events to all puzzle pieces
pieces.forEach((piece) => {
  piece.addEventListener("dragend", handleDragEnd);
  piece.addEventListener("dragover", handleDragOver);
  piece.addEventListener("drop", handleDrop);
});

// Shuffle the puzzle when the button is clicked
shuffleButton.addEventListener("click", shufflePuzzle);

// Initialize puzzle
createPuzzle();
shufflePuzzle();
>>>>>>> 1ba722a (Initial commit)
