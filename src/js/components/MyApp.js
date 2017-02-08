import React from 'react';

var MyApp = React.createClass({
	render: function () {
		return (
			<div>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
});

export default MyApp;