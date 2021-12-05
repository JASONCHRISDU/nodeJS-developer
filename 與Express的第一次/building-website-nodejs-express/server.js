const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const FeedbackService = require('./services/FeedbackService');
const SpeakersService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakersService = new SpeakersService('./data/speakers.json');

const routes = require('./routes');

const app = express();
const port = 3310;

app.set('trust proxy', 1);
app.use(
  cookieSession({
    name: 'session',
    keys: ['JPON', 'JCDU'],
  }),
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.locals.siteName = 'JPon Crazy';

app.use(express.static(path.join(__dirname, './static')));

app.use( async (req, res, next) => {
  try {
    const names = await speakersService.getNames();
    res.locals.speakerNames = names;
    console.log(res.locals);
  } catch (err) {
    return next(err);
  }
  res.locals.someVaribale = 'hello';
  return next();
});

app.use(
  '/',
  routes({
    feedbackService,
    speakersService,
  }),
);

app.listen(port, () => {
  global.console.log(`------------------ express turn on ${port}`);
});
