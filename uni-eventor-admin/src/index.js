import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';

// Page components
import HomePage from './views/HomePage.jsx';
import EventsPage from './views/EventsPage.jsx';
import EventPage from './views/EventPage.jsx';
import Profile from './views/Profile.jsx';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      
      <Route path="events" component={EventsPage} />
      <Route path="event/:eventId" component={EventPage} />
	    <Route path="profile/:userId" component={Profile} />
    </Route>
  </Router>,
  document.getElementById('root')
);