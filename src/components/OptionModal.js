import React from "react";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("app"));

const OptionModal = props => (
	<Modal
		isOpen={!!props.selectedOption}
		contentLabel="Selected Option"
		onRequestClose={props.handleClearOption}
	>
		<h3>Selected option</h3>
		{props.selectedOption && <p>{props.selectedOption}</p>}
		<button onClick={props.handleClearOption}>Ok</button>
	</Modal>
);

export default OptionModal;
