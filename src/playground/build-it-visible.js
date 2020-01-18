class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
	}
	handleToggleVisibility() {
		this.setState(({ visible }) => ({ visible: !visible }));
	}
	render() {
		return (
			<div>
				<h1>Visibility toggle</h1>
				<button onClick={this.handleToggleVisibility}>
					{this.state.visible ? "Hide" : "Show"} details
				</button>
				{this.state.visible && <p>This are some details</p>}
			</div>
		);
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
// const app = {
// 	visibility: false
// };

// const toggleDetails = e => {
// 	app.visibility = !app.visibility;
// 	render();
// };

// const render = () => {
// 	const template = (
// 		<div>
// 			<h1>Visibility toggle</h1>
// 			<button onClick={toggleDetails}>
// 				{app.visibility ? "Hide" : "Show"} details
// 			</button>
// 			{app.visibility && <p>This are some details</p>}
// 		</div>
// 	);

// 	ReactDOM.render(template, document.getElementById("app"));
// };

// render();
