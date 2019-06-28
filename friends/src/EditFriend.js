import React from "react"
import axios from "axios"

class EditFriend extends React.Component {
	state = {
		name: '',
		age: '',
        email: '',
        errorMessage: null
	}

	componentDidMount() {
		const id = this.props.match.params.id

		axios.get(`http://localhost:3333/items/${id}`)
			.then(response => {
				const { name, age, email } = response.data
				this.setState({ name, age, email })
			})
			.catch(err => {
				this.setState({
					errorMessage: err.response.data.error
				})
			})
	}

	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		})
	}

	updateItem = (evt) => {
		evt.preventDefault()

		const id = this.props.match.params.id
		const { name, age, email } = this.state
		const payload = { name, age, email }
		
		axios.put(`http://localhost:3333/friendslist/${id}`, payload)
			.then((response) => {
				this.setState({
					errorMessage: null
				})
				
				this.props.updateItems(response.data)
				this.props.history.push("/friendslist")
			})
			.catch((err) => {
				this.setState({
					errorMessage: err.response.data.error
				})
			})
	}

	deleteItem = (evt) => {
		evt.preventDefault()

		const id = this.props.match.params.id

		axios.delete(`http://localhost:5000/friendslist/${id}`)
			.then((response) => {
				this.setState({
					errorMessage: null
				})

				this.props.updateItems(response.data)
				this.props.history.push("/friends")
			})
			.catch((err) => {
				this.setState({
					errorMessage: err.response.data.error
				})
			})
	}

	render() {
		const { name, age, email } = this.state

		return (
			<form onSubmit={this.updateItem}>
				<h1>Edit Trinket</h1>

				<p>{this.errorMessage}</p>

				<input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
				<input type="text" name="age" placeholder="Age" value={age} onChange={this.handleChange} />
				<input type="text" name="email" placeholder="Email" value={email} onChange={this.handleChange} />


				<button type="submit">Save</button>
				<button onClick={this.deleteItem}>Delete</button>
			</form>
		)
	}
}

export default EditFriend