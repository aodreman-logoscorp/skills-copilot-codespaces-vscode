// Create web server
const express = require('express');
const app = express();

// Create a route for the comments page
app.get('/comments', (req, res) => {
  res.json({ comments: [
    { username: 'Tammy', comment: 'lololol' },
    { username: 'FishBoi', comment: 'soooo funny' },
    { username: 'Lovergirl', comment: 'kissy face' }
  ]});
});

// Start the server
app.listen(4001, () => {
  console.log('Server is up and running on http://localhost:4001/comments');
});

// redo commit

