var React = require('react');
var SelectProductView = require('./SelectProductView');

var ProductForm = React.createClass({

  render: function() {
    return <form>
            <div className="priceWrapper">
                Price: <input type="text" name="price" readOnly />
            </div>
            <SelectProductView data={this.props.data} />
            <input type="submit" value="Add to cart" className="addToCartButton" />
        </form>
    }
});

module.exports = ProductForm;