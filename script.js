document.addEventListener("DOMContentLoaded", function() {
    const showDogButton = document.getElementById("showDogButton");
    const showCatButton = document.getElementById("showCatButton");
    const dogImageContainer = document.getElementById("dogImageContainer");
    const catImageContainer = document.getElementById("catImageContainer");

    showDogButton.addEventListener("click", function() {
        if (dogImageContainer.style.display === "none") {
            dogImageContainer.style.display = "block";
            showDogButton.textContent = "Hide Dog";
        } else {
            dogImageContainer.style.display = "none";
            showDogButton.textContent = "Show Dog";
        }
    });

    showCatButton.addEventListener("click", function() {
        if (catImageContainer.style.display === "none") {
            catImageContainer.style.display = "block";
            showCatButton.textContent = "Hide Cat";
        } else {
            catImageContainer.style.display = "none";
            showCatButton.textContent = "Show Cat";
        }
    });
});
