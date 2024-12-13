document.addEventListener('scroll', function () {
    const btn = document.getElementById('back-to-top');
    if (window.scrollY > 200) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
});
document.getElementById('back-to-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});