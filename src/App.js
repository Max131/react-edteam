// import React, {Fragment} from 'react';
import React, {Fragment} from 'react';
import './styles/styles.scss';
import Curso from './Curso';

const cursos = [
	{
		"title": "React desde cero",
		"image": "https://placeimg.com/480/320/tech",
		"price": "26USD"
	},
	{
		"title": "HTML",
		"image": "https://placeimg.com/480/320/nature",
		"price": "15USD"
	},
	{
		"title": "JS",
		"image": "https://placeimg.com/480/320/people",
		"price": "32USD"
	},
	{
		"title": "CSS",
		"image": "https://placeimg.com/480/320/arch",
		"price": "22USD"
	}
]

const App = () => (
	// <Fragment>
	// 	<div>
	// 		<h1 classNameName="first">Hola World!</h1>
	// 		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam hic dolor iste voluptatem, vitae dolorum tenetur numquam doloremque officia ipsum illo sapiente consequatur non eveniet veritatis. Maxime, tenetur, accusamus.</p>
	// 	</div>
	// 	<div>
	// 		<h1>Hola World!</h1>
	// 		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam hic dolor iste voluptatem, vitae dolorum tenetur numquam doloremque officia ipsum illo sapiente consequatur non eveniet veritatis. Maxime, tenetur, accusamus.</p>
	// 	</div>
	// 	<img src="https://placeimg.com/320/200/nature" />
	// </Fragment>
	<>
		<div className="main-banner img-container l-section" id="main-banner">
	  <div className="ed-grid lg-grid-6">
	    <div className="lg-cols-4 lg-x-2">
	      <img className="main-banner__img" src="https://placeimg.com/320/200/nature" alt="" />
	      <div className="main-banner__data s-center">
	        <p className="t2 s-mb-0">Título del banner</p>
	        <p> Subtítulo del banner</p>
	        <a href="https://google.com" className="button">Botón del banner</a>
	      </div>
		    </div>
		  </div>
		</div>
	<div className="ed-grid m-grid-3">
		{
			cursos.map(curso => <Curso title={curso.title} image={curso.image} price={curso.price} />)
		}
 	</div>
	</>
	);

export default App;
