const button = document.querySelector(".button");
const links = document.querySelector(".links");
const navbar = document.querySelector(".navbar");
const btn_icon = document.querySelector(".button i");

button.addEventListener("click", () => {
    links.classList.toggle("show-links");
    navbar.classList.toggle("show");

    if (btn_icon.classList.contains("fa-bars")) {
        btn_icon.classList.remove("fa-bars");
        btn_icon.classList.add("fa-xmark");
        // btn_icon.classList = `fa-solid fa-xmark`;
    } else if (btn_icon.classList.contains("fa-xmark")) {
        btn_icon.classList.remove("fa-xmark");
        btn_icon.classList.add("fa-bars");
        // btn_icon.classList = `fa-solid fa-bars`;
    }
});