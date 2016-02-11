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
    _getButton: function (selectedProduct) {
        if (!_selectedProduct || _selectedProduct.remains > 0) {
            return <input type="submit" value="Add to cart" className="addToCartButton" onClick={this._onClick} />;
        } else {
            return <input type="submit" value="Sold out" className="addToCartButton" onClick={this._onClick} disabled />
        }
    },

    render: function() {
        var currentPrice = 0;

        _selectedProduct = getSelectedProduct(this.props.data, this.props.selected);

        if (_selectedProduct) {
            currentPrice = _selectedProduct.price + "€";
        }

        return <form>
            <div className="priceWrapper">
                <label>Price: </label><input type="text" name="price" readOnly value={currentPrice}/>
            </div>
            <SelectProductView data={this.props.data} />
            {this._getButton(_selectedProduct)}
        </form>;
    },

    _onClick: function (event) {
        event.preventDefault();
        ProductAction.addToCart(_selectedProduct);
    }
});

module.exports = ProductForm;