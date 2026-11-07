const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('p');

document.querySelectorAll('[data-lightbox]').forEach((button) => {
    button.addEventListener('click', () => {
        const img = button.querySelector('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = button.dataset.title;
        lightbox.showModal();
    });
});

lightbox.addEventListener('click', () => lightbox.close());

document.getElementById('year').textContent = new Date().getFullYear();