// See my CSS for what types are valid
import "./AlertMessage.scss";
import React from "react";
import PropTypes from "prop-types";

class AlertMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { closed: false };
	}

	_handleClose = () => {
		this.setState({ closed: true });
	}

	render() {
		if (this.state.closed) {
			return null;
		}

		const { type, children } = this.props;

		return (
			<div className={`AlertMessage AlertMessage--${type}`}>
				{children}
				<button className="AlertMessage-close" onClick={this._handleClose}>
					X
				</button>
			</div>
		);
	}
}

AlertMessage.propTypes = {
	type: PropTypes.oneOf(["info","success","error"]),
}
AlertMessage.defaultProps = {
	type: "info",
}

export default AlertMessage;
