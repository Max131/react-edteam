import React from 'react';
import CourseCard from '../Molecules/CourseCard';

const courses = [
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

const CourseGrid = () => (
		<div className="ed-grid m-grid-3">
 	{
			courses.map(curso => <CourseCard key={curso.id} id={curso.id} title={curso.title} image={curso.image} price={curso.price} />)
	}
 		</div>
	)

export default CourseGrid;