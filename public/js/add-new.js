document.addEventListener('DOMContentLoaded', () => {
  // const addNewButton = document.getElementById('addNewButton');
  // const addNewModal = document.getElementById('addNewModal');
  const addNewForm = document.querySelector('#addNewModal form');

  // addNewButton.addEventListener('click', () => {
  //   $('#addNewModal').modal('show');
  // });

  addNewForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const response = await fetch('/api/destinations/create-destination', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const destination = await response.json();
      window.location.href = `/api/destinations/${destination.id}`;
    }
  });
});
