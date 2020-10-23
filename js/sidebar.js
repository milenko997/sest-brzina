(() => {
    const sidebarBtn = document.querySelector("#side_bar-show-padding");
    if (sidebarBtn) {
        sidebarBtn.addEventListener('click', () => {
            document.getElementById("side_bar-content").classList.toggle("show-hide-sidebar");
        });
    }
})();

(() => {
    const rotateBtn = document.querySelector("#side_bar-show-padding");
    if (rotateBtn) {
        rotateBtn.addEventListener('click', () => {
            document.getElementById("show-side-bar-icon").classList.toggle("rotate");
        });
    }
})()
