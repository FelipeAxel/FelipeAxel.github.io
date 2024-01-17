const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement


function chageTheme(){
    const currentTHeme= rootHtml.getAttribute("data-theme");

    (currentTHeme === "dark") ? rootHtml.setAttribute("data-theme", "light")
    : rootHtml.setAttribute("data-theme", "dark")

    toggleTheme.classList.toggle("bi-bi-brightness-high")
    toggleTheme.classList.toggle("bi-moon-stars")

}

toggleTheme.addEventListener("click", chageTheme);