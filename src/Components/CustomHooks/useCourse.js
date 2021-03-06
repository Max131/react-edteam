import {useState, useEffect} from 'react';
import axios from 'axios';

const useCourse = id => {

	const [course, setCourse] = useState({});

	useEffect(() => {
		axios.get(`https://my-json-server.typicode.com/max131/react-json-api/cursos/${id}`)
		.then(res => setCourse(res.data));
	}, []);

	return  course;
}

export default useCourse;