# Angular application with real time chatting

# API
- /api/login which is used to login and data contains {email , password}
    - Response 200 OK of login contains {jwttoken , message}
- /api/register which is used to register a user and data contains {name,email,password}
    - Response 200 OK {message}
- /api/getUsers used to get all the users
    - Get a list of users 


- Implemented real time chatting using socket.io
- Database is Mongodb


# About features 
- Global interceptors
- Error Handling interceptors
- Authentication and authorization using jwt
- Auth guards
- Services
- Good folder stucture