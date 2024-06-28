# CodeStars Problem Microservice
- This microservice is a part of the Codestars (Online Judge Project).

### Links to other Project Components:
- ***Microservices:***
    1. <a href="https://github.com/SCube27/CodeStars_Evaluator_Service">CodeStars Evaluator Service</a>
    2. <a href="https://github.com/SCube27/CodeStars_Submission_Service">CodeStars Submission Service</a>

- ***Frontend:***
    1. <a href="https://github.com/SCube27/CodeStars_Frontend">CodeStars Frontend</a>

### Tech Stack Used:
- JavaScript
- Node.js
- Express
- MongoDB
- Winston (Logging)

## Functions of this Microservice:
1. Addition, deletion, modification and storage of problems on the platform by the users with admin / problem setter status.

2. Connecting with the frontend for the display of problems present on the platform for the users to solve.

3. Providing code stubs, test cases and other problem details to the *submission microservice* for a particular problem requested for submission.

## Installation & Setup:
1. Clone the repository locally:
```
git clone https://github.com/SCube27/CodeStars_Problem_Service.git 
```

2. Install the dependencies:
```
npm install
```

3. Setup a `.env` file according to the `template.env` given.

4. Start the Server:
```
npm run start
```

**If the project interests you a star to the repository and other associated repositories would be appreciated.**