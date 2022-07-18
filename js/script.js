const navToggle = document.querySelector(".navToggle")
const menuItems = document.querySelector(".menuItems")

navToggle.addEventListener("click", () => {
    menuItems.classList.toggle("menuItems_transition")
})