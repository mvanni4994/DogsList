// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded! 🚀');

  const nameInput = document.getElementById('owner-name');
  const ownerList = document.querySelector('tbody');

  // Create an owner
  const insertOwner = (ownerData) => {
    fetch('/api/owners', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ownerData),
    })
      .then(getOwners)
      .catch((err) => console.error(err));
  };

  // Handle when the owner form is submitted
  const handleOwnerFormSubmit = (e) => {
    e.preventDefault();

    if (!nameInput.value.trim()) {
      alert('Please provide an owner name');
      return;

    }

    insertOwner({
      name: nameInput.value.trim(),
    });
     
    redirect()

  };

  document
    .getElementById('owner-form')
    .addEventListener('submit', handleOwnerFormSubmit);
    
  const returnOwner = document.getElementById('return-owner')
  returnOwner.addEventListener('click', redirect)

  function redirect() {
    window.location.href = '/cms';

  }

  // Event handler for the delete owner button
  const handleDeleteButtonPress = (e) => {
    const { id } = e.target.parentElement.parentElement;
    fetch(`/api/owners/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(getOwners);
  };

  // Create list row for owners
  const createOwnerRow = (ownerData) => {
    const tr = document.createElement('tr');
    tr.setAttribute('data-owner', JSON.stringify(ownerData));

    // Set each owner's ID on the element itself
    tr.id = ownerData.id;

    const td = document.createElement('td');
    td.textContent = ownerData.name;
    tr.appendChild(td);

    // Element to show how many posts
    const lengthTd = document.createElement('td');
    if (ownerData.OwnerPost) {
      lengthTd.textContent = ownerData.OwnerPost.length;
    } else {
      lengthTd.textContent = '0';
    }
    tr.appendChild(lengthTd);

    // "Go to posts" link
    const postsLink = document.createElement('td');
    postsLink.innerHTML = `<td><a href='/ownerposts?owner_id=${ownerData.id}'>Go to Posts</a></td>`;
    tr.appendChild(postsLink);

    // "Create a post" link
    const createLink = document.createElement('td');
    createLink.innerHTML = `<td><a href='/cms?owner_id=${ownerData.id}'>Create a Post</a></td>`;
    tr.appendChild(createLink);

    // "Delete owner" link
    const deleteLink = document.createElement('td');
    deleteLink.innerHTML = `<td><a style='cursor:pointer;color:red' class='delete-owner'>Delete owner</a></td>`;
    deleteLink.addEventListener('click', handleDeleteButtonPress);
    tr.appendChild(deleteLink);

    // Return the table row
    return tr;
  };

  // Helper function to render content when there are no owners
  const renderEmpty = () => {
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', 'alert-danger');
    alertDiv.textContent = 'Must have at least one owner to post';
    alertDiv.id = 'removeMe';
    alertDiv.style.marginRight = '5px';
    return alertDiv;
  };

  const renderOwnerList = (rows) => {
    ownerList.innerHTML = '';

    if (rows.length) {
      if (document.getElementById('removeMe')) {
        document.getElementById('removeMe').remove();
      }
      rows.forEach((row) => ownerList.append(row));
    } else {
      document.querySelector('.owner-container').appendChild(renderEmpty());
    }
  };

  // Grab all the owners
  const getOwners = () => {
    console.log('Get owners is getting called');
    fetch('/api/owners', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('Success in getting owners:', owners);
        const rowsToAdd = [];
        // for (let i = 0; i < data.length; i++) {
          // rowsToAdd.push(createOwnerRow(data[data.length-1]));
        // }

        for (let i = 0; i < data.length; i++) {
          rowsToAdd.push(createOwnerRow(data[i]));
        }
        renderOwnerList(rowsToAdd);
        nameInput.value = '';
      })
      .catch((error) => console.error('Error:', error));
  };

  // Get the list of owners
  getOwners();
});
