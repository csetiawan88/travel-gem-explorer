const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({
  helpers: require('handlebars-helpers')(),
});
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// initialize session
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use('/public', express.static(path.join(__dirname, 'public')));

// Configure Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Handling the login form submission
app.post('/login', (req, res) => {
  // Handle login logic here
});

// Handling the signup form submission
app.post('/signup', (req, res) => {
  // Handle signup logic here
});

app.get('/', (req, res) => {
  const pageTitle = 'Home';
  let modalTitle = 'Login or Sign Up'; // Default modal title

  // Check if the request contains an action parameter (login or signup)
  if (req.query.action) {
    if (req.query.action === 'login') {
      modalTitle = 'Login';
    } else if (req.query.action === 'signup') {
      modalTitle = 'Sign Up';
    }
  }

  res.render('homepage', { pageTitle, modalTitle });
});

app.get('/add-new', (req, res) => {
  const pageTitle = 'Add New Destination';
  //   const loggedIn = req.isAuthenticated();

  res.render('add-new', {
    pageTitle,
    // , loggedIn
  });
});

app.get('/destination/:id', async (req, res) => {
  try {
    // Fetch destination data using the :id parameter
    const destinationId = req.params.id;
    // Fetch destination data from the database using the ID

    // For now, let's assume destinationData contains the necessary data
    const destinationData = {
      name: 'Destination Name',
      location: 'Destination Location',
      description: 'Destination Description',
      // ... other data
    };

    res.render('destination', destinationData);
  } catch (error) {
    console.error('Error fetching destination data:', error);
    res.status(500).send('An error occurred while fetching destination data.');
  }
});

// Start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


