var React = require('react');

var TotalView = React.createClass({

    render: function() {
        var total = 0;

        return <div className="totalView">
            <span>Total: </span><span>{total} EUR</span>
        </div>;
    }
});

module.exports = TotalView;