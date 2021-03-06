var React = require('react');
var CartListItemView = require('./CartListItemView');
var CartAction = require('../actions/CartAction');

var getItems = function (products) {
    var i,
        items = [];

    for (i in products) {
        if (products.hasOwnProperty(i)) {
            items.push(<CartListItemView type={products[i][0].type} price={products[i][0].price} count={products[i].length}/>);
        }
    }

    return items;
};

var CartListView = React.createClass({

    render: function() {
        var items = getItems(this.props.items);

        return <div className="cartListView">
            <h3>{this.props.name}</h3>
            <div className="itemsList">
                {items}
            </div>
            <button name="removeButton" className="removeButton" onClick={this._onClick}>Clear Cart</button>
        </div>;
    },

    _onClick: function (e) {
        e.preventDefault();

        CartAction.clearCart();
    }
});

module.exports = CartListView;