document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("no-btn");
  const yesBtn = document.getElementById("yes-btn");

  function moveButton() {
    const x = Math.random() * (400 - noBtn.offsetWidth);
    const y = Math.random() * (400 - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }

  noBtn.addEventListener("mouseover", moveButton);
  noBtn.addEventListener("touchstart", moveButton);

  yesBtn.addEventListener("click", () => {
    window.location.href = "pages/home.html";
  });
});
