var React = require('react');
var Router = require('react-router');
var Dashboard = require('./dashboard');
var Instructor = require('./instructor');
var Videos = require('./videos');


var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>My application</h1>
        <ul>
          <li><Router.Link to="app">Dashboard</Router.Link></li>
          <li><Router.Link to="instructor">Instructor</Router.Link></li>
          <li><Router.Link to="videos">Videos</Router.Link></li>
        </ul>
        <Router.RouteHandler/>
      </div>
    );
  }
});


var routes = (
  <Router.Route name="app" path="/" handler={App}>
    <Router.Route name="instructor" handler={Instructor}/>
    <Router.Route name="videos" handler={Videos}/>
    <Router.DefaultRoute handler={Dashboard}/>
  </Router.Route>
);


Router.run(routes, function(Handler) {
  React.render(
    <Handler />,
    document.getElementById('app')
  );
});
