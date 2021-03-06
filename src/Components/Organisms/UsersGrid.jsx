import React from 'react';
import UserCard from '../Molecules/UserCard';
import withLoader from '../HOC/withLoader';

const UsersGrid = ({users}) => (

	<div className="ed-grid">
		<h1>Usuarios</h1>
		<div className="ed-grid s-grid-1 m-grid-2 l-grid-4">
		{
			users.map(user => <UserCard key={user.id} name={user.name} username={user.username} email={user.email} />)
		}
		</div>
	</div>	
);

export default withLoader('users', UsersGrid);