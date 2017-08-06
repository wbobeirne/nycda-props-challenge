import "./Dropdown.scss";
import React from "react";
import PropTypes from "prop-types";

class Dropdown extends React.Component {
	_handleChange = (ev) => {
		this.props.onChange(ev);
	}

	render() {
		const { name, label, options, value } = this.props;
console.log(this.props);
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
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		value: PropTypes.string,
	})),
	onChange: PropTypes.func,
	value: PropTypes.string,
};


export default Dropdown;
