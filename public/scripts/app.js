"use strict";

var app = {
    visibility: false
};

var toggleDetails = function toggleDetails(e) {
    app.visibility = !app.visibility;
    render();
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggleDetails },
            app.visibility ? "Hide" : "Show",
            " details"
        ),
        app.visibility && React.createElement(
            "p",
            null,
            "This are some details"
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

render();
