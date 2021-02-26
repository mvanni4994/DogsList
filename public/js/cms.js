// Helper functions to show/hide elements
const show = (el) => {
    el.style.display = 'block';
};

// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded! 🚀');

    // Get references to the body, title, form and owner
    const dogBreedInput = document.getElementById('dog-breed');
    const dogNameInput = document.getElementById('dog-name');
    const dogAgeInput = document.getElementById('dog-age');
    const dogSizeInput = document.getElementById('dog-size');
    const boroughInput = document.getElementById('borough');
    const temperamentPetsInput = document.getElementsByClassName('temperament-pets');
    const temperamentChildrenInput = document.getElementsByClassName('temperament-children');
    const vaccinationInput = document.getElementsByClassName('vaccination');
    const ownersContactInput = document.getElementById('owners-contact');
    const bodyInput = document.getElementById('body');

    const cmsForm = document.getElementById('cms');
    const ownerSelect = document.getElementById('owner');

    // Get query parameter
    const url = window.location.search;
    let OwnerPostId;
    let OwnerId;
    let updating = false;

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
                    boroughInput = data.borough
                    temperamentPetsInput = data.temperament_pets;
                    temperamentChildrenInput = data.temperament_children;
                    vaccinationInput = data.vaccinations;
                    bodyInput = data.body;
                    OwnerId = data.OwnerId || data.id;

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
    else if (url.indexOf('?owner_id=') !== -1) {
        OwnerId = url.split('=')[1];
    }

    // Event handler for when the post for is submitted
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Make sure the form isn't empty
        if (!dogNameInput.value.trim() ||
            !dogBreedInput.value.trim() ||
            !ownerSelect.value
        ) {
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
            body: bodyInput.value.trim(),
            OwnerId: ownerSelect.value,
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

        ownerSelect.innerHTML = '';
        console.log('renderOwnerList -> rowsToAdd', rowsToAdd);
        console.log('ownerSelect', ownerSelect);

        rowsToAdd.forEach((row) => ownerSelect.append(row));
        ownerSelect.value = OwnerId;
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
    const fileInput = document.getElementById("dogpic")
    fileInput.onchange = (event) => {
        console.log(event.target.files)
        const reader = new FileReader()
        reader.onload = () => {
            console.log(reader.result)
            fetch("/api/assets/upload", {
                method: "POST",
                body: reader.result
            })
        }
        reader.readAsBinaryString(event.target.files[0])
    }
});