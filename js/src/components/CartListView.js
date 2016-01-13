var React = require('react');
var CartListItemView = require('./CartListItemView');

var CartListView = React.createClass({

    render: function() {
        var items = this.props.items.map(function (item) {
            return <CartListItemView type={item.type} price={item.price} /> 
        });

        return <div className="cartListView">
            <h3>{this.props.name}</h3>
            <div className="itemsList">
                {items}
            </div>
            <button name="removeButton" className="removeButton">Remove</button>
        </div>;
    }
});

module.exports = CartListView;