import React from 'react';

const persona = {"name": "John", "lastname": "Doe", "edad": 23};

const mayorDeEdad = edad => edad > 18;

const Curso = () => (
	<article class="card">
  	<div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    	<img src="https://placeimg.com/800/600/arch" alt="" />
 	  </div>
 		<div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    	<h3 class="t5 s-mb-2 s-center">
      	Programación orientada a objetos con Go
    	</h3>
    <div class="s-mb-2 s-main-center">
      <div class="card__teacher s-cross-center">
        <div class="card__avatar s-mr-1">
          <div class="circle img-container">
            	<img src="https://placeimg.com/320/200/tech" alt="" />
        	</div>
      	</div>
        	<p class="small">{`Instructor: ${persona.name} ${persona.lastname}`} &nbsp;</p>
        	<p>  {mayorDeEdad(persona.edad)? "Es mayor": "Es menor"} </p>
      	</div>
	    </div>
	    <div class="s-main-center">
	      <a class="button--ghost-alert button--tiny" href="#">$ 20USD</a>
	    </div>
	  </div>
	</article>
);

export default Curso;