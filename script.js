document.addEventListener("DOMContentLoaded", function() {
    const showDogButton = document.getElementById("showDogButton");
    const showCatButton = document.getElementById("showCatButton");
    const showRabbitButton = document.getElementById("showRabbitButton");
	const showFrogButton = document.getElementById("showFrogButton");
	const showFishButton = document.getElementById("showFishButton");
	const showRandomAnimalButton = document.getElementById("showRandomAnimalButton");
    const dogImageContainer = document.getElementById("dogImageContainer");
    const catImageContainer = document.getElementById("catImageContainer");
	const randomAnimalContainer = document.getElementById("randomAnimalContainer");
    const rabbitImageContainer = document.getElementById("rabbitImageContainer");
  	const frogImageContainer = document.getElementById("frogImageContainer");
	const fishImageContainer = document.getElementById("fishImageContainer");
	const randomAnimalImage = document.getElementById("randomAnimalImage");

	const animalImages = [
		"dog_with_sunglasses.jpg",
		"cool_cat_with_sunglasses.jpg",
		"rabbit.jpg",
		"frog.jpg",
		"fish.jpg"	
	];
	
	showRandomAnimalButton.addEventListener("click", function() {
		const randomIndex = Math.floor(Math.random() * animalImages.length);
		
		randomAnimalImage.src = animalImages[randomIndex];
		
		randomAnimalContainer.style.display = "block";
	});
	
   /* showDogButton.addEventListener("click", function() {
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

    showRabbitButton.addEventListener("click", function() {
        if (rabbitImageContainer.style.display === "none") {
            rabbitImageContainer.style.display = "block";
            showRabbitButton.textContent = "Hide Rabbit";
        } else {
            rabbitImageContainer.style.display = "none";
            showRabbitButton.textContent = "Show Rabbit";
        }
    });
	
    showFrogButton.addEventListener("click", function() {
        if (frogImageContainer.style.display === "none") {
            frogImageContainer.style.display = "block";
            showFrogButton.textContent = "Hide Frog";
        } else {
            frogImageContainer.style.display = "none";
            showFrogButton.textContent = "Show Frog";
        }
    });
	
    showFishButton.addEventListener("click", function() {
        if (fishImageContainer.style.display === "none") {
            fishImageContainer.style.display = "block";
            showFishButton.textContent = "Hide Fish";
        } else {
            fishImageContainer.style.display = "none";
            showFishButton.textContent = "Show Fish";
        }
    });*/
});
