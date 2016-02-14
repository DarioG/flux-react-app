var ajax = {
    get: function (dest, callback, scope) {
        var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState === 4 && xhttp.status === 200) {
                  callback.call(scope, JSON.parse(xhttp.responseText));
                }
            };
            xhttp.open('GET', dest, true);
            xhttp.send();
    }
};

module.exports = ajax;