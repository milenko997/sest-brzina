(() => {
    const burgerBtn = document.querySelector("#header-burger-menu");
    if (burgerBtn) {
        burgerBtn.addEventListener('click', () => {
            document.getElementById("header-burger-menu").classList.toggle("change");
            document.getElementById("navbar").classList.toggle("show-nav-dropdown");
            document.getElementById("header-top").classList.toggle("show-nav-dropdown");
        });
    }
})();


(() => {
    const imgBtn = document.querySelector("#header-mid-abouth-user-image");
    if (imgBtn) {
        imgBtn.addEventListener('click', () => {
            const elements = document.querySelectorAll("#header-mid-abouth-user-data-text");
            const smallBtn = document.querySelector("#header-mid-abouth-user-data-buttons");
            const bigBtn = document.querySelector("#header-bottom-buttons");
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.toggle("show-nav-dropdown");
            }
            smallBtn.classList.toggle("show-nav-dropdown");
            bigBtn.classList.toggle("show-nav-dropdown")
        });
    }
})()
