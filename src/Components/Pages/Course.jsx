import React from 'react';

const cursos = [
	{
		"id": 1,
		"title": "React desde cero",
		"image": "https://placeimg.com/480/320/tech",
		"price": "26USD"
	},
	{
		"id": 2,
		"title": "HTML",
		"image": "https://placeimg.com/480/320/nature",
		"price": "15USD"
	},
	{
		"id": 3,
		"title": "JS",
		"image": "https://placeimg.com/480/320/people",
		"price": "32USD"
	},
	{
		"id": 4,
		"title": "CSS",
		"image": "https://placeimg.com/480/320/arch",
		"price": "22USD"
	}
]

const Course = ({match}) => {

	const cursoActual = cursos.filter( curso => curso.id ===+match.params.id)[0];

	return(
		cursoActual? (
		<div className="ed-grid m-grid-3">
			<h1 className="m-cols-3">{cursoActual.title}</h1>
			<img className="m-cols-2" src={cursoActual.image} alt="imagen" />
			<p className="m-cols-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus asperiores amet nulla esse repudiandae ex magni cupiditate est ipsum. Quo consectetur dolorum, assumenda dolore ipsum totam, ratione nulla voluptatum?</p>
		</div>
		)
		:
		<h2 className="ed-grid">El curso no existe</h2>
	)
};

export default Course;