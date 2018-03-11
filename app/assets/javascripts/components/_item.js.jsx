var Item = React.createClass({

	getInitialState() {
		return {editable: false}
	},
	handleEdit() {
		this.setState({editable: !this.state.editable});
		if(this.state.editable){
			var name = this.refs.name.value;
			var desc = this.refs.desc.value;
			var id = this.props.item.id;
			var item = {name: name, desc: desc};
			this.props.handleUpdate(item);
		}

	},
	render() {

		var name = this.state.editable ?
								<input type='text' ref='name' defalutValue={this.props.item.name} /> :
								<h3>{this.props.item.name}</h3>

		var desc = this.state.editable ?
								<input type='text' ref='desc' defalutValue={this.props.item.desc} /> :
								<h3>{this.props.item.decs}</h3>


		return (
			<div>
				<h3>{name}</h3>
				<p>{desc}</p>
				<button onClick={this.props.handleDelete} >Delete</button>
				<button onClick={this.props.handleEdit} >{ this.state.editable ? 'Edit' : 'Submit' }</button>
			</div>
		)
	}
})