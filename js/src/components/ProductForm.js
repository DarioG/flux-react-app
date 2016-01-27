var React = require('react');
var SelectProductView = require('./SelectProductView');

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
            <input type="submit" value="Add to cart" className="addToCartButton" />
        </form>;
    }
});

module.exports = ProductForm;