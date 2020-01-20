import React from "react";

const Option = props => (
	<div>
		{props.optionText}
		<button onClick={props.handleDeleteOption}>Remove</button>
	</div>
);

export default Option;
