const toggle = document.querySelector("#theme-toggle");

toggle?.addEventListener("click", () => {

    const html = document.documentElement;

    const dark =
        html.dataset.theme === "dark";

    html.dataset.theme =
        dark ? "light" : "dark";

});