# Note WebApp 
# MERN Stack Notes Application

The MERN Stack Notes Application is a web-based platform designed to help users easily create, manage, and organize their personal notes. This application leverages the power of the MERN stack (MongoDB, Express.js, React, Node.js) to provide a seamless and efficient user experience.

## Key Features

1. **User Authentication:**
   - Users can sign up for an account, providing their credentials securely.
   - After signing up, they can log in to access the application.

2. **Personal Notes:**
   - Once logged in, users are taken to a personalized dashboard where they can create, view, and manage their notes.
 
3. **Create and Edit Notes:**
   - Users can create new notes by providing a title and content.
   - They have the ability to edit the content of existing notes as needed.

4. **Delete Notes:**
   - Users can delete notes they no longer need, helping them keep their workspace organized.

5. **Logout:**
   - Users can log out securely when they are done using the application.

## How to Use

1. **Sign Up and Login:**
   - Users start by signing up for an account with their unique username and password.
   - After signing up, they can log in with their credentials.

2. **Dashboard:**
   - Upon logging in, users are taken to their dashboard, where they can see a list of their notes.

3. **Create a New Note:**
   - Users can create a new note by clicking the "Create New Note" button.
   - They provide a title and content for the note and save it.

4. **Edit and Delete Notes:**
   - Users can click on a note to view its content and edit it if needed.
   - They can also delete notes they no longer require.



## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Local Development](#local-development)
3. [Deployment](#deployment)
4. [Built With](#built-with)
5. [Authors](#authors)
6. [License](#license)

## Prerequisites

Before you begin, ensure that you have the following prerequisites installed on your system:

Node.js: Download and install Node.js from nodejs.org.

MongoDB: Install and set up MongoDB. You can download it from mongodb.com.

Git: Install Git for version control. Download it from git-scm.com.



## Local Development

Step 1: Clone the Repository
Open your terminal and run the following command to clone the project repository from GitHub:

git clone https://github.com/ajayythakur/notes_mern.git


Step 2: Navigate to the Project Folder
Change your working directory to the project folder with cd command.

Step 3: Install Dependencies
Install the project's dependencies by running:

npm install axios mdb-react-ui-kit @fortawesome/fontawesome-free reac-router-dom cors nodemon

This command will download and install the required Node.js packages specified in the package.json file.


Create a .env file in the project's root directory to store environment variables like your MongoDB connection URI, session secret, and any other sensitive information. Example .env content:

MONGODB_URI=your-mongodb-uri
SECRET_KEY=your-session-secret

Replace your-mongodb-uri with your MongoDB connection string and your-session-secret with a strong secret for session management.

Step 5: Start the Backend Server
Run the following command to start the backend server:
npm run server
This will launch the Node.js server, which will handle API requests and interact with the MongoDB database.

Step 6: Start the Frontend Development Server
Open a new terminal window, navigate to the project folder (if you're not already there), and run the following command to start the frontend development server:

npm start

This command will start the React development server, and your application will be accessible at http://localhost:3000 by default.

Step 7: Access the Application
Open a web browser and navigate to http://localhost:3000 (or the URL displayed in your terminal if different). You should see your MERN stack Notes Application up and running locally.



## Deployment

The MERN Stack Notes Application can be easily deployed to a cloud platform, allowing users to access it from anywhere. Detailed deployment instructions can be found above.


## Technologies Used

- **Frontend:**
  - React: Provides a dynamic and responsive user interface.
  - React Router: Handles navigation within the application.
  - Axios: Facilitates communication with the backend.

- **Backend:**
  - Node.js: Powers the server and handles API requests.
  - Express.js: Provides a robust backend framework.
  - MongoDB: Stores user data and notes securely.


## Authors
Ajay Rajput
GitHub - https://github.com/ajayythakur