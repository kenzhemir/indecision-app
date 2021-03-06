class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.state = {
			options: []
		};
	}
	componentDidMount() {
		try {
			console.log("fetching data");
			const json = localStorage.getItem("options");
			const options = JSON.parse(json);
			if (options) {
				this.setState(() => ({ options }));
			}
		} catch (e) {
			// nothing
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length != this.state.options.length) {
			console.log("saving data");
			const json = JSON.stringify(this.state.options);
			localStorage.setItem("options", json);
		}
	}
	componentWillUnmount() {
		console.log("cwu");
	}
	handleDeleteOptions() {
		this.setState(() => ({ options: [] }));
	}
	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	}
	handleDeleteOption(optionToRemove) {
		this.setState(prevState => ({
			options: prevState.options.filter(option => option != optionToRemove)
		}));
	}
	handleAddOption(option) {
		if (!option) {
			return "Enter valid value to add item";
		} else if (this.state.options.indexOf(option) > -1) {
			return "This option is already in the list";
		}
		this.setState(prevState => ({ options: prevState.options.concat(option) }));
	}
	render() {
		const subtitle = "Put your life in the hands of the computer";
		return (
			<div>
				<Header subtitle={subtitle} />
				<Action
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}

IndecisionApp.defaultProps = {
	options: []
};

const Header = props => (
	<div>
		<h1>{props.title}</h1>
		{props.subtitle && <h2>{props.subtitle}</h2>}
	</div>
);

Header.defaultProps = {
	title: "Indecision"
};

const Action = props => (
	<div>
		<button onClick={props.handlePick} disabled={!props.hasOptions}>
			What should I do?
		</button>
	</div>
);

const Options = props => (
	<div>
		<button onClick={props.handleDeleteOptions}>Remove all</button>
		{props.options.length === 0 && <p>Please add an option to get started</p>}
		{props.options.map(option => (
			<Option
				key={option}
				optionText={option}
				handleDeleteOption={e => props.handleDeleteOption(option)}
			/>
		))}
	</div>
);

const Option = props => (
	<div>
		{props.optionText}
		<button onClick={props.handleDeleteOption}>Remove</button>
	</div>
);

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: undefined
		};
		this.handleAddOption = this.handleAddOption.bind(this);
	}
	handleAddOption(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);
		this.setState(() => ({ error }));
		if (!error) e.target.elements.option.value = "";
	}
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
