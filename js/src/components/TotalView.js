var React = require('react');

function calculateTotal(items) {
    var total = 0,
        i,
        item;

    for (i in items) {
        if (items.hasOwnProperty(i)) {
            item = items[i];
            total += item[0].price * item.length;
        }
    }

    return total;
}

var TotalView = React.createClass({

    render: function() {
        var total = calculateTotal(this.props.items);

        return <div className="totalView">
            <span>Total: </span><span>{total} EUR</span>
        </div>;
    }
});

module.exports = TotalView;