document.addEventListener('DOMContentLoaded', () => {
    const addNewButton = document.getElementById('addNewButton');
    const addNewModal = document.getElementById('addNewModal');
    const addNewForm = document.querySelector('#addNewModal form');
 
    addNewButton.addEventListener('click', () => {
      $('#addNewModal').modal('show');
    });
 
    addNewForm.addEventListener('submit', async (event) => {
      event.preventDefault();
   
      const formData = new FormData(event.target);
      const response = await fetch('/create-destination', {
        method: 'POST',
        body: formData
      });
   
      if (response.ok) {
        const newDestinationId = await response.text(); 
        window.location.href = `/destination/${newDestinationId}`;
      }
    });
  });
 
