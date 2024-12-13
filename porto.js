function scrollPortfolio(direction) {
    const container = document.getElementById('portfolio');
    const scrollAmount = 300; // Jarak scrolling

    if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}