(() => {
    const dropdownBtn = document.querySelector("#dropbtn");
    if (dropdownBtn) {
        dropdownBtn.addEventListener('click', () => {
            document.getElementById("dropdownBulbs").classList.toggle("show");
        });
    }
})();

(() => {
    const dropdownBtn2 = document.querySelector("#dropbtn2");
    if (dropdownBtn2) {
        dropdownBtn2.addEventListener('click', () => {
            document.getElementById("dropdownRatkapne").classList.toggle("show");
        });
    }
})()
