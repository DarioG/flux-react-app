var React = require('react');

var AddToCartButton = React.createClass({

  render: function() {
    var options = this.props.data.map(function (variant) {
        return <option value="{variant.type}" data-sku="{variant.sku}">{variant.type}</option>
    });

    return <select className="select-product-view">
        {options}
    </select>
    }
});

module.exports = AddToCartButton;