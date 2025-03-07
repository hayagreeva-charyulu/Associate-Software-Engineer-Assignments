// Array of image URLs
    const images = [
        "https://picsum.photos/id/1015/500/300",
        "https://picsum.photos/id/1025/500/300",
        "https://picsum.photos/id/1035/500/300",
        "https://picsum.photos/id/1045/500/300",
        "https://picsum.photos/id/1055/500/300"
    ];    


let currentIndex = 0; // Track the current image index

// Function to update image source
function updateImage() {
    document.getElementById("slider").src = images[currentIndex];
}

// Next image function
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

// Previous image function
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Initialize slider with the first image
updateImage();
