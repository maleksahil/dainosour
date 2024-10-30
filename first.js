let character = document.getElementById("character");
let block = document.getElementById("block");

function jump() {
  if (character.classList.contains("animate") === false) { // More efficient class check
    character.classList.add("animate");
  }
  setTimeout(function() {
    character.classList.remove("animate");
  }, 500);
}

let checkDead = setInterval(function() {
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

  // Check for collision only if block is within a reasonable range (adjust 100 as needed)
  if (blockLeft < 360 && blockLeft > 330 && characterTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("You lose!");
  }
}, 100); // Consider a larger interval for performance