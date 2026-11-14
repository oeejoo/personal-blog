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

// 3D model: the file is only downloaded after the visitor clicks the button
const viewer = document.querySelector('model-viewer');
const loadButton = document.getElementById('load-model');
const poster = document.querySelector('.model-poster');
const hint = document.querySelector('.hint');

if (viewer && loadButton) {
    const defaultLabel = loadButton.textContent;

    loadButton.addEventListener('click', () => {
        loadButton.disabled = true;
        loadButton.textContent = 'Loading...';
        viewer.src = viewer.dataset.src;
    });

    viewer.addEventListener('progress', (event) => {
        const percent = Math.round(event.detail.totalProgress * 100);
        loadButton.textContent = percent < 100 ? `Loading ${percent}%` : 'Preparing model...';
    });

    viewer.addEventListener('load', () => {
        loadButton.hidden = true;
        poster.hidden = true;
        hint.hidden = false;
    });

    viewer.addEventListener('error', () => {
        viewer.removeAttribute('src');
        loadButton.disabled = false;
        loadButton.textContent = `Could not load. ${defaultLabel}`;
    });
}