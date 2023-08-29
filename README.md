# Travel Gem Explorer

Welcome to the Travel Gem Explorer, a web application that allows users to explore and learn about popular tourist destinations around NSW. Users can view destination details, leave comments, and engage in discussions about their favorite places to visit.

## Getting Started

To run the Travel Gem Explorer application please visit the following URL: 

## Features

### User Authentication

Register and log in using passport.js for secure authentication. User data is stored securely.

### Destination Showcase

Browse a list of popular tourist destinations with images and brief descriptions.

### Destination Details

Get comprehensive information about a selected destination, including description, location, attractions, and recommended activities.

### Commenting

Leave comments on destination pages and engage in discussions with other users.

### User Profile and Activity

View your profile and recent commenting activity. Access links to destinations for which you have left comments.

### Database Interaction

Sequelize is used for defining and interacting with database models (User, Destination, Comment). Associations between users, destinations, and comments are established.

### Views and Templating

Handlebars.js templates render dynamic HTML for various pages, such as login, registration, destination list, destination details, and user profile.

## User Stories

1. **Exploring Destinations:**
   As a travel enthusiast, I want to explore popular tourist destinations to plan my next trip.
   
   - I can view a list of popular tourist destinations on the homepage.
   - Each destination card includes an image, title, and brief description.

2. **Detailed Information:**
   As a user, I want to learn more about a specific destination.

   - I can click on a destination card to view its detailed information.
   - The destination details page includes a description, location, opening hours, contact information, attractions, and recommended activities.

3. **Sharing Experiences:**
   As a user, I want to leave comments on destinations to share my experiences.

   - On the destination details page, I can leave a comment in the provided text box.
   - After submitting a comment, it is displayed along with other comments.
   - Comments are displayed in chronological order, with the newest comments at the top.

4. **Personalized Profile:**
   As a user, I want to have a personalized profile.

   - I can sign up for an account with my email and password.
   - I can log in using my registered email and password.
   - After logging in, I can view my profile information.

5. **Tracking Comments:**
   As a user, I want to keep track of the destinations I've commented on.

   - On my profile page, I can see a list of destinations for which I've left comments.
   - Each destination in the list is linked to its details page.

## Acceptance Criteria

1. **Homepage and Destination List:**
   - A list of destinations is displayed on the homepage.
   - Each destination card includes an image, title, and brief description.
   - Clicking on a card navigates to the destination's details page.

2. **Destination Details Page:**
   - Detailed information about the destination is displayed, including description, location, opening hours, contact information, attractions, and recommended activities.
   - A comment section allows users to leave comments.
   - Comments are displayed in chronological order, with the newest comments at the top.

3. **Commenting:**
   - Users can write and submit comments on destination details pages.
   - Submitted comments are displayed with the username, timestamp, and content.
   - Users can only delete their own comments.

4. **User Authentication:**
   - Users can register an account with a valid email and password.
   - Users can log in using their registered email and password.
   - Users can log out of their account.

5. **User Profile:**
   - Users can view their profile page after logging in.
   - The profile page displays the user's email and a list of destinations they've commented on.
   - Destinations in the list are linked to their respective details pages.

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
