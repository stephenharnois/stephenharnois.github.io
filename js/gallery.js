function activateGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage  = document.querySelector("#gallery-photo img");
    let currentClass = "current";

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", () => {
            let newImageSrc = thumbnail.dataset.largeVersion;
            let newImageTitle = thumbnail.dataset.title;
            let newImageDescription = thumbnail.dataset.description;
            let newImagesAlt = thumbnail.alt;

            mainImage.setAttribute("alt", newImagesAlt);
            mainImage.setAttribute("src", newImageSrc);

            document.querySelector(".current").classList.remove(currentClass);
            thumbnail.parentNode.classList.add(currentClass);

            let galleryInfo = document.querySelector("#gallery-info");
            let title = galleryInfo.querySelector(".title");
            let description = galleryInfo.querySelector(".description");

            title.innerHTML = newImageTitle;
            description.innerHTML = newImageDescription;
        })
    })
}