const bars = document.querySelector('.bars');
const linksBars = document.querySelector('.links-bars');

let linksBarsVisible = false;

bars.addEventListener('click', () => {
    if (linksBarsVisible) {
        linksBars.style.display = "none";
    } else {
        linksBars.style.display = "block";
      }
    linksBarsVisible = !linksBarsVisible;
});

const boxes = document.querySelectorAll(".box");

function toggleBox() {
  const icon = this.querySelector(".toggle-icon");
  const answer = this.nextElementSibling;

  if (icon && answer) {
    icon.innerHTML = icon.innerHTML.includes("M6 12H18")
      ? '<path d="M6 12H12M18 12H12M12 12V6M12 12V18" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>'
      : '<path d="M6 12H18" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>';

    if (icon.innerHTML.includes("M6 12H18")) {
      answer.style.height = "auto";
    } else {
      answer.style.height = "0";
    }
  }
}

boxes.forEach(box => box.addEventListener("click", toggleBox));