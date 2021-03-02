// Helper functions to show/hide elements
const show = (el) => {
  el.style.display = 'block';
};

// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded! 🚀');
  let filename;
  document.querySelector(".dogimage").addEventListener("change", function(event) {
    console.log("working")
    const files = document.querySelector(".dogimage").files
    const formData = new FormData()
    formData.append("dogpictures", files[0])
    filename = files[0].name
    // fetch("http://localhost:8080/api/assets/upload", {
      fetch("https://afternoon-gorge-92220.herokuapp.com/api/assets/upload", {
        method: "POST",
        body: formData
    })
})

  // Get references to the body, title, form and owner
  const dogBreedInput = document.getElementById('dog-breed');
  const dogNameInput = document.getElementById('dog-name');
  const dogAgeInput = document.getElementById('dog-age');
  const dogSizeInput = document.getElementById('dog-size');
  const boroughInput = document.getElementById('borough');
  const temperamentPetsInput = document.getElementById('temperament-pets');
  const temperamentChildrenInput = document.getElementById('temperament-children');
  const vaccinationInput = document.getElementById('vaccination');
  const ownersContactInput = document.getElementById('owners-contact');
  const ownersAddressInput = document.getElementById('owners-address');
  const bodyInput = document.getElementById('body');
  const cmsForm = document.getElementById('cms');
  const ownerName = document.getElementById('owner');

  // Get query parameter
  const url = window.location.search;
  let OwnerPostId;
  let OwnerName;
  let updating = false;
console.log(vaccinationInput)

console.log(ownerName.value)
  // Get post data for editing/adding
  const getOwnerPostData = (id, type) => {
    const queryUrl =
      type === 'post' ? `/api/ownerposts/${id}` : `/api/owners/${id}`;

    fetch(queryUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log('Success in getting post:', data);

          // Populate the form for editing
          dogNameInput.value = data.dog_name;
          dogBreedInput.value = data.dog_breed;
          dogAgeInput.value = data.dog_age;
          dogSizeInput.value = data.dog_size;
          boroughInput.value = data.borough;
          temperamentPetsInput.value = data.temperament_pets;
          temperamentChildrenInput.value = data.temperament_children;
          vaccinationInput.value = data.vaccinations;
          ownersContactInput.value = data.owners_contact;
          bodyInput.value = data.body;
          OwnerName.value = data.OwnerName || data.name;


          // We are updating
          updating = true;
        }
      })
      .catch((err) => console.error(err));
  };

  // If post exists, grab the content of the post
  if (url.indexOf('?ownerposts_id=') !== -1) {
    OwnerPostId = url.split('=')[1];
    getOwnerPostData(OwnerPostId, 'post');
  }
  // Otherwise if we have an owner_id in our url, preset the owner select box to be our Owner
  else if (url.indexOf('?owner_name=') !== -1) {
    OwnerName = url.split('=')[1];
  }

  // Event handler for when the post for is submitted
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Make sure the form isn't empty
    if (
      !dogNameInput.value.trim() ||
      !dogBreedInput.value.trim() ||
      !dogAgeInput.value.trim() ||
      !dogSizeInput.value.trim() ||
      !ownersContactInput.value.trim() ||
      !ownerName.value.trim() ||
      !bodyInput.value.trim() 
      // !ownerSelect.value.trim()
    ) {
      alert('Please make sure to fill out all the fields');

      return;
    }

    // Object that will be sent to the db
    const newOwnerPost = {
      dog_name: dogNameInput.value.trim(),
      dog_breed: dogBreedInput.value.trim(),
      dog_age: dogAgeInput.value.trim(),
      dog_size: dogSizeInput.value.trim(),
      borough: boroughInput.value.trim(),
      temperament_pets: temperamentPetsInput.value,
      temperament_children: temperamentChildrenInput.value,
      vaccinations: vaccinationInput.value,
      owners_contact: ownersContactInput.value.trim(),
      owners_address: ownersAddressInput.value.trim(),
      owner_name: ownerName.value.trim(),

      body: bodyInput.value.trim(),
      dog_image: `https://dogslistproject2.s3.amazonaws.com/${filename}`,
      
    };

    // Update a post if flag is true, otherwise submit a new one
    if (updating) {
      newOwnerPost.id = OwnerPostId;
      updateOwnerPost(newOwnerPost);
    } else {
      submitOwnerPost(newOwnerPost);
    }
  };

  // Attach an event listener to the form on submit
  cmsForm.addEventListener('submit', handleFormSubmit);

  // Submits new post then redirects
  const submitOwnerPost = (ownerpost) => {
    fetch('/api/ownerposts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ownerpost),
    })
      .then(() => {
        window.location.href = '/ownerposts';
      })
      .catch((err) => console.error(err));
  };

  // Render a list of owners or redirect if no owners
  const renderOwnerList = (data) => {
    console.log('renderOwnerList -> data', data);
    if (!data.length) {
      window.location.href = '/owners';
    }
    if (document.querySelector('.hidden')) {
      show(document.querySelector('.hidden'));
    }

    const rowsToAdd = [];

    data.forEach((owner) => rowsToAdd.push(createOwnerRow(owner)));

    // ownerSelect.innerHTML = '';
    console.log('renderOwnerList -> rowsToAdd', rowsToAdd);
    console.log('ownerName', ownerName);

    rowsToAdd.forEach((row) => ownerName.append(row));
    // ownerSelect.value = OwnerName;
  };

  // Build owner dropdown
  const createOwnerRow = ({ id, name }) => {
    const listOption = document.createElement('option');
    listOption.value = id;
    listOption.textContent = name;
    return listOption;
  };

  // A function to get Owners and then call the render function
  const getOwners = () => {
    fetch('api/owners', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => renderOwnerList(data))
      .catch((err) => console.error(err));
  };

  // Get the owner, and their posts
  getOwners();

  // Update a post then redirect to blog
  const updateOwnerPost = (ownerpost) => {
    fetch('/api/ownerposts', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(ownerpost),
    })
      .then(() => {
        window.location.href = '/ownerposts';
      })
      .catch((err) => console.error(err));
  };
});