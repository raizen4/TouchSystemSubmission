
# How to run
  Please have yarn installed by all means as this is needed by the monorepo. Then just run "yarn install" and after it finishes "yarn startFrontend" and you should see the page" 
# Features
 - Fully working Sign Up page using global state management
 - Main dashboard shows news around the world by default and details about them using collapsable Cards
 - Modern interface
 - Can filter by specific publications
 - Navigation
 - Fully working Rest api interface.
 

# Choice of technnologies.
 
## React
- React Hooks
- Used peroper theming throughout the project
- Kept reusability to a maximum by adhering to ATOMIC and SOLID principles
- Material ui for fluid UI as it uses google guidelines for UI and UX
- Axios for HTTP calls
- Context API for global store management
- Formik for painless forms
- Yup for dead easy form validation


## Monorepo with lerna and yarn worskpaces
  Monorepos are relatively new technogy when it comes to production, but I perfectioned my way of doing this over the last year. I consider they bring in considerable advantages, especially when thinking about how easy is to share different packages, without having to complicate things when using multiple packages (think about using a package in multiple projects and after that the need to update each project to the latest package version) or when we are to share DTOs between front-end and back-end as there is just a matter of importing.
  
  Yarn workspaces is used for hoisting, making it possible to have a library accessible by all the projects in the monorepo and while you will see (if you want) that each project has its own node_modules. These are only symlinks to the libraries installed in the root node_modules (except for the nohoist libraries I enumerated in the root package.json, these mean that those libraries will be unique for each project where I use them (it would be as if I would not use an actual monorepos))
  Lerna is a very good package publisher and monorepo orchestrator making the life working with monorepos so much painless.
  
## Atomic Design (the use of atoms, molecules, organisms and pages)
  ### Have a look here for a proper intro https://bradfrost.com/blog/post/atomic-web-design/
  This kind or architectural decision has been taken by me mostly because of the reusability advantages it produces. It makes reusing and mixing components extremely easy. On top of this it provides a clear layout when designing UI libraries as well as a more modular file structure whilst keeping changing different implementations across the website a painless activity. It is quite an industry standard for implementing react using only best practices.

# Images!!

  ![Image1](https://github.com/raizen4/TouchSystemSubmission/blob/master/1.PNG)
  ![Image2](https://github.com/raizen4/TouchSystemSubmission/blob/master/2.PNG)
  ![Image3](https://github.com/raizen4/TouchSystemSubmission/blob/master/9.PNG)
  ![Image4](https://github.com/raizen4/TouchSystemSubmission/blob/master/10.PNG)
  ![Image5](https://github.com/raizen4/TouchSystemSubmission/blob/master/11.PNG)
  ![Image6](https://github.com/raizen4/TouchSystemSubmission/blob/master/12.PNG)
  ![Image7](https://github.com/raizen4/TouchSystemSubmission/blob/master/14.PNG)
  ![Image8](https://github.com/raizen4/TouchSystemSubmission/blob/master/15.PNG)
  ![Image9](https://github.com/raizen4/TouchSystemSubmission/blob/master/17.PNG)


