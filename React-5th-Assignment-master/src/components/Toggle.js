import React from "react";
import "./Toggle.css";
import Datelogo from '../Datelogo.png';

const ToggleSwitch = ({ label,onChange }) => {
return (
	<div className="container">
		<div className="toggle-switch">
			<input type="checkbox" className="checkbox" name={label} id={label} onChange={onChange}/>
			<label className="label" htmlFor={label}>
			<span className="inner" />
			<span className="switch" />
			</label>
		</div>{" "}
		<img className='dateimg' src={Datelogo}/>
	</div>
);
};

export default ToggleSwitch;
