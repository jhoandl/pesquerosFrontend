function collapse() {
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector(".dropdown-trigger");
    const content = dropdown.querySelector(".dropdown-content");
    trigger.addEventListener("click", () => {
      content.classList.toggle("hidden");
      content.classList.toggle("block");
    });
  });
}
export default {
  collapse,
};
