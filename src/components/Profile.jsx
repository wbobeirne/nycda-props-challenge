import "./Profile.scss";
import React from "react";

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

export default Profile;
