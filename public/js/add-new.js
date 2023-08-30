document.addEventListener('DOMContentLoaded', () => {
  const addNewButton = document.getElementById('addNewButton');
  const addNewModal = document.getElementById('addNewModal');
  const addNewForm = document.querySelector('#saveDestination');
  // console.log('WE ARE IN!!!!!!!');
  // addNewButton.addEventListener('click', () => {
  //   $('#addNewModal').modal('show');
  // });

  addNewForm.addEventListener('click', async (event) => {
    event.preventDefault();
    console.log(' we are in the click event');
    let name = document.getElementById('name').value;
    let location = document.getElementById('location').value;
    let image_source = document.getElementById('image-url').value;
    let description = document.getElementById('description').value;
    console.log(name);

    const response = await fetch('/api/destinations/create-destination', {
      method: 'POST',
      body: JSON.stringify({ name, location, image_source, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const newDestinationId = await response.text();
      // console.log('created');
      document.location.replace('/');
    } else {
      alert('something went wrong');
    }
  });
});
