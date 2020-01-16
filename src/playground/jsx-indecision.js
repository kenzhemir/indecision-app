console.log("App.js is running");

// JSX - Javascript XML
const app = {
    title: "Indecision App",
    subtitle: "Put your life in hands of a computer",
    options: ["One", "Two"]
} 

const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = "";
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option)
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options && app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <ol>
                {app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
}

render();