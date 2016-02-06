var React = require('react');

var CartListItemView = React.createClass({

    render: function() {
        return <div className="cartListItemView">
            <div>{this.props.type}</div>
            <div>{this.props.price}</div>
        </div>;
    }
});

module.exports = CartListItemView;