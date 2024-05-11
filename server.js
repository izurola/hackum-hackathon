const express = require('express');
const app = express();

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Search endpoint
app.get('/search', (req, res) => {
  let keyword = req.query.keyword;
  // Perform search based on keyword
  let results = []  // Example: [{'title': 'Result 1'}, {'title': 'Result 2'}]
  res.json(results);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
