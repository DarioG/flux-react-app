var React = require('react');

var CartListItemView = React.createClass({

    render: function() {
        return <p className="cartListItemView">
            <div>{this.props.type}</div>
            <div>{this.props.price}</div>
        </p>;
    }
});

module.exports = CartListItemView;