var React = require('react');
var CartListView = require('./CartListView');
var TotalView = require('./TotalView');

var CartView = React.createClass({

    render: function() {
        var items = [];

        return <div className="cartView">
            <CartListView name={this.props.name} items={items} />
            <TotalView items={items} />
        </div>;
    }
});

module.exports = CartView;