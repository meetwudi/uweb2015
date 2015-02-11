var React = require('react');
var $ = require('jquery');

var Videos = React.createClass({
  getInitialState: function() {
    return {videos: []};
  },
  render: function() {
    var videoNodes = this.state.videos.map(function(video) {
      return (
        <li>#{video.id}: {video.title}</li>
      )
    });
    return (
      <ul>
        {videoNodes}
      </ul>
    );
  },
  componentDidMount: function() {
    this.fetchVideos();
  },
  fetchVideos: function() {
    $.ajax({
      url: '/data/json/videos.json',
      dataType: 'json',
      success: (data) => this.setState({videos: data})
    });
  }
});

module.exports = Videos;