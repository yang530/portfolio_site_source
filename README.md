# Portfolio Website, Yang's Web Dev Space (Source code)
This is the source code of my portfolio website, powered by React.js. It is still a work in progress.

## Website Domain name: https://yangswbspace-314e1018b0f8.herokuapp.com/

## How To Use
1. At "client" folder: npm run build
2. Copy "build" folder into "server" folder.
3. At "server" folder: npm install.
4. At "server" folder: node corsProxy.js. 

## Front End Features:
1. Top Navbar
*shows user's location based on IP address
*shows weather and temperature. (top left) - (You may need to disable CORS-"Cross-Origina-Resource-Sharing" policy on your browser to get this feature working)
*"FUN" button will start a mini game.
*"TOP" button scrolls viewport to the top of the page.

2. About Me
*"Resume" shows a responsive HTML resume. 
*"Linkedin" button directs to my Linkedin profile.
*"Github" button opens my Github profile. 

3. Featured Project
*Shows the featured project. 
*"Run It Now" will run (open) the project in a new window. 
*"Download from Github" will download the project code from Github. 
*"More of My Works" will open page /MyWorks.

4. MyWorks page
*This page fetches data from an a local JSON file and display information of works (projects) I have worked on.

5. Responsive Design
*The website is now fully responsive.

## Backend Features

1. corsProxy.js in server folder is an Express.js middleware.
2. corsProxy.js carries out server side rendering of the React site.
3. corsProxy.js executes API calls on the server side for the client site to be around CORS restrict of browser.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
