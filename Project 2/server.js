const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Configure Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const pageTitle = "Home";
//   const loggedIn = req.isAuthenticated(); 

  res.render('homepage', { pageTitle
    // , loggedIn 
});
});

app.get('/add-new', (req, res) => {
  const pageTitle = "Add New Destination";
//   const loggedIn = req.isAuthenticated(); 

  res.render('add-new', { pageTitle
    // , loggedIn 
});
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
