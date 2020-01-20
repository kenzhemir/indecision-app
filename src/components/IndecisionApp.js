import React from "react";

import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";

class IndecisionApp extends React.Component {
	state = {
		options: []
	};

	handleDeleteOptions = () => {
		this.setState(() => ({ options: [] }));
	};

	handlePick = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	};

	handleDeleteOption = optionToRemove => {
		this.setState(prevState => ({
			options: prevState.options.filter(option => option != optionToRemove)
		}));
	};

	handleAddOption = option => {
		if (!option) {
			return "Enter valid value to add item";
		} else if (this.state.options.indexOf(option) > -1) {
			return "This option is already in the list";
		}
		this.setState(prevState => ({ options: prevState.options.concat(option) }));
	};

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

export default IndecisionApp;
