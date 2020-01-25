# TODO App

https://todo-app-frontend.netlify.com/

A simple TODO app

[![Netlify Status](https://api.netlify.com/api/v1/badges/41febec5-e12d-414d-8887-b2972c66e39a/deploy-status)](https://app.netlify.com/sites/todo-app-frontend/deploys)

## Requirements
- node v12.13.1 (npm v6.12.1)


## Commands
- install `npm i`
- run `npm start`

## Requirements
- The user can add To-Dos. (Title, description, due date) - Done
- The user can see the list of To-Dos - Done
- The user can filter the list by title - Done
- The user can edit a To-Do - Done
- The user can delete a To-Do - Done

## TODO: 
- add a switch from local backend and real backend.
- Add title to form
- make the edit and close buttons icons
- change the background of the input forms. Put make it obvious that they are inputs!

## Next Steps
If I had more time I would do the following:
- Add error handling to the requests.
- Add a switch to switch between local and production servers
- Add a mock to axios to
- `const [num, setNum] = useState<number>(1);` is a hack to force a re-render on update. Unfortunately it was not immediately apparently why when the todos did not update the children components did not update.
- Add cypress e2e tests.
- ensure due date can only be set in the future
- The app is usable on mobile but the UX is not very good, especially the SingleTodo Component.
- change the favicon
- could put it into a mono-repo with todo-app-backend? 
## Design Philosophy
- Testing. I find snapshot testing and easy and quick way to spot visual regressions. Also code which is easy to test is often better designed code. So it adding tests raises the bar in coding standards. 
- Automation: Can spot regressions especially when working across the team. Husky: so you are not committing or pushing code which fails tests. Also with a VSCode Snippet. Prettier and eslint makes the code style consistent.
- Easy to change. Based on a philosophy from the Pragmatic Programmer. Why, for example, I created a conversion layer between the backend and frontend types. 
- Design System: It is good to develop and document a design system to ensure consistencies across teams. Since this project is a prototype I used Bulma CSS framework.
- Design mocks: Use Figma to draft out some ideas and give me something to work towards on the design. The simple mock developed [here](https://www.figma.com/file/MdpzCRojKHqawz7i9TTiwn/todo-app-frontend?node-id=0%3A1) took me 10 minutes to create. 
- Documentation: If I had more time I would add some architectural decision records within the repository. ADRs. To save you looking back and asking, why do we use this library? Why was it made like this? It often forces us to take some time at least on a decision and recognising other ways.