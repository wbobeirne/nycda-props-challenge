import "./App.scss";
import React from "react";
import AlertMessage from "components/AlertMessage";
import Dropdown from "components/Dropdown";
import Profile from "components/Profile";

class App extends React.Component {
	render() {
		// Good component data
		const goodUser = {
			firstName: "John",
			lastName: "Smith",
			images: [{
				small: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
				large: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
			}],
		};

		const goodOptions = [{
			name: "Test 1",
			value: "test1",
		}, {
			name: "Test 2",
			value: "test2",
		}];

		// Bad component data
		const badUser = {
			name: "John Smith",
			images: ["http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"],
		};

		const badOptions = ["Test 1", "Test 2"];

		return (
			<div className="App">
				{/* Valid components */}
				<AlertMessage type="success">
					These components have the right props!
				</AlertMessage>
				<Profile user={goodUser}/>
				<Dropdown
					label="Test"
					name="test"
					value=""
					options={goodOptions}
					onChange={(ev) => console.log(ev)}
				/>

				{/* Invalid components */}
				
			</div>
		);
	}
}

export default App;
