import React from 'react';
import CourseCard from '../Molecules/CourseCard';

const CourseGrid = ({courses}) => (

	<div className="ed-grid m-grid-3">
	 		{
	 			courses.length === 0
	 				? <h1 className="t3">Cargando...</h1>
					: courses.map(curso => <CourseCard key={curso.id} id={curso.id} title={curso.title} image={curso.image} price={curso.price} />)
			}
 		</div>

);

export default CourseGrid;