# Assignment8

* Created a user who takes 3 parameters full name, email, and password. Enforced a strong password rule and added validation for email and full name.
API Endpoint:
POST: /user/create – User creation with a meaningful message if the user email or password is invalid)

* Updated the user details (full name and password only). Email should not get updated at any point. A proper error message should be thrown if a user is not in the database.
API Endpoint:

* PUT: /user/edit – Added validations for full name and password

* Deleted the user by taking the user's email as input
Api Endpoint:

DELETE: /user/delete

* Get all the user's full name, email addresses, and passwords stored in the database
API Endpoint:

GET: /user/getAll
