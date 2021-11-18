# front-end
#### this project is used npx create-react app to install most of the dependencies 
: includeing node-modules,react, react-router,react-router-dom.
:axios was installed for reguest to back end.

### login.js 
 login has state,an object named credentials that has username and password as its properties.
 it uses a isloggedin check (boolean true of false) to verify if logged in.
 it uses a axios.post to send the user info to the end point for verifycation of token. It then stores locally the token and the user role and username in local storage

 theres a private route set up that will only if the token returned is valid allow the user access to  the organizerForm ,that has ability for user to edit certain
fields to make events

### privateroute
when only after token is returned can user acces the private route page(organizerForm)

#### axiosWithAuth
creates headers authorization token and base url path

### App.js
App.js is where all links and routes will be located
with logged in logic

### oranizerForm
as protected path it allows for planning and editing of  state object values()