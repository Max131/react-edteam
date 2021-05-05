import React from 'react';
import CourseGrid from '../Organisms/CourseGrid';
import axios from 'axios';

export default class Courses extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			courses: []
		}
	}

	componentDidMount(){
		axios.get('https://my-json-server.typicode.com/max131/react-json-api/cursos')
		.then(res => this.setState({
				courses: res.data
			})
		);
}
	render(){

		const {courses} = this.state;

		return <CourseGrid courses={courses} />
	}
}

