import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import useCourse from '../CustomHooks/useCourse.js';

// const cursos = [
// 	{
// 		"id": 1,
// 		"title": "React desde cero",
// 		"image": "https://placeimg.com/480/320/tech",
// 		"price": "26USD"
// 	},
// 	{
// 		"id": 2,
// 		"title": "HTML",
// 		"image": "https://placeimg.com/480/320/nature",
// 		"price": "15USD"
// 	},
// 	{
// 		"id": 3,
// 		"title": "JS",
// 		"image": "https://placeimg.com/480/320/people",
// 		"price": "32USD"
// 	},
// 	{
// 		"id": 4,
// 		"title": "CSS",
// 		"image": "https://placeimg.com/480/320/arch",
// 		"price": "22USD"
// 	}
// ]

const Course = ({match}) => {

	// const [course, setCourse] = useState({});
	const [comment, setComment] = useState("Sin comentarios");

	const course = useCourse(match.params.id);

	// useEffect(() => {
	// 	axios.get(`https://my-json-server.typicode.com/max131/react-json-api/cursos/${match.params.id}`)
	// 	.then(res => setCourse(res.data));
	// }, []);

	const myComment = e =>{
		setComment(e.target.value);
	}

	return(
		course? (
		<div className="ed-grid">
			<div className="l-block">
				<h1 className="m-cols-3">{course.title}</h1>
				<img className="m-cols-2" src={course.image} alt="imagen" />
				<p className="m-cols-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus asperiores amet nulla esse repudiandae ex magni cupiditate est ipsum. Quo consectetur dolorum, assumenda dolore ipsum totam, ratione nulla voluptatum?</p>
			</div>
			<div className="ed-grid">
				<h2>Comentarios:</h2>
				<input type="text" onChange={myComment.bind(this)} />
				<p>{comment}</p>
			</div>
		</div>
		)
		:
		<h2 className="ed-grid">El curso no existe</h2>
	)
};

// Componente con Class para usar el "state"
//
// export default class Course extends React.Component{
// 	constructor(props){
// 		super(props);

// 		this.state = {
// 			cursoActual: {}
// 		}
// 	}

// 	componentDidMount(){
// 		axios.get(`https://my-json-server.typicode.com/max131/react-json-api/cursos/${this.props.match.params.id}`)
// 		.then(res => this.setState({
// 				cursoActual: res.data
// 			})
// 		);
// 	}

// 	render(){
// 		return(
// 				this.state.cursoActual
// 				?
// 					<div className="ed-grid m-grid-3">
// 						<h1 className="m-cols-3">{this.state.cursoActual.title}</h1>
// 						<img className="m-cols-2" src={this.state.cursoActual.image} alt={this.state.cursoActual.title} />
// 						<p className="m-cols-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus asperiores amet nulla esse repudiandae ex magni cupiditate est ipsum. Quo consectetur dolorum, assumenda dolore ipsum totam, ratione nulla voluptatum?</p>
// 					</div>
// 			 	:
// 			 		<h>El curso no existe</h>
// 		);
// 	}

// }

export default Course;