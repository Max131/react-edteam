import React from 'react';
import axios from 'axios';
import UsersGrid from '../Organisms/UsersGrid';

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
		return <UsersGrid users={users } />;
	}
}