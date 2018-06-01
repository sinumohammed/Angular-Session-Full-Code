# Angular-Session-Full-Code
Basic angular application tutorial from  the scratch to deployment.
In this video we will wrap up Angular 2 course and also get an idea of what we plan to do next. 


In this Angular course we discussed all the basics of Angular framework. We have discussed 

•	What is a component<br/>
•	Creating a component and a nested component<br/>
•	Passing data between parent and child components using component input and output properties<br/>
•	Different ways of applying styles to components<br/>
•	We also discussed interpolation, property, class, style and event bindings<br/>
•	How angular two way data binding keeps component class properties and HTML element values in sync<br/>
•	Using angular structural directives ngIf and ngFor<br/>
•	Transform data before display using built-in angular pipes and creating our own custom pipes<br/>
•	How to create custom types for the business objects that we create in a real-world application like Employee, Customer, Order, etc using the TypeScript interfaces<br/>
•	Component Life Cycle Hooks<br/>
•	Creating a service that retrieves data from a remote web service<br/>
•	Using Bootstrap to style Angular components<br/>
•	How routing works in angular and passing parameters to routes<br/>
•	What is Dependency Injection and how it is implemented in Angular<br/>
•	How to work with Observables and Promises in Angular<br/>
•	Lazy loading<br/>
•	Directive<br/>
•	Environment<br/>
•	Deployment<br/>

# For running client -env prod,qa,stg
> ng serve [ development ]
> ng serve -e prod
> ng serve -e qa
> ng serve -e stg
open on port http://localhost:4200

# For deployment
These options also apply to the serve command. If you do not pass a value for environment, it will default to dev for development and prod for production.

# Prod environment
ng build --target=production --environment=prod<br/>
ng build --prod --env=prod<br/>
ng build --prod<br/>
# Dev environment
ng build --target=development --environment=dev<br/>
ng build --dev --e=dev<br/>
ng build --dev<br/>
ng build<br/>
# To run the app from ngbuild generated code
npm install -g http-server [ install dependency in order to run from dist folder ]<br/>
http-server ./dist [ run index html from dist folder ]<br/>
