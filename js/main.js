/*=============== SHOW SIDEBAR ===============*/


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target'),
    tabContent = document.querySelectorAll('[data-content')

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills-active')
            })

            target.classList.add('skills-active')

            tabs.forEach(tab => {
                tab.classList.remove('skills-active')
            })

            tab.classList.add('skills-active')
        })
    })

/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/*===== Link Active Work =====*/


/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work-button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
}

document.querySelector(".portfolio-popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".work-img").src;
    document.querySelector(".portfolio-popup-subtitle span").innerHTML = portfolioItem.querySelector(".work-title").innerHTML;
    document.querySelector(".portfolio-popup-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}
/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/
