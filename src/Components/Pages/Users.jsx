import React from 'react';
import UserCard from '../Molecules/UserCard';
import axios from 'axios';

export default class Users extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			users: []
		}
	}
 
	componentDidMount(){
		// fetch('https://jsonplaceholder.typicode.com/users', {method: 'get'})
		// .then(res => res.json())
		// .then(data => this.setState({
		// 	users: data
		// }));

		axios.get('https://jsonplaceholder.typicode.com/users')
		.then(res => {
			this.setState({
				users: res.data
			})
		});

	}

	render(){
		const {users} = this.state;
		return(
				<div className="ed-grid">
					<h1>Usuarios</h1>
					<div className="ed-grid s-grid-1 m-grid-2 l-grid-4">
						{
							users.map(user => <UserCard key={user.id} name={user.name} username={user.username} email={user.email} />)
						}
					</div>
				</div>
			);
	}
}