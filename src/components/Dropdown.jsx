import "./Dropdown.scss";
import React from "react";
import propTypes from "prop-types";

class Dropdown extends React.Component {
	_handleChange = (ev) => {
		this.props.onChange(ev);
	}

	render() {
		const { name, label, options, value } = this.props;

		return (
			<label className="Dropdown">
				<span className="Dropdown-label">{label}</span>
				<select
					className="Dropdown-select"
					name={name}
					onChange={this._handleChange}
					value={value}
				>
					{options.map((option) => {
						return (
							<option key={option.value} value={option.value}>
								{option.name}
							</option>
						);
					})}
				</select>
			</label>
		);
	}
}

Dropdown.propTypes = {
	name: propTypes.string,
	label: propTypes.string,
	options: propTypes.arrayOf(propTypes.shape({
		value: propTypes.string,
		name: propTypes.string,
	})).isRequired,
	value: propTypes.string,
}

Dropdown.defaulProps = {
	name: "dropdown",
	label: "Dropdown",
	value: "dropdown",
}


export default Dropdown;
