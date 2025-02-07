import React, {
	Component
} from 'react';

class Dialog extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		var len = this.props.nums;
		var newid = len > 0 ? len : 0;
		var value = this.refs.myText.value;
		if (e.keyCode === 13) {
			if (value !== '') {
				var obj = {
					id: newid,
					name: value,
					status: 0
				};
				this.refs.myText.value = '';
				this.props.addNewTask(obj);
			}
		}
	}

	render() {
		return (

			<
			div className = "dialog" >
			<
			div >
			<
			h3 > Todolist < /h3> <
			input type = "text"
			ref = "myText"
			onKeyDown = {
				this.handleClick
			}
			placeholder = "你想做点什么" / >
			<
			/div> <
			/div>

		);
	}
}

export default Dialog;