# Barre-Three
by Alena Golovina, 08.26.2017

## Description

This is a website that manages the roster of the Barre3 team.
Barre3 mixes athleticism, grace, and the latest innovations designed to balance the body.
Whether you have ten minutes or an hour, each full-body workout optimizes every moment with moves that adapt to your body for maximum results.

## User Stories:

* As a user, I'd like to visit a page to see a list of all team members.
* As a user, I'd like to click a team member's entry in the list to visit their profile page, which should include more details about them.
* As a user, I'd like the option to visit an "About" page that explains what the club is, and what they do.
* As a user, I'd like all data persisted in a database, so it's always there when I need it.
* As an administrator, I want to add new members to the team. (User authentication is not required).
* As an administrator, I want to edit members' profiles, in case I make a mistake, or need to update their details.
* As an administrator, need the option to delete a member, in case they leave the team.

## Further Exploration/Additional Features

* Add functionality to keep track of stats, if relevant. Is your roster for a sports club? Keep track of the individual players' scoring percentage. An extracurricular course or seminar? Keep track of attendance or grades. A hiking group? Keep track of the number of miles each person has hiked with the club, etc.
* Add a message board area, where club members may chat with each other.
* Include an area called "announcements", "events", "games", etc. where users can post what events, matches, or meetings the club has planned.
* Deploy your application. Include a link to the live site in your project's README.
* Consider implementing AngularFire/Firebase user authentication (Note that this goes beyond the scope of our curriculum, and will require you to complete outside research. Begin with the AngularFire documentation on User Authentication.)
* Anything else that would be relevant to the group your application manages!
* As a user, I'd like to filter the list of users by their particular role in the group, or some other information/category. (For instance, a club may have a treasurer, president, and/or secretary. A sports team may have a goalie, forward, or striker, a book club may have founders and attendees. You're also welcome to filter by something other than role, if it's more relevant to your project.)

## Code Specifications
|Behavior-Plain English| Input|	Output|
|---|---|---|
|A user is able to go to click on the team link and see a list of Barre3 instructors| Click "Team" in upper-right corner.| Go to a different page to see a list of instructors|
|A user can click on an instructor's name to see their individual pages| Click on an instructor's name| Go to a detail page|
A user is able to see About page by clicking a corresponding link.| Click "about" in the right corner of the navbar.| Go to the About page to get more info about the club.|
|A user can go to the Admin page.| Click "Admin" on the left of the footer.| Go to Admin view.|
|An admin can fill out a form to create a new entry.|Fill out the forms on top of the admin page and click the "Add" button.| See a new instructor appear on the list.|
|An admin can edit instructors' info.| Edit any field or all of them under any instructor on the list and hit the "update" button.| The instructor's info will be edited.|
|An admin can delete an instructor from the list.| Press the "delete" button under the instructor of your choice.|The instructor is deleted from the list.|

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Set Up Instructions

* Clone this repository to your computer.
* Navigate to the main project folder in your terminal.
* Create a new file called api-keys.ts in the src/app directory. Then, place your Firebase credentials (the information Firebase provided in that modal window), like this:

`export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };`
* Run `npm install` and then `bower install`.
* Run `ng serve` to build and display the app.
* Navigate to `http://localhost:4200/` and view the app.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build or `ng build --env=prod --output-hashing none`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
