## GetPeopleApp (Project for Formstack)

This project was made as an interview assignment for a Front-End engineering position with Formstack. It's a React project meant to show the fetching, storage, and manipulation of data on the front-end. 

## Installation

1.) Fork the repository.  
2.) Clone the forked repository to your system.  
3.) Viola!

## How to Use GetPeopleApp

1.) Install the application.  
2.) Run the application.  

```javascript
npm start
```  
3.) Click "Get people" to retrieve a list of random people.  
4.) Add a new person in the input boxes and click "Add person".  
5.) Sort IDs numerically with the third button.   
6.) Sort IDs in reverse numerical order with the final button.  
7.) Select users with the radio button in their card.  
8.) Delete users with the delete button in their card.  

## Tools Used to Create This App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
[React-Foundation](https://react.foundation/).  
[JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## Notes

In using JSONPlaceholder, add and delete functions are functional, but don't always represent the changes that are input by the user. I wanted to add a fetch into this project, but given JSONPlaceholder's data accessibility, data is pseudo-manipulated on the server-side. A quote from [their page](https://jsonplaceholder.typicode.com/guide.html):

```bash
Important: the resource will not be really deleted on the server but it will be faked as if.
```  
This may reflect upon my project, but I enjoyed including calls to an API for data instead of using dummy test data. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
