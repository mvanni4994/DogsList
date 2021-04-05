# DogsList	
![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)

## INTRODUCTION

This project was completed for the Columbia University Engineering Full-Stack Coding Boot Camp. Our mission was to conceive and execute a design that solves a real-world problem.

# Background

After COVID hit and quarantining began in March 2020, many people and families decided it was the right time to adopt or buy a dog. Working from home made it possible for people to clean up after puppies, take dogs out for regular walks, and keep up with feeding, grooming, and veterinary care. The kids were home from school and desperate for the kind of entertainment and distraction that a new pet provides.

For some new pet owners, however, circumstances changed. For starters, the kids are back in school, and having a pet is no longer a novelty. Some people lost their jobs during the shutdown, and caring for a dog proved too expensive. Those who still have jobs are beginning to return to the office, and they don't like having to pen up Baxter or Buster or Ruger in a kennel 10 hours a day. And then there are those who died during the pandemic. It's up to their families to find new homes for the pets left behind.

# Solution

We've designed a database app that uses the power of Google Maps to let New Yorkers rehome their covidogs without ever having to place them in a shelter. Neighbors who need to rehome a dog can list the dog and upload its photo to the app, where neighbors looking for a covidog can browse photos, search, and contact the current pet owner to make arrangements for pet handover and pickup. 

# Project Location
[Repo](https://github.com/lauraaupert/DogsList)

[Heroku](https://afternoon-gorge-92220.herokuapp.com)

# USER STORY (SEEKER)

*AS  A* pale, anemic, bored, lonely, slightly doughy New Yorker
*I WANT* a fluffy companion (the cuter, the better)
*SO I* won’t have to stay holed up like a rat in my dank, depressing apartment
*BECAUSE* doggoneit, people like me!

# USER STORY (REHOMER)

*AS A* stressed-out, impatient, heartless New York City a-hole
*I WANT* to get rid of this f\*ing animal, already
*SO I* won’t have to buy dog food (have you seen how much that sh\*t costs?), go for f\*ing walks (who does that?), and pick up its f\*ing poop
*BECAUSE* I’m so over the whole “pet” thing

![image](https://user-images.githubusercontent.com/73617474/109719713-0d560d00-7b77-11eb-8f78-946d3d62c77b.png)

# FEATURES

## Find a Dog

![image](https://user-images.githubusercontent.com/73617474/109714821-de3c9d00-7b70-11eb-8827-76edfff2aa1f.png)


A dog seeker can browse owner posts to find a pet that's a good fit--probably not this one.

## Rehome a Dog

![image](https://user-images.githubusercontent.com/73617474/109715076-2e1b6400-7b71-11eb-8a2b-6406d0ffe948.png)

When dog owners surrender their pets, they use this form to give DogsList as much information as possible about the animal. This detailed info about size,  helps dog seekers find the right pet.

## Upload a Photo

![Jeff the rat dog](./DogsList/views/assets/Jeff-the-rat-dog.jpg]

Owners upload pictures of their dogs, and pet seekers browse the listings to see if a photo catches their eye.

# PROJECT REQUIREMENTS

## Technical Criteria

Application complies with project specifications:

* Uses a Node and Express server
* Uses Handlebars.js as the template engine
* Is backed by a MySQL database with a Sequelize ORM
* Uses GET and POST routes to retrieve and add new data, respectively, from Google Maps
* Is deployed using Heroku (with data)
* Uses at least one new library, package, or technology that wasn't discussed in class: AWS S3 cloud storage
* Has a front end/UI
* Has a folder structure that fits the model-view-controller (MVC) paradigm
* Observes coding best practices (indentation, scoping, naming)
* Protects API keys in Node with environment variables

## Repository Requirements

Project repo meets the following requirements:

- Has a unique name: Dogslist
- Follows best practices for file structure and naming conventions
- Contains multiple descriptive commit messages.


# User Experience Standards

User experience meets the following guidelines:

- Offers an intuitive, easy-to-navigate user experience.
- Has a cool interface.

# CONTRIBUTIONS

## Laura Aupert
- Chose the Google Maps API [!images/loremipsum.jpg]
- Repurposed blog code for dog pages and deployed to Heroku
- Linked all the files and routes to the database
- Backend everything, TA, debugger, and first responder

## Mariah Rivera
- Built four Sequelize database models ("Rehomers" and "Seekers") 
- Executed Google Maps functionality
- Designed landing page image

## Nicholas Jazgunovich
- Supplied and designed Terms of Use
- Executed AWS S3 cloud storage

## Matt Vanni
- Wireframed DogsList page
- Designed frontend using Handlebars
- Worked doggedly on both frontend and backend
- Helped others debug

## Melissa Kinsey
- Proposed app concept
- Wrote README
- Wrote and designed presentation


# IMAGE CREDITS

- Images in presentation are modified from Adobe Stock: IRStone, Qualit Design, K3Star, and macrovector.


# LICENSES

## Apache
Copyright [2021] [DogsList]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Google Maps
Copyright 2021 Google Inc. All rights reserved. 

Licensed under the Apache License, Version 2.0 (the "License"). Listen up, people! This is official. You may not use this file except in compliance with the License. 
You may obtain a copy of the License at [Apache.org](     https://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Google Fonts
The Acme font, designed by Juan Pablo del Peral (Huerta Tipográfica), is used courtesy of Google Fonts and licensed under a [Creative Commons Attribution 4.0 License](https://creativecommons.org/about/cclicenses).
