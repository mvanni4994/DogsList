DROP DATABASE IF EXISTS rehoming;
CREATE DATABASE rehoming;
USE rehoming;
-- Create the table for owners seeking to rehome pet.
CREATE TABLE dogRehomers (
  id int AUTO_INCREMENT NOT NULL,
  dog_name varchar (100) NOT NULL, 
  dog_breed varchar (100) NOT NULL,
  dog_size varchar(100) NOT NULL,
  dog_age varchar (100) NOT NULL, 
  borough varchar(100) NOT NULL, 
  temperament_pets boolean default false,
  temperament_children boolean default false ,
  vaccinations boolean default false,
  owners_contact varchar (100) NOT NULL, 
  PRIMARY KEY(id)
);
​
-- Create the table for people seeking a pet.
CREATE TABLE dogSeeker (
  id int AUTO_INCREMENT NOT NULL,
  dog_breed varchar (100) NOT NULL,
  dog_size varchar(100) NOT NULL,
  dog_age varchar (100) NOT NULL, 
  borough varchar(100) NOT NULL, 
  user_contact varchar (100) NOT NULL, 
  PRIMARY KEY(id)
);
​
-- Insert a set of records.
INSERT INTO rehomers (dog_name, dog_breed, dog_size, dog_age, borough, temperament_pets, temperament_children, vaccinations, email) VALUES ("Jerry", "puppy", "Brooklyn", "Great with Pets", "Great with Children", "Puppy first shots", "mariahrivera6@aol.com");
​
​
SELECT * FROM dogRehomer;