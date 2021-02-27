let OwnerPost;
const postContainer = document.querySelector('.post-container');

const url = window.location.search;

let PostId = url.split('=')[1];

  getPost(PostId);
  console.log(PostId)
  function getPost(id) {
    PostId = id || '';
    // if (PostId) {
    //     PostID = 
    // //   PostId = `/?owners_id=${OwnerId}`;
    // 
    fetch(`/api/ownerposts${PostId}`, {
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
}

  const initializeRows = () => {
    postContainer.innerHTML = '';

    postContainer.append(newOwnerPostCard);
  };

  const createNewRow = (ownerpost) => {
    const newOwnerPostCard = document.createElement('div');
    newOwnerPostCard.classList.add('card');

    const newOwnerPostCardHeading = document.createElement('div');
    newOwnerPostCardHeading.classList.add('card-header');

    const newOwnerPostDogName = document.createElement('h2');
    const newOwnerPostDate = document.createElement('small');
    const newOwnerPostOwner = document.createElement('h5');

    const newOwnerPostCardBody = document.createElement('div');
    newOwnerPostCardBody.classList.add('card-body');

const newOwnerPostBreed = document.createElement('p');
const newOwnerPostAge = document.createElement('p');
const newOwnerPostSize = document.createElement('p');
const newOwnerPostBorough = document.createElement('p');
const newOwnerPostPets = document.createElement('p');
const newOwnerPostChildren = document.createElement('p');
const newOwnerPostVaccination = document.createElement('p');
const newOwnerPostContact = document.createElement('p');
const newOwnerPostBody = document.createElement('p');


newOwnerPostDogName.textContent = `${ownerpost.dog_name} `;
newOwnerPostBreed.textContent = `Breed: ${ownerpost.dog_breed}`;
newOwnerPostAge.textContent = `Age: ${ownerpost.dog_age}`;
newOwnerPostSize.textContent = `Size: ${ownerpost.dog_size}`;
newOwnerPostBorough.textContent = `Location: ${ownerpost.borough}`;
newOwnerPostPets.textContent = `Good with pets: ${ownerpost.temperament_pets}`;
newOwnerPostChildren.textContent = `Good with children: ${ownerpost.temperament_children}`;
newOwnerPostVaccination.textContent = `Vaccinated: ${ownerpost.vaccination}`;
newOwnerPostContact.textContent = `Contact: ${ownerpost.owners_contact}`;

newOwnerPostBody.textContent = ownerpost.body;
newOwnerPostDate.textContent = ` (${formattedDate})`;
newOwnerPostDogName.append(newOwnerPostDate);
// newOwnerPostCardHeading.append(deleteBtn);
// newOwnerPostCardHeading.append(editButton);
newOwnerPostCardHeading.append(newOwnerPostDogName);
newOwnerPostCardHeading.append(newOwnerPostOwner);

//append here
newOwnerPostCardBody.append(newOwnerPostBreed);

newOwnerPostCardBody.append(newOwnerPostAge);
newOwnerPostCardBody.append(newOwnerPostSize);
newOwnerPostCardBody.append(newOwnerPostBorough);
newOwnerPostCardBody.append(newOwnerPostPets);
newOwnerPostCardBody.append(newOwnerPostChildren);
newOwnerPostCardBody.append(newOwnerPostVaccination);
newOwnerPostCardBody.append(newOwnerPostContact);
newOwnerPostCardBody.append(newOwnerPostBody);
newOwnerPostCard.append(newOwnerPostCardHeading);
newOwnerPostCard.append(newOwnerPostCardBody);
// newOwnerPostCard.setAttribute('data-post', JSON.stringify(ownerpost));

const dogMap = document.createElement('div');
dogMap.setAttribute('id', 'map');
dogMap.setAttribute('style', 'height: 300px')
dogMap.setAttribute('style', 'background-color: blue')
postContainer.append(dogMap)


console.log(dogMap)
console.log(newOwnerPostCard)
  }