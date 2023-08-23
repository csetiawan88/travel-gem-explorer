# Application Idea: Travel Gem Explorer

## Description:

Build a web application where users can explore and learn about popular tourist destinations around NSW. Users can view destination descriptions, leave comments, and engage in discussions about the places they are interested in visiting. Users can also add their own destinations

# Features:

<li> User Authentication:
User registration and login functionality using passport.js for authentication.
Secure storage of user data.
<li>Destination Showcase:
Display a list of popular tourist destinations with images, titles, and brief descriptions.
Allow users to click on a destination to view its full details.
<li>Destination Details:
Show detailed information about a selected destination, including description, location, opening hours, contact info, attractions, and recommended activities.
<li>Commenting:
Enable users to leave comments on each destination's page.
Display comments under each destination for users to read and engage in discussions.
<li>User Profile and Activity:
Allow users to view their profiles and see their recent commenting activity.
Display links to destinations for which the user has left comments.
<li>Database Interaction:
Use Sequelize to define and interact with database models (e.g., User, Destination, Comment).
Set up associations between users, destinations, and comments.
<li>Views and Templating:
Use Handlebars.js templates to render dynamic HTML for login, registration, destination list, destination details, and user profile.
<li>Technology Stack:
Backend: Node.js, Express.js
Frontend: HTML, CSS, Handlebars.js (templating), JavaScript
Database: MySQL, Sequelize (ORM)
Authentication: Passport.js
<li>MVC Structure:
Models: Define Sequelize models for User, Destination, and Comment.
Views: Use Handlebars.js templates to render UI.
Controllers: Implement controllers for user authentication, destination showcase, commenting, and interactions with the database.

## User Story:

As a travel enthusiast, I want a platform where I can explore popular tourist destinations and connect with other travelers who share similar interests. I need an application that provides detailed information about these destinations, allowing me to read comments from other users and engage in discussions about travel experiences. Having a personalized profile where I can keep track of the destinations I've commented on would enhance my engagement with the platform.
This user story highlights the platform's focus on providing users with insights into popular tourist destinations and fostering interactions among travelers. Users can learn about destinations, share their thoughts, and exchange valuable travel tips with others who are passionate about exploring NSW.

# TASKS

<li>  Set Up GitHub:
<li> Create a new repository on GitHub for your project.
<li> Clone the repository to your local machine using
<li> Set Up Basic MVC Structure:
<li> Create the main project directory and navigate into it.
<li> Set up separate folders for your MVC components: models, views, controllers, public (for CSS, images, etc.).
<li> Create a main entry file (e.g., app.js or server.js) to start your application.
<li> Add Views:
Inside the views folder, create Handlebars.js templates for different pages (e.g., index.hbs, destination.hbs, profile.hbs).
Set up the base layout template that other templates will extend.
<li> Add Models:
In the models folder, define your Sequelize models for User, Destination, and Comment.
Specify model attributes, associations, and validation rules.
<li> Add Seed Data:
Create a separate file (e.g., seed.js) to populate your database with initial data.
<li> Use Sequelize queries to create sample users, destinations, and comments.
<li> Set Up Controllers:
Inside the controllers folder, create individual files for each controller (e.g., userController.js, destinationController.js, commentController.js).
Define functions to handle different routes and actions in each controller.
<li> Implement Routes:
In each controller file, import the required models and set up routes using Express.js.
Define route handlers to render appropriate views, retrieve data from the database, and interact with models.
<li> Integrate Views with Controllers:
Inside the controller route handlers, use res.render() to render the appropriate Handlebars.js view.
Pass data from the database to the views for dynamic content.
<li> Start Server:
In your main entry file (app.js or server.js), import necessary packages (Express, Sequelize, Passport, etc.).
Configure middleware (body parser, sessions, Passport).
Set up routes by importing and using your controller functions.
Start the server using app.listen().
<li> Testing:
Test your application locally to ensure that views are rendering correctly and database operations are working as expected.
Check for any errors or issues and fix them before proceeding.
<li> Commit and Push to GitHub:
Add your changes using git add ..
Commit the changes with a meaningful message using git commit -m "Initial setup and basic structure".
Push the changes to GitHub using git push origin master.
