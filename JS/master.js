// Start Search Bar
let search = document.querySelector(".search"),
    searchBar = document.querySelector(".search-bar");

search.onclick = () => {
    searchBar.classList.toggle("active");
};
// End Search Bar

// Start Our Work
const workFilter = document.querySelectorAll(".our-work ul li"),
    boxs = document.querySelectorAll(".our-work .row > div");

function activateButton(button) {
    workFilter.forEach(sec => {
        sec.classList.remove("btn", "btn-danger", "rounded-pill", "link-warning", "hover");
    });

    button.classList.add("btn", "btn-danger", "rounded-pill", "link-warning", "hover");
}

function applyFilter(category) {
    boxs.forEach(box => {
        box.style.display = "none";
    });

    document.querySelectorAll(category).forEach(element => {
        element.style.display = "block";
    });
}

workFilter.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.cat;
        applyFilter(category);
        activateButton(button);
    });
});

// End Our Work

