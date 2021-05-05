In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


### This is a project for an Test purpose and is a Recipie API 

This API lets an user search a particular Recipie by name/ingredient/category, it uses https://www.themealdb.com/api.php as the source of API data and uses Firebase to store the favorite recipies and number of times a recipie was viewed. To be noted that in no way a user can navigate to check the number of time a recipie was viewed i.e. Views page; it is something which can only by accessed by '/views' after the localhost address.


## Firebase and React Example
This project uses React and Firebase. You will need to put your Firebase credentials into a .env file in the project root as shown in the lecture. The .env file should look like below. Collections which were created were "Favorites" and "Views"

REACT_APP_FIREBASE_KEY = "YOUR FB API KEY"  
REACT_APP_FIREBASE_DOMAIN= "YOUR FB DOMAIN"  
REACT_APP_FIREBASE_DATABASE = "YOUR FB DB URL"  
REACT_APP_FIREBASE_PROJECT_ID = "YOUR FB PROJECT ID"   
REACT_APP_FIREBASE_STORAGE_BUCKET ="YOUR FB STORAGE BUCKEY"  
REACT_APP_FIREBASE_SENDER_ID = "YOUR FB SENDER ID"  
REACT_APP_FIREBASE_APP_ID = "YOUR FB APP ID"  

