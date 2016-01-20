var React = require('react');
var MainView = require('./components/MainView');
var ProductAction = require('./actions/ProductAction');

React.render(
  <MainView />,
  document.getElementById('main')
)

ProductAction.loadData();