import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
alert('react ugoiteruuuuu');
var Test = React.createClass({
  render: function() {
    return (
      <div className="test">
        Test Site
      </div>
    );
  }
});

ReactDOM.render(
  <Test />,
  document.getElementById('root')
);