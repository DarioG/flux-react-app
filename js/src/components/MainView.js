var React = require('react');
var ProductView = require('./ProductView');
var CartView = require('./CartView');
var ProducStore = require('../stores/ProductStore');

function getState() {
    return {
        'id': '',
        'name': '',
        'image': '',
        'description': '',
        'variants': []
    };
}

var MainView = React.createClass({
    getInitialState: function() {
        return getState();
    },

    componentDidMount: function() {
        ProducStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ProducStore.removeChangeListener(this._onChange);
    },

    render: function() {
        return <div className="componentsWrapper">
            <ProductView data={this.state} selected={ProducStore.getSelectedProduct()}/>
            <CartView name={this.state.name} />
        </div>;
    },

    /**
    * Event handler for 'change' events coming from the TodoStore
    */
    _onChange: function() {
        this.setState(ProducStore.getData());
    }
});

module.exports = MainView;