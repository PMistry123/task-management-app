
## Getting Started

```bash
npm install

# run app
ng serve

# run tests
ng test
```

## Tasks managing application

Installed all packages, AngularMaterial UI library, All necessary version changes in my machine.

* In two hours, I am able to finish Adding tasks, adding details component through angular router, task filter(simple search task) started with simple assign task functionality. Including some necessary UI changes. 
* Error handling - I can use form controller to add tasks and perform Error Handling with form controller though it is time consuming for a simple App here, I have decided to go for custom error handling which is on task component, Just to demonstrate. 
* StateManagement NGRX, I can use for big applications where we are sending and calling data from the database through the APIs and doing state-management of data display on real time with changes but here it will be time consuming for a simple App. 
* Wrote simple test cases just to demonstrate. 
* Assign task functionality is not fully finished yet because it require extra hours as it is not possible to finish whole task management app in two hours to assign task to user and fetch user information through id and make login for user and they can than change status of task i.e task in progress or completed and change status of task back on dashboard.


## Notes

* Steps to see data coming form local storage instead of hardcode array from backend.service.ts   


Uncomment code in  dashboard.component.ts 
``
    this.backend.taskList = this.taskList = JSON.parse(localStorage.getItem('taskArray')); 
``
Comment this line
``  
     this.taskList = this.backend.taskList; 
``

* You can view but can not search for the newly added task on dashboard if you are using hardcode array unless it is hardcoded into array in coding file backend.service.ts

* You can view and search for the newly added task on the dashboard if you are fetching data from localstorage or from a database. 

* Please provide me feedback on this and let me know if you want me to demonstrate more UI skills, or StateManagement and finish the app using more different things as it will require extra hours of work. Here, I am delivering what is required and priority as per my understanding.