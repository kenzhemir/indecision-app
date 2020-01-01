const app = {
    visibility: false
};

const toggleDetails = (e) => {
    app.visibility = !app.visibility;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility toggle</h1>
            <button onClick={toggleDetails}>
                {app.visibility ? "Hide" : "Show" } details
            </button>
            {app.visibility && <p>This are some details</p> }
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
}

render();