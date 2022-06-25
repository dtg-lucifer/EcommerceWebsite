const prodNavItm = document.querySelectorAll(".product__nav__item")
const prodNav = document.querySelector(".product__nav")
const mainSection = document.querySelector("#product__section")
const scrollUp = document.querySelector("#scrollUp")
const allProducts = document.querySelectorAll("div[id^='product']")

// TAB LOOKING LIKE NAVIGATION STYLING FOR ACTIVE TABS
prodNavItm.forEach((element) => {
    element.addEventListener("click", () => {
        prodNav.querySelector(".active").classList.remove("active")
        element.classList.add("active")
    })
})

const observer = new IntersectionObserver(
    (entries, _) => {
        entries.forEach((entry) => {
            if(!entry.isIntersecting) {
                scrollUp.classList.remove("visible")
                scrollUp.classList.add("hidden");
            } else {
                scrollUp.classList.remove("hidden")
                scrollUp.classList.add("visible");
            }
        })
    }
)
observer.observe(mainSection)

scrollUp.addEventListener("click", () => {
    window.scrollTo(0, 0);

    // OR

    // window.scroll({
    //     top: 0,
    //     left: 0,
    //     behavior: "smooth",
    // })
})