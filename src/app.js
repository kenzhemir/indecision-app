console.log("App.js is running");

// JSX - Javascript XML
const app = {
    title: "Indecision App",
    subtitle: "Put your life in hands of a computer",
    options: ["One", "Two"]
} 
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options && app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const user = {
    name: "Miras",
    age: "22",
    location: "Tartu"
}

function getLocation(location) {
    if (location) return <p>Location: {location}</p>
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >=18) && <p>Age: {user.age} </p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
