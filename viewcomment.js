function saveComment(name, comment) {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push({ name, comment, timestamp: new Date() });
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(({ name, comment, timestamp }) => {
        const commentElement = document.createElement('div');
        commentElement.classList.add ('comment');
        commentElement.innerHTML = `<strong>${name}</strong><p>${comment}</p><small class="timestamp">${new Date(timestamp).toLocaleString()}</small>`;
        document.getElementById('comments-container').appendChild(commentElement);
    });
}

document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    saveComment(name, comment);
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
    loadComments(); 
});

window.onload = loadComments;