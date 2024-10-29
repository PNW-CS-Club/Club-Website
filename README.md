# Club-Website
This website will have information for all things related to the Purdue University Northwest Computer Science Club.

## Content
* Project information for:
  * This website
  * Gatekeeper Project
  * Duckietown Project
* Helpful resources for students
* Blogs posts for events / Highlights
* Event information for:
  * Coding Contests
  * Hackathons

## Features
* Blog editor
* User login

## Tech Stack
These are the tools we will be using to build our website: 
* React JavaScript - Frontend Development - https://react.dev/learn
* SpringBoot - Backend Development - https://docs.spring.io/spring-boot/documentation.html
* Amazon Web Services, EC2(Compute), RDS(Database), Route53(DNS) - https://docs.aws.amazon.com/
* PostgreSQL - https://www.postgresql.org/
* GitHub
* Jira - Project Management - https://www.atlassian.com/software/jira
* Selenium - Functionality Testing - https://www.selenium.dev/

## Getting Started - Developers
* You must have Node.js and npm installed on your machine to run this project.
  - If you do not have Node.js already: Install Node.js and npm using here: https://nodejs.org/en/download/prebuilt-installer
* Set up repository
  - Either using `git clone https://github.com/PNW-CS-Club/Club-Website.git` in a CLI or using software like GitHub Desktop
* Open the git repo in your code editor of choice
* Using the CLI/Terminal, do `cd pnwcsclub-front` to navigate to the project folder
* Run `npm install` to install all the dependencies
* Inside of `C:\...\pnwcsclub-front` run `npm run dev` to start the development server
* Open your browser and navigate to the given localhost to see the website

## Backend
* The backend is written in Java using the SpringBoot framework
 - You will need to have Java and Maven installed on your machine
 - This is a good resource if you need help installing Maven(Windows): https://phoenixnap.com/kb/install-maven-windows
* The backend is located in the `pnwcsclub-backend` folder
* To run the backend, navigate to the `pnwcsclub-backend` folder in your CLI
* Run `mvn spring-boot:run` to start the backend server
* The backend server will be running on `localhost:8080`
 - If you want to test specific functions, you can do `localhost:8080/api/{function}`
* You will want to have the frontend running as well to see the full website

- If you have any questions, please reach out to Julian or Me(Peter)
