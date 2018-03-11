var NewItems = React.createClass({

	handleClick() {
		var name = this.refs.name.value;
		var desc = this.refs.desc.value;
		$.ajax({
			url: '/api/v1/items',
			type: 'POST',
			data: {item: {name: name, desc: desc}},
			success: (response) => {
				console.log('it worked!', response);
				this.props.handleSubmit(item);
			}
		});
	},
	render() {
		return (
			<div>
				<h1>New Item</h1>
				<input ref='name' placeholder='Enter name for the item' />
				<input ref='desc' placeholder='Enter a description' />
				<button onClick={this.handleClick}>Create</button>
			</div>
		)
	}

});
