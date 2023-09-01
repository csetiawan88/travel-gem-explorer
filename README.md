# Travel Gem Explorer

Welcome to Travel Gem Explorer, a web application that allows users to explore lesser-known tourist destinations around NSW. Users can view destination details, leave comments, and engage in discussions about their favorite places to visit.

## Getting Started

To run the Travel Gem Explorer application please visit the following URL: https://travelgem-explorer-6412c66d7631.herokuapp.com/

## Features

### User Authentication

Register and log in using passport.js for secure authentication. User data is stored securely.

### Destination Showcase

Browse a list of tourist destinations with their images and names.

### Destination Details

Get information about a selected destination, including a description and location.

### Commenting

Leave comments on destination pages and engage in discussions with other users.

### Database Interaction

Sequelize is used for defining and interacting with database models (User, Destination, Comment). Associations between users, destinations, and comments are established.

### Views and Templating

Handlebars.js templates render dynamic HTML for various pages, such as login, registration, destination list, and destination details.

## User Stories

1. **Exploring Destinations:**
   As a travel enthusiast, I want to explore popular tourist destinations to plan my next trip.
   
   - I can view a list of tourist destinations on the homepage.
   - Each destination card includes an image, title, and location.

2. **Detailed Information:**
   As a user, I want to learn more about a specific destination.

   - I can click on a destination card to view its detailed information.

3. **Sharing Experiences:**
   As a user, I want to leave comments on destinations to share my experiences.

   - On the destination details page, I can leave a comment in the provided text box.
   - After submitting a comment, it is displayed along with other comments.
   - Comments are displayed in chronological order, with the newest comments at the top.

## Acceptance Criteria

1. **Homepage and Destination List:**
   - A list of destinations is displayed on the homepage.
   - Each destination card includes an image, title, and location.
   - Clicking on a card navigates to the destination's details page.
   - An 'About Us' section at the bottom of the page gives a brief description of the concept. 

2. **Destination Details Page:**
   - Detailed information about the destination is displayed.
   - A comment section allows users to leave comments.
   - Comments are displayed in chronological order, with the newest comments at the top.
   - A sidebar shows a list of other latest locations (max 3) which direct the user to their respective pages. 

3. **Commenting:**
   - Logged in users can write and submit comments on destination details pages.
   - Submitted comments are displayed with the username and content.

4. **User Authentication:**
   - Users can register an account with a valid email and password.
   - Users can log in using their registered email and password.
   - Users can log out of their account.

5. **Adding New Destinations:**
   - Logged in users can add their own destinations.
   - A form with the input fields 'name', 'image', 'location', and 'description' prompts the user for the required information.
   - New destinations are loaded on to the homepage and the destination page sidebar.
  
## Technology Stack

- Backend: Node.js, Express.js
- Frontend: HTML, CSS, Handlebars.js (templating), JavaScript
- Database: MySQL, Sequelize (ORM)
- Authentication: Passport.js

## Future development
While the Travel Gem Explorer already offers a range of exciting features for users to explore and engage with tourist destinations, there are several avenues for future development and enhancements that can further enrich the user experience. Some potential areas for improvement and expansion include:
1. **Interactive Maps:**
Integrate interactive maps on destination details pages to provide users with a visual representation of the location. This can help users better understand the proximity of attractions and landmarks within the destination.
2. **Advanced Search and Filtering:**
Enhance the search functionality to allow users to filter destinations based on specific criteria, such as type of attraction (beach, mountain, historical), accessibility, and user ratings.
3. **Accessibility Features:**
Ensure that the application adheres to accessibility standards, making it usable for individuals with disabilities. Implement features such as screen reader compatibility and keyboard navigation to ensure inclusivity.
4. **Integration with Travel Services:**
Explore integrations with travel booking services to allow users to seamlessly transition from exploring destinations to planning and booking their trips.

## Contributing

Contributions are welcome! If you find a bug or have an enhancement in mind, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Enjoy exploring the hidden gems of tourist destinations with the Travel Gem Explorer application!
