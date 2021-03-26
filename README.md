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
  - **Home Page** 
      Since for homepage no authentication is needed so any user can just visit http://localhost:3000/ and can access the homepage.
      Rest Client Output-
      ![image](https://user-images.githubusercontent.com/22290406/112695975-fc18cb80-8eaa-11eb-8ead-8ad665dd9dfa.png)


  - **Register other users**- Using the api http://localhost:3000/api/users we can register other user by keeping the **isAdmin Flag as false**
  - **Authenticating Registered users** - Now we will need to authenticate users based on the token recieved earlier which can be done by the following api-
      http://localhost:3000/api/auth
      Req Eg-{
	             "email":"sam2k7@gmail.in",
	             "password":"abcde"
             }
  
  - **First create a tickets db** by running the tickets api to post all 40 tickets for a particular bus(Now u have all 40 tickets which are open in db)
    http://localhost:3000/api/tickets/all
  - **Booking a Ticket** is done by the api- (localhost:3000/api/bookings)
     Req Eg- 
         {
          "passFirstName": "Sam",
             "passLastName": "Fischer",
             "passPhoneNumber": "9013523717",
             "passEmail":"sam2k7@gmail.com",
             "seatNumber": 2,
             "seatType":"AC"
         }
   - **Fetching Open/Close Tickets** - through this api we can fetch the closed as well as the open tickets just by passing true/false in request params
        localhost:3000/api/tickets/true
   - **Admin Reset all tickets** - through this we can open all the tickets back by changing the status of the tickets as false.
       localhost:3000/api/tickets/reset

