var React = require('react');
var SelectProductView = require('./SelectProductView');
var ProductAction = require('../actions/ProductAction');

var _selectedProduct = null;

function getSelectedProduct(products, selectedSku) {
    return products.find(function (element) {
        return element.sku === selectedSku;
    });
}

var ProductForm = React.createClass({
    render: function() {
        var currentPrice;

        _selectedProduct = getSelectedProduct(this.props.data, this.props.selected);

        currentPrice = (_selectedProduct ? _selectedProduct.price : 0) + "€";

        return <form>
            <div className="priceWrapper">
                <label>Price: </label><input type="text" name="price" readOnly value={currentPrice}/>
            </div>
            <SelectProductView data={this.props.data} />
            <input type="submit" value="Add to cart" className="addToCartButton" onClick={this._onClick}/>
        </form>;
    },

    _onClick: function (event) {
        event.preventDefault();
        ProductAction.addToCart(_selectedProduct);
    }
});

module.exports = ProductForm;