import React from 'react';
import CourseCard from '../Molecules/CourseCard';
import withLoader from '../HOC/withLoader';

const CourseGrid = ({courses}) => (

	<div className="ed-grid m-grid-3">
	 		{
	 			courses.map(curso => <CourseCard key={curso.id} id={curso.id} title={curso.title} image={curso.image} price={curso.price} />)
			}
 		</div>

);

export default withLoader("courses", CourseGrid);