//! home sidebar start 
const btnOpenSidebar = document.querySelector("#btn-menu");
const sidebar = document.querySelector("#sidebar");
const closeSidebar = document.querySelector("#close-sidebar");

btnOpenSidebar.addEventListener("click", function () {
    sidebar.style.left = "0"
})

closeSidebar.addEventListener("click", function () {
    sidebar.style.left = "-100%"
})
//! home sidebar end 