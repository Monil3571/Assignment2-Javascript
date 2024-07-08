// I have defined a function which will run as soon as the dom is loded
document.addEventListener("DOMContentLoaded", function() {

    // First of all I have selected all the image elements in the form of an array called thumbnails 
	const thumbnails = document.querySelectorAll("#thumbnails img");

    // Then i have seleted the featured-image element as we will change the content of it when the user clicks any other thumbnail
	const featuredImage = document.getElementById("featured-image");

    // In the figcaption we simply select the figcaption element as we will also change this dynamicaly.
	const figcaption = document.querySelector("figcaption");

    // Now, we will loop through each element of our thumbnails array
	thumbnails.forEach(thumbnail => {

        // For each element we have added an event listener which will run on click.
		thumbnail.addEventListener("click", function() {

            // In the event litener, we will first get the url of the large version of the current thumbnail image.
            // I have done this by using the custom attribute large which we defined in the html using the data- prefix.
            const largeSrc = this.dataset.large; // This will return "images/flowers-color-large.jpg"
			const title = this.dataset.title; // This will return "color flowers"

            // Next, we need to set the url of the featured image to that of the clicked image
            // and also change the alt text along with the fig caption.
			featuredImage.src = largeSrc;
			featuredImage.alt = title;
			figcaption.textContent = title;

            // Lastly, the following lines will simply help us to highlight the selected thumbnail 
            // by displaying it in color while the others are displayed in black and white color.

            // We have to remove the active class from all the thumbnails and then add it to the currently selected one.
            thumbnails.forEach(img => img.classList.remove("active"));
			this.classList.add("active");
		});
	});
});
