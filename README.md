# Netflix Clone MERN Stack Project

## Overview
This project is a Netflix clone built using the MERN stack (MongoDB, Express.js, React, Node.js). The application features user authentication, movie browsing and playback.
## Features
- User Authentication (Sign Up, Sign In, Sign Out)
- Browse Movies and TV Shows
- Play Trailers using YouTube Integration

## Technologies Used
- **Frontend**: React.js, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Others**: JWT for authentication, Axios for API calls

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running locally or MongoDB Atlas for cloud database
- Ngrok (for HTTPS setup locally)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/netflix-clone.git
    cd netflix-clone
    ```

2. **Install server dependencies:**
    ```bash
    cd backend
    npm install
    ```

3. **Install client dependencies:**
    ```bash
    cd ../frontend
    npm install
    ```

4. **Set up environment variables:**
    Create a `.env` file in the `backend` directory with the following contents:
    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

5. **Start the backend server:**
    ```bash
    cd backend
    npm start
    ```

6. **Start the frontend server:**
    ```bash
    cd ../frontend
    npm start
    ```

7. **Set up HTTPS for local development (Optional):**
    Install ngrok and run the following command to serve your local development server over HTTPS:
    ```bash
    ngrok http 3000
    ```
    Update your `package.json` to start your development server with HTTPS:
    ```json
    "scripts": {
      "start": "HTTPS=true react-scripts start"
    }
    ```

## Usage
1. **Sign Up / Sign In:**
    - Access the application through `http://localhost:3000`.
    - Create an account or sign in with existing credentials.

2. **Browse Movies and TV Shows:**
    - Use the navigation links to browse different categories.

3. **Play Trailers:**
    - Click on the "Play Trailer" button to watch a trailer.

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request
