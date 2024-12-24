const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Basic route
app.get("/", (req, res) => {
	res.send("Hello, World! Welcome to the Node.js app!");
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
