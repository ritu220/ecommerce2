// Get the Women and Men dropdowns
const womenDropdown = document.getElementById("women-dropdown");
const menDropdown = document.getElementById("men-dropdown");

// Add event listeners to show/hide dropdown contents
womenDropdown.addEventListener("click", function() {
    const dropdownContent = womenDropdown.querySelector(".dropdown-content");
    toggleDropdown(dropdownContent);
});

menDropdown.addEventListener("click", function() {
    const dropdownContent = menDropdown.querySelector(".dropdown-content");
    toggleDropdown(dropdownContent);
});

// Function to toggle the visibility of the dropdown content
function toggleDropdown(dropdownContent) {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

// Close the dropdowns if the user clicks outside of them
window.addEventListener("click", function(event) {
    if (event.target !== womenDropdown && event.target !== menDropdown) {
        const womenDropdownContent = womenDropdown.querySelector(".dropdown-content");
        const menDropdownContent = menDropdown.querySelector(".dropdown-content");
        womenDropdownContent.style.display = "none";
        menDropdownContent.style.display = "none";
    }
});
