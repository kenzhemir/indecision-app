import React from "react";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("app"));

const OptionModal = props => (
	<Modal
		isOpen={!!props.selectedOption}
		contentLabel="Selected Option"
		onRequestClose={props.handleClearOption}
		closeTimeoutMS={200}
		className="modal"
	>
		<h3 className="modal__title">Selected option</h3>
		{props.selectedOption && (
			<p className="modal__body">{props.selectedOption}</p>
		)}
		<button onClick={props.handleClearOption}>Ok</button>
	</Modal>
);

export default OptionModal;
