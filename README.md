Overview
The Language Learning App is an interactive platform designed to help users learn languages, specifically Albanian and Spanish. The app includes puzzles, games, and various learning modules to help students improve their vocabulary and sentence construction. The platform is divided into two user roles:

Students can access learning modules, puzzles, and games to practice their skills.

Teachers can create, update, and delete modules, providing a personalized learning experience for students.

Features
Student Features:
Read and learn: Access 7 modules for both Albanian and Spanish languages.

Interactive puzzles and games: Engage with word arrangement puzzles to reinforce sentence structures.

User-friendly interface: An easy-to-navigate student dashboard to access content.

Language practice: Focused on sentence formation, vocabulary, and language comprehension.

Progress tracking: Basic feedback for students on puzzle correctness.

Teacher Features:
Module creation: Teachers can create new learning modules for both languages.

Edit & update modules: Teachers can modify existing modules to fit the needs of their students.

Module deletion: Teachers can remove outdated or irrelevant modules.

Module content: Teachers can manage text-based content, including sentences for puzzles and language games.

Technologies Used
React (Functional Components & Hooks)

JavaScript (ES6+)

CSS for basic styling

JSON file to store language modules and puzzles

Local Storage / Static File to serve JSON data

Installation
Prerequisites:
Node.js installed on your local machine.

Steps to run the project locally:

Clone the repository for frontend:

git clone https://github.com/sirdix78/language-app.git

Clone the repository for backend:

git clone https://github.com/sirdix78/json-server-backend.git

Navigate to the project directory:

cd language-learning-app
Install dependencies:

npm install
Set up environment variables (e.g., for database connection, JWT secret, etc.) in a .env file.

Start the development server:

npm run dev
This will launch the frontend application on http://localhost:5173
This will launch the backend application on http://localhost:5005

Usage
For Students:

Browse the modules: Access 7 modules for each language (Albanian and Spanish).

Play puzzles and games: Engage with interactive content like word arrangements and games.

Complete tasks: Follow instructions and complete puzzles to practice sentence construction.

For Teachers:

Manage modules:

Create new modules: Add new sentences, vocabulary, or games to the modules.

Edit existing modules: Modify content in the modules as needed.

Delete modules: Remove outdated or irrelevant modules from the system.

Track student progress: View student feedback and module engagement.

Future Improvements
Add more languages: Extend the app to support additional languages for learning.

Gamification: Add achievements, points, or levels for students to enhance engagement.

Progress tracking: Implement a more detailed progress tracking system for students, such as quizzes or tests.

Admin panel: Allow admins to manage teachers and students, and approve content.

Mobile app: Develop a mobile version of the app for easier access.

License
This project is licensed under the MIT License.
