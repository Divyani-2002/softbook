# Softbook
SoftBook is a backend service for a social networking platform designed to connect users, share updates, and engage in meaningful conversations. It provides APIs to manage user authentication, profiles, posts, comments, and interactions.

## Features
User Authentication -
- Secure login and signup using JWT authentication.
- Password encryption using Bcrypt.

User Management -
- Create and manage user profiles.
- Update profile details and upload profile pictures.

Post Management -
- Create, update, delete, and retrieve posts.
- Like, comment, and share posts.

Friend Management -
- Send and accept friend requests.
- View friend lists and manage connections.

Real-time Chat (Optional) -
- Enable direct messaging between users using WebSockets.

 Notification System -
- Receive notifications for likes, comments, and friend requests.

## Tech Stack
- Node.js
- Express.js
- dotenv
- mongoose
- nodemon

## API Endpoints
Users

- /api/v1/user/create
- /api/v1/user/getall
- /api/v1/user/get/:id
- /api/v1/user/delete/:id
- /api/v1/user/update/:id
- /api/v1/user/logout

Post
- /api/v1/post/create
- /api/v1/post/delete/:id
- /api/v1/post/update/:id
- /api/v1/post/getall
- /api/v1/post/get/:id


-/api/v1/post/:postId/like
-/api/v1/post/:postId/unlike

-/api/v1/post/:postId/comment/:commentId/like
-/api/v1/post/:postId/comment/:comment(same for create and delete)

Message

- /api/v1/message/send
- /api/v1/message/unsend:/id
- /api/v1/message/get/:id
- /api/v1/message/getAll
- /api/v1/message/read:/id
- /api/v1/message/delete:/id



## Security Considerations
