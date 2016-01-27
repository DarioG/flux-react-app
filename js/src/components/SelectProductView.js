var React = require('react');
var ProductAction = require('../actions/ProductAction');

var SelectProductView = React.createClass({

    render: function() {
        var options = this.props.data.map(function (variant) {
            return <option value={variant.type} data-sku={variant.sku}>{variant.type}</option>
        });

        return <select className="select-product-view" onChange={this._onChange}>
            {options}
        </select>;
    },

    _onChange: function (event) {
        var select = event.target;

        ProductAction.selectProduct(select.options[select.selectedIndex].dataset.sku);
    }
});

module.exports = SelectProductView;