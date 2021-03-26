# Role-Based-Authentication-System
 
## About the project
**This project contains the API's of the Role-Based-Authentication-System 🎫.

## Technology Stack
**NodeJS with Express is used as framework for the development of the application.

## Database: Node-Local-Storage


## Installation
1.In the console, download a copy of the repo by running git clone https://github.com/vijit2k7/RBAC-Node.git.

2.Just run npm install to install all the dependencies.

## Development server
Run npm start or node server for a running development server. Navigate to http://localhost:3000/.


## App WorkFlow
**.Step by step Workflow for setting up the whole app on local or cloud server:**
  - **Home Page(http://localhost:3000/)** 
      Since for homepage no authentication is needed so any user can just visit http://localhost:3000/ and can access the homepage.
      Rest Client Output-
      ![image](https://user-images.githubusercontent.com/22290406/112695975-fc18cb80-8eaa-11eb-8ead-8ad665dd9dfa.png)


  - **Authentication Checks(http://localhost:3000/admin)**- None of the further pages can be accessed unless the right authentication is not provided which in this case is 		provided by userId.
      	Rest Client Eg- If a user tries to access to access the above page without correct userId(Correct user id for admin is 1)
	![image](https://user-images.githubusercontent.com/22290406/112696701-52d2d500-8eac-11eb-80dc-8422aaebc0a1.png)
	
	
  - **Authorisation Checks(http://localhost:3000/admin)** - If we are trying to access the admin url without the correct userId(For admin its 1)
	Failure Scenario-(We get 401 Unauthorised)
	![image](https://user-images.githubusercontent.com/22290406/112696928-bc52e380-8eac-11eb-9074-8bfd55a63419.png)
	
	Success Scenario-(We get all the users with a 200 ok)
	![image](https://user-images.githubusercontent.com/22290406/112697106-f328f980-8eac-11eb-9073-19ef0014ab26.png)

	
  - **Posting a new User with his role(POST http://localhost:3000/)** -
      1.Scenario 1 : When the logged in user is not admin and trying to create a new user.(Admin userId=1)
      	Rest Client-
      	![image](https://user-images.githubusercontent.com/22290406/112698168-19e82f80-8eaf-11eb-9e4e-d398e06b006c.png)
      2.Scenario 2: When the logged in user is admin but the role is invalid(ie not user,guest or admin) or name is shorter than 3 characters.
      	Rest Client-
	![image](https://user-images.githubusercontent.com/22290406/112698387-97ac3b00-8eaf-11eb-857c-881227c84a45.png)

      3.Success Scenario-Admin is able to create the right user with specific read,write,delete or admin access.
      	Rest Client-
        ![image](https://user-images.githubusercontent.com/22290406/112698969-ddb5ce80-8eb0-11eb-9231-8384ff9d0068.png)


    
    
    
  - **Updating a Role(Only admin users can do this / PUT http://localhost:3000/id)**-
       
       Failure Scenario(When the id entered is not present in the db or the user is not admin)-
       ![image](https://user-images.githubusercontent.com/22290406/112701401-861a6180-8eb6-11eb-8508-dbefa618cb8b.png)

       
       Success Scenario-
       ![image](https://user-images.githubusercontent.com/22290406/112701146-dba23e80-8eb5-11eb-860e-77e2c5a6262a.png)



   - **Fetching Open/Close Tickets** - through this api we can fetch the closed as well as the open tickets just by passing true/false in request params
        localhost:3000/api/tickets/true
   - **Admin Reset all tickets** - through this we can open all the tickets back by changing the status of the tickets as false.
       localhost:3000/api/tickets/reset

