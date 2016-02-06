var React = require('react');
var CartListItemView = require('./CartListItemView');

function getItems (products) {
    var i,
        items = [];

    debugger;
    for (i in products) {
        items.push(<CartListItemView type={products[i][0].type} price={products[i][0].price} />);
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
            <button name="removeButton" className="removeButton">Remove</button>
        </div>;
    }
});

module.exports = CartListView;