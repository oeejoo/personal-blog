function showPopup(img) {
    const popupContainer = document.getElementById("popup-container");
    const popupImage = document.getElementById("popup-image");

    popupImage.src = img.src;
    popupContainer.classList.remove("popup-hidden");
    popupContainer.classList.add("popup-visible");
}

function closePopup() {
    const popupContainer = document.getElementById("popup-container");

    popupContainer.classList.remove("popup-visible");
    popupContainer.classList.add("popup-hidden");
}