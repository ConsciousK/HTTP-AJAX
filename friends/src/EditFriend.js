import React from "react"
import axios from "axios"

class EditFriend extends React.Component {
	state = {
		name: '',
		age: '',
		email: '',
		id:'',
        errorMessage: null
	}

	componentDidMount() {
		const id = this.props.match.params.id

		axios.get(`http://localhost:5000/friend/${id}`)
			.then(response => {
				const { name, age, email, id } = response.data
				this.setState({ name, age, email, id })
			})
            .catch(err => {
                console.log('Error', err) 
            }
        )
	}

	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		})
	}

	updateFriend = (evt) => {
		evt.preventDefault()
		const { name, age, email, id } = this.state
		const payload = { name, age, email, id }
		
		axios.put(`http://localhost:5000/friend/${id}`, payload)
			.then((response) => {
				this.setState({
					errorMessage: null
				})
				
				this.props.updateItems(response.data)
				this.props.history.push("/friendslist")
			})
            .catch(err => {
                console.log('Error', err) 
            }
        )
	}

	deleteItem = (evt) => {
		evt.preventDefault()

		axios.delete(`http://localhost:5000/friend/${this.props.id}`)
			.then((response) => {
				this.setState({
					errorMessage: null
				})

				this.props.updateItems(response.data)
				this.props.history.push("/friend")
			})
            .catch(err => {
                console.log('Error', err) 
            }
        )
	}

	render() {
		const { name, age, email } = this.state

		return (
			<form onSubmit={this.updateFriend}>
				<h1>Edit Friend</h1>

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