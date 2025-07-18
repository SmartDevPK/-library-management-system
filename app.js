const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sample Book Data
let books = [
  {
    bookName: "Michael Emmanuel",
    bookAuthor: "Jeff Michael",
    bookPages: 200,
    bookPrice: 240,
    bookState: "Available"
  },
  
];

// Home Route - Display Books
app.get('/', (req, res) => {
  res.render('home', { data: books });
});

// Add Book Route
app.post('/', (req, res) => {
  const newBook = {
    bookName: req.body.bookName,
    bookAuthor: req.body.bookAuthor,
    bookPages: req.body.bookPages,
    bookPrice: req.body.bookPrice,
    bookState: 'Available'
  };

  // Issues Book Route

  app.post('/issue', (req, res) => {
    
  })

  books.push(newBook);
  res.render('home', { data: books });
});

// Start Server
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
