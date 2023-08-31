const addNewComment = async (event) => {
    event.preventDefault();
    const comment = document.getElementById('comment-textarea').value;
    const destinationId = window.location.pathname.split('/').pop();
    const reqBody = {
        comment,
        destinationId,
    };

    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
      location.reload();
    } else {
      alert('Failed to add comment.');
    }
}

document.getElementById('comment-form').addEventListener('submit', addNewComment)
