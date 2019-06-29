import React from "react"
import axios from "axios"

class AddFriendForm extends React.Component {
	state = {
		name: '',
		age: '',
		email: '',
		errorMessage: null
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	createItem = (e) => {
		e.preventDefault()

		const { name, age, email } = this.state
		const payload = { name, age, email }
		
		axios.post("http://localhost:5000/friends", payload)
			.then((response) => {
			    this.setState({
			        errorMessage: null
			    })

			    this.props.updateFriends(response.data)
		        this.props.history.push("/friendslist")
            })
            .catch(err => {
                console.log('Error', err) 
            }
        )
    }

	render() {
		const { name, age, email } = this.state

		return (
			<form onSubmit={this.createItem}>
				<h1>Add New Friend</h1>

				<p>{this.errorMessage}</p>

				<input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
				<input type="text" name="age" placeholder="Age" value={age} onChange={this.handleChange} />
				<input type="text" name="email" placeholder="Email" value={email} onChange={this.handleChange} />

				<button type="submit">Create</button>
			</form>
		)
	}
}

export default AddFriendForm