var React = require('react');
var ProductForm = require('./ProductForm');

var DescriptionView = React.createClass({

    render: function() {
        return <div className="productView"> 
          <picture className="productPicture">
            <img src={this.props.data.image}/>
          </picture>
          <section className="infoSection">
            <h2>{this.props.data.name}</h2>
            <p>{this.props.data.description}</p>
            <div>
                <ProductForm data={this.props.data.variants} />
            </div>
          </section>
        </div>;
    }
});

module.exports = DescriptionView;