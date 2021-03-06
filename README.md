# Suggestions

- Use TS interfaces to enforce the contract between components and their props
- Use TS interfaces to enforce the contract between components and the store's actions
- Change TS's "any" to the correct type(s)
- Rename some functions to ensure their behaviour is more explicit (maybe add some comments too)
- Single-letter variables could perhaps be named more fully
- Move the selector logic from the components to the store as getters, if the app grows in complexity
- Importing db.json into tests could be improved further by using fixtures instead
- No CSS changed, though the "Start New Quiz" button should probably remain centred horizontally
- ARIA attributes could be added to question labels, etc.
- Given the size of the app, I'd consider getting rid of Redux (feels like overkill)

To make production ready:

- Update all dependencies
- Ensure tree-shaking is enabled
- Update browserslist and ensure relevant browsers are targeted (think @babel/preset-env)
- Check rendered HTML/CSS cross-browser
- Increase code coverage a little, and if it were a more complex app, maybe add some end-to-end tests using Cypress or similar

## Introduction

Quiz is a small application that is using a sample of questions to display list of multiselect trivia questions. Users can start the quiz, answer trivia questions and complete the quiz when all questions are answered.

### You have been asked to:

- Create new component that displays number of correct answers (for example 'You answered 5 out of 10 questions correctly.')
  - add component to the Results page.
  - write tests to ensure correct functionality.
- Refactor the application code using clean coding principles to make the code maintainable.
- Think about semantics and accessibility.
- Style your work to fit the application.
- Do not break the existing functionality.
- Propose changes to the application to make it production ready.

Please only spend a reasonable amount of time on the task. If it does not get completed, we would
like to know what your next steps would have been and how you would have accomplished them.

### What we look for:

When reviewing the test, we look for a solution which:

- Is clean, easy to understand and maintainable
- Shows an understanding of software craftsmanship
- Doesn???t break the existing functionality

Your solution will form the main part of your technical interview where we???ll discuss your design decisions.

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

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
