# Authentication Service

// What it does 

This Authentication Service is designed to encode and decode messages securely. Built using Node.js and Express, it provides a straightforward RESTful API for interacting with text data securely.




Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/download/)
- npm (comes with Node.js)

### Installation Instructions

// Clone the repo

1. Open your IDE (e.g., Visual Studio Code).
2. Open the terminal in your IDE:
   - **Visual Studio Code**: Use the shortcut `Ctrl+`` or navigate to `Terminal` > `New Terminal` from the top menu.
3. Type the following command in the terminal and press Enter:
   ```bash
   git clone https://your-repository-url.git

Step 2: Install Dependencies

	1.	In the terminal, navigate to the project directory by typing: cd AuthenticationService

    2.	Install the required npm packages by typing:
    npm install

Step 3: Start the Server

	1.	In the terminal, start the server by typing:
    node server.js

	2.	Confirm the server is running. You should see output that says: Server running on port 3001

// Accessing the API

	1.	Open a web browser or a tool like Postman for making HTTP requests.
	2.	Use the base URL http://localhost:3001 to access the API.

// Making Requests

// Encode a Message

	1.	Go to Postman.

	2.	Set up a new POST request with the URL:
    http://localhost:3001/api/encode

    3.	In the ‘Body’ tab, select ‘raw’ and then choose ‘JSON’ from the dropdown menu.

	4.	Type the following JSON into the body:
    {
  "message": "Hello World"
}

    5.	Click Send. The response will display the encoded message.

// Decode a Message

	1.	Set up a new POST request in Postman with the URL:
    http://localhost:3001/api/decode

    2.	In the ‘Body’ tab, ensure ‘raw’ and ‘JSON’ are selected.

	3.	Enter the encoded message received from the previous step:

    {
  "encoded_message": "encoded output from previous step"
}

    4.	Click Send. The response will display the original message.
