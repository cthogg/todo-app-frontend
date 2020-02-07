# TODO App

A simple TODO app

## How to Run

### Backend
- clone this repository https://github.com/cthogg/todo-app-backend
- install packages `npm i` 
- run `npm start` 
- backend will be running at `http://localhost:4000/`

### Frontend
- Set the environmental variable REACT_APP_API_HOST ="http://localhost:4000/". Found in
`.env` file.
- install frontend `npm i`
- run locally `npm start`
- frontend will be found at `http://localhost:3000/`

## Requirements
- node v12.13.1 (npm v6.12.1)


## Commands
- install `npm i`
- run `npm start`

## User Requirements
- The user can add To-Dos. (Title, description, due date) - Done
- The user can see the list of To-Dos - Done
- The user can filter the list by title - Done
- The user can edit a To-Do - Done
- The user can delete a To-Do - Done
- The user can login and see their own personal TODOs - Done

## Next Steps
If I had more time I would do the following:
- Add error handling to the requests.
- `const [num, setNum] = useState<number>(1);` is a hack to force a re-render on update. Unfortunately it was not immediately apparently why when the todos did not update the children components did not update.
- Add cypress e2e tests.
- ensure due date can only be set in the future
- The app is usable on mobile but the UX is not very good, especially the SingleTodo Component.
- change the favicon
- make the edit and close buttons icons
- could put it into a mono-repo with todo-app-backend? 
- at the moment the frontend and backend have the same types (i.e. there is no conversion). Would be good if there was a conversion layer.
- mock the axios request and add integration tests. For example, checking that when the submit button is clicked, another TODO is added to the row.
- there is a delay/flicker when the loading text appears and the TODO being added or deleted.


## Design Philosophy
- Testing. I find snapshot testing and easy and quick way to spot visual regressions. Also code which is easy to test is often better designed code. So it adding tests raises the bar in coding standards. 
- Automation: Can spot regressions especially when working across the team. Husky: so you are not committing or pushing code which fails tests.
- Design System: It is good to develop and document a design system to ensure consistencies across teams. Since this project is a prototype I used Bulma CSS framework.
- Design mocks: Use Figma to draft out some ideas and give me something to work towards on the design. The simple mock developed [here](https://www.figma.com/file/MdpzCRojKHqawz7i9TTiwn/todo-app-frontend?node-id=0%3A1) took me 10 minutes to create. 
- Documentation: If I had more time I would add some architectural decision records within the repository. ADRs. To save you looking back and asking, why do we use this library? Why was it made like this? It often forces us to take some time at least on a decision and recognising other ways.
- Deployment. I would have liked to have deployed the app, in order to check that the whole development process works (development, testing, deploy). I have found Netlify very good for small frontend projects.