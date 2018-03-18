Player Profile Visualization

by - Utsav Kapoor (utsav.kapoor@asu.edu)

Project can be accessed online at https://athlete-profile-form.glitch.me/#!/

dependencies:
1. Install npm (https://www.npmjs.com/package/npm-install-prompt/tutorial)
2. Create a new Database in mLab and get its URL.

Instructions for running on local environment
1. git clone https://github.com/utsavkapoor/athlete-profile-form.git
2. Install dependencies using npm install and create a .env file which stores the MongoDB database url
3. Start your server using npm start
4. Navigate to app in browser (localhost:8000).
5. Enjoy !
Discussion
I used the following technologies: HTML, CSS, Angularjs, Node, Express, Mongoose ORM, Bootstrap. I used the MEAN Stack boilerplate (https://github.com/utsavkapoor/BoilerPlate-MEAN) to generate the scaffolding for this app.

Requirements.

1. create a multi-step or multi-screen athlete profile form that gathers standard demographic, sports and event data.

I created a form and divided it into Sub-Forms of Basic Info, About and Social Media. After you fill these forms you goto preview page which shows your entry.
You can go back any time to change any data you want. After Submitting the data. User is re-routed to main page where he can go and see all the Player Records. When a user clicks on a player he can go and see that Player full Profile.

Form Validation is done on the front-end and basic info data and twitter handle is made mandatory to be entered for someone to Submit a Data.

Future Work.

1. Adding tests and form validation on server side.
2. Improving and polishing the UI
3. Adding User Authentication and Image Storage.
