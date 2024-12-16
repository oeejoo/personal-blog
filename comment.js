document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = `<strong>${name}</strong><p>${comment}</p>`;

    document.getElementById('comment-container').appendChild(commentElement);

    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
});