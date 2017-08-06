import "./Profile.scss";
import React from "react";
import propTypes from "prop-types";

class Profile extends React.Component {
	render() {
		const { user } = this.props;
		const { images, firstName, lastName } = user;

		return (
			<div className="Profile">
				<img src={images[0].small} className="Profile-picture"/>
				<div className="Profile-name">
					{firstName} {lastName}
				</div>
			</div>
		);
	}
}

Profile.propTypes = {
	user: propTypes.shape({
		firstName: propTypes.string,
		lastName: propTypes.string,
		images: propTypes.arrayOf(propTypes.shape({
			small: propTypes.string,
			large: propTypes.string,
		}))
	}).isRequired,
}

export default Profile;
