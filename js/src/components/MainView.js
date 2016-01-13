var React = require('react');
var ProductView = require('./ProductView');
var CartView = require('./CartView');

var MainView = React.createClass({
    render: function() {
        return <div className="componentsWrapper">
            <ProductView data={this.props.data}/>
            <CartView name={this.props.data.name} />
        </div>;
    }
});

module.exports = MainView;