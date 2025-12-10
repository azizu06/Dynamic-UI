function drop() {
  const dropdown = document.querySelector(".menu");
  const items = document.querySelector(".items");
  dropdown.addEventListener("click", () => {
    items.classList.toggle("hide");
  });
}

export { drop };
