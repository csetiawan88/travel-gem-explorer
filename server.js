const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({
  helpers: require('handlebars-helpers')(),
});
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./controllers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { User } = require('./models');

const passport = require('passport');
const flash = require('express-flash');
const initializePassport = require('./controllers/api/passport-config');

const getUserByEmail = async (email) => {
  return await User.findOne({ where: { email: email } });
};

const getUserByID = async (userId) => {
  return await User.findOne({ where: { id: userId } });
};

initializePassport(
  passport,
  getUserByEmail, // get user by email
  getUserByID // get user by ID
);

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

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Configure Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(routes);

// Start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
