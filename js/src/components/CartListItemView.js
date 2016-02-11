var React = require('react');

var CartListItemView = React.createClass({

    render: function() {
        return <div className="cartListItemView">
            <div className="count">{this.props.count}</div>
            <div className="productInfo">
                <div>{this.props.type}</div>
                <div>{this.props.price}</div>
            </div>
        </div>
    }
});

module.exports = CartListItemView;