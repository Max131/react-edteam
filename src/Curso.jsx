import React from 'react';
import PropTypes from 'prop-types';

const persona = {"name": "John", "lastname": "Doe", "edad": 23};

const mayorDeEdad = edad => edad > 18;

const curso = {
	"title": "React desde cero",
	"image": "https://placeimg.com/480/320/nature",
	"price": "10USD"
}

// const Curso = props => (
const Curso = ({title, image, price}) => (
	<article className="card">
  	<div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    	{/*<img src={props.image} alt={props.title} />*/}
    	
    	<img src={image? image : ''} alt={title? title: 'No title'} />


 	  </div>
 		<div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    	<h3 className="t5 s-mb-2 s-center">
      	{title}
    	</h3>
    <div className="s-mb-2 s-main-center">
      <div className="card__teacher s-cross-center">
        <div className="card__avatar s-mr-1">
          <div className="circle img-container">
            	<img src="https://placeimg.com/320/200/tech" alt="" />
        	</div>
      	</div>
        	<p className="small">{`Instructor: ${persona.name} ${persona.lastname}`} &nbsp;</p>
        	<p>  {mayorDeEdad(persona.edad)? "Es mayor": "Es menor"} </p>
      	</div>
	    </div>
	    <div className="s-main-center">
	      <a className="button--ghost-alert button--tiny" href="#">$ {price}</a>
	    </div>
	  </div>
	</article>
);

Curso.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.string
}

Curso.defaultProps = {
	title: "No hay título",
	image: "https://placeimg.com/480/320/animals",
	price: "00"
}

export default Curso;