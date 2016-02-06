var React = require('react');
var SelectProductView = require('./SelectProductView');
var ProductAction = require('../actions/ProductAction');

var ProductForm = React.createClass({
    render: function() {
        var selected = this.props.selected,
            selectedProduct = this.props.data.find(function (element) {
                return element.sku === selected;
            }),
            currentPrice = (selectedProduct ? selectedProduct.price : 0) + "€";

        return <form>
            <div className="priceWrapper">
                <label>Price: </label><input type="text" name="price" readOnly value={currentPrice}/>
            </div>
            <SelectProductView data={this.props.data} />
            <input type="submit" value="Add to cart" className="addToCartButton" onClick={this._onClick}/>
        </form>;
    },

    _onClick: function (event) {
        debugger;
        var selectedProduct = this.props.data.find(function (element) {
            return element.sku === this.props.selected;
        }.bind(this));
        event.preventDefault();
        ProductAction.addToCart(selectedProduct);
    }
});

module.exports = ProductForm;