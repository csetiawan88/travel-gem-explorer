    document.getElementById('addNewButton').addEventListener('click', () => {
        $('#addNewModal').modal('show');
    });

    document.querySelector('#addNewModal form').addEventListener('submit', () => {
        $('#addNewModal').modal('hide');
    });

