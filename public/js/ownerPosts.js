// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded! 🚀');

  const blogContainer = document.querySelector('.blog-container');

  // Variable to hold our ownerPosts
  let OwnerPost;

  const getOwnerPosts = (owner) => {
    OwnerId = owner || '';

    if (OwnerId) {
      OwnerId = `/?owners_id=${OwnerId}`;
    }

    fetch(`/api/ownerposts${OwnerId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        OwnerPost = data;
        console.log('Success in getting ownerPosts:', data);
        if (!data || !data.length) {
          displayEmpty(owner);
        } else {
          initializeRows();
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  // Get a blog post from a specific Owner
  const url = window.location.search;
  let OwnerId;
  if (url.indexOf('?owner_id=') !== -1) {
    OwnerId = url.split('=')[1];
    getOwnerPosts(OwnerId);
  } else {
    console.log("here is ownerid" + OwnerId);

    getOwnerPosts();
  }

  // Front end call to DELETE a post
  const deleteOwnerPost = (id) => {
    console.log(id)
    fetch(`/api/ownerposts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(getOwnerPosts());
  };

  // Create HTML rows for the blog container
  const initializeRows = () => {
    blogContainer.innerHTML = '';
    const ownerPostsToAdd = [];

    OwnerPost.forEach((ownerpost) => ownerPostsToAdd.push(createNewRow(ownerpost)));
    ownerPostsToAdd.forEach((ownerpost) => blogContainer.append(ownerpost));
  };


  const createNewRow = (ownerpost) => {
    console.log('createNewRow -> ownerpost', ownerpost);

    const formattedDate = new Date(ownerpost.createdAt).toLocaleDateString();
    const cardID = ownerpost.id

    const newOwnerPostCard = document.createElement('div');
    newOwnerPostCard.classList.add('card');
    newOwnerPostCard.addEventListener('click', function(event) {
      event.preventDefault();
      console.log(event)
      console.log(cardID)
      window.location.href = `/post/=${cardID}`;
    })
    newOwnerPostCard.style.width = '120%'
    newOwnerPostCard.style.height = "450px"
    newOwnerPostCard.style.padding = "20px"

    const newOwnerPostCardHeading = document.createElement('div');
    newOwnerPostCardHeading.classList.add('card-header');
    newOwnerPostCardHeading.setAttribute('style', 'font-family: "Acme", sans-serif; color: #084a7a;')

    // Delete button
    // const deleteBtn = document.createElement('button');
    // deleteBtn.textContent = 'x';
    // deleteBtn.classList.add('delete', 'btn', 'btn-danger');
    // deleteBtn.addEventListener('click', handleOwnerPostDelete);

    // // Edit button
    // const editButton = document.createElement('button');
    // editButton.textContent = 'EDIT';
    // editButton.classList.add('edit', 'btn', 'btn-info');
    // editButton.addEventListener('click', handleOwnerPostEdit);

    const newOwnerPostDogName = document.createElement('h2');
    const newOwnerPostDate = document.createElement('h7');
    // const newOwnerPostOwner = document.createElement('h5');

    // newOwnerPostOwner.textContent = `Written by: ${ownerpost.owner_name}`;
    // newOwnerPostOwner.style.float = 'right';
    // newOwnerPostOwner.style.color = 'green';
    // newOwnerPostOwner.style.marginTop = '-10px';

    const newOwnerPostCardBody = document.createElement('div');
    newOwnerPostCardBody.classList.add('card-body');
    newOwnerPostCardBody.setAttribute('style', 'font-family: "Acme", sans-serif; color: #084a7a; font-size: 20px')


    const newOwnerPostBreed = document.createElement('p');
    const newOwnerPostAge = document.createElement('p');
    const newOwnerPostSize = document.createElement('p');
    const newOwnerPostBorough = document.createElement('p');
    const newOwnerPostPets = document.createElement('p');
    const newOwnerPostChildren = document.createElement('p');
    const newOwnerPostVaccination = document.createElement('p');
    const newOwnerPostContact = document.createElement('p');
    const newOwnerPostBody = document.createElement('p');
    const newOwnerPostPhoto = document.createElement('img')

    newOwnerPostPhoto.setAttribute('src', `${ownerpost.dog_image}`)
    newOwnerPostPhoto.setAttribute('style', 'width: 300px; height: 300px')
    newOwnerPostPhoto.style.float = 'left'



    newOwnerPostDogName.textContent = `${ownerpost.dog_name} `;
     newOwnerPostBreed.textContent = `Breed: ${ownerpost.dog_breed}`;
     newOwnerPostAge.textContent = `Age: ${ownerpost.dog_age}`;
     newOwnerPostSize.textContent = `Size: ${ownerpost.dog_size}`;
     newOwnerPostBorough.textContent = `Location: ${ownerpost.borough}`;
     newOwnerPostPets.textContent = `Good with pets: ${ownerpost.temperament_pets}`;
     newOwnerPostChildren.textContent = `Good with children: ${ownerpost.temperament_children}`;
     if (ownerpost.vaccinations) {
     newOwnerPostVaccination.textContent = `Vaccinated: Yes`;
     } else {
      newOwnerPostVaccination.textContent = `Vaccinated: No`;
     }
     newOwnerPostContact.textContent = `Contact: ${ownerpost.owners_contact}`;

    newOwnerPostBody.textContent = ownerpost.body;
    newOwnerPostDate.textContent = `Posted on ${formattedDate} by ${ownerpost.owner_name}`;
    newOwnerPostCardBody.append(newOwnerPostPhoto);

    newOwnerPostCardBody.append(newOwnerPostDate);
    // newOwnerPostCardHeading.append(deleteBtn);
    // newOwnerPostCardHeading.append(editButton);
    newOwnerPostCardHeading.append(newOwnerPostDogName);
    // newOwnerPostCardHeading.append(newOwnerPostOwner);

    //append here
    newOwnerPostCardBody.append(newOwnerPostBreed);

    newOwnerPostCardBody.append(newOwnerPostAge);
    // newOwnerPostCardBody.append(newOwnerPostSize);
    newOwnerPostCardBody.append(newOwnerPostBorough);

    // newOwnerPostCardBody.append(newOwnerPostPets);
    // newOwnerPostCardBody.append(newOwnerPostChildren);
    // newOwnerPostCardBody.append(newOwnerPostVaccination);
    // newOwnerPostCardBody.append(newOwnerPostContact);
    // newOwnerPostCardBody.append(newOwnerPostBody);
    newOwnerPostCard.append(newOwnerPostCardHeading);
    newOwnerPostCard.append(newOwnerPostCardBody);
    newOwnerPostCard.setAttribute('data-post', JSON.stringify(ownerpost));

    console.log('createNewRow -> newOwnerPostCard', newOwnerPostCard);
    return newOwnerPostCard;
  };

  // Helper function to display something when there are no ownerPosts
  const displayEmpty = (id) => {
    const query = window.location.search;
    let partial = '';
    if (id) {
      partial = ` for Owner #${id}`;
    }

    blogContainer.innerHTML = '';
    const messageH2 = document.createElement('h2');
    messageH2.style.textAlign = 'center';
    messageH2.style.marginTop = '50px';
    messageH2.innerHTML = `No ownerPosts yet${partial}, navigate <a href='/owners'>here</a> in order to get started.`;
    blogContainer.append(messageH2);
  };

  // Handle when we click the delete post button
  const handleOwnerPostDelete = (e) => {
    const currentOwnerPost = JSON.parse(
      e.target.parentElement.parentElement.dataset.post
    );

    deleteOwnerPost(currentOwnerPost.id);
  };

  // Handle when we click the edit post button
  const handleOwnerPostEdit = (e) => {
    const currentOwnerPost = JSON.parse(
      e.target.parentElement.parentElement.dataset.post
    );

    window.location.href = `/cms?ownerposts_id=${currentOwnerPost.id}`;
  };
});
