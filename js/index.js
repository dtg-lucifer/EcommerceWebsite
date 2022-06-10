const prodNavItm = document.querySelectorAll(".product__nav__item")
const prodNav = document.querySelector(".product__nav")

// TAB LOOKING LIKE NAVIGATION STYLING FOR ACTIVE TABS
prodNavItm.forEach((element) => {
    element.addEventListener("click", () => {
        prodNav.querySelector(".active").classList.remove("active")
        element.classList.add("active")
    })
})