var React = require('react');
var CartListView = require('./CartListView');
var TotalView = require('./TotalView');
var CartStore = require('../stores/CartStore');

function getState() {
    return {};
}

var CartView = React.createClass({

    getInitialState: function() {
        return getState();
    },

    componentDidMount: function() {
        CartStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        CartStore.removeChangeListener(this._onChange);
    },

    render: function() {
        return <div className="cartView">
            <CartListView name={this.props.name} items={this.state} />
            <TotalView items={this.state} />
        </div>;
    },

    _onChange: function() {
        this.replaceState(CartStore.getData());
    }
});

module.exports = CartView;