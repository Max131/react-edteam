import React from 'react';

const Banner = ({title, subtitle}) => (

<div className="main-banner img-container" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" src="https://picsum.photos/480/320" />
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">{title}</p>
        <p>{subtitle}</p>
        <a href="#" className="button">Botón del banner</a>
      </div>
    </div>
  </div>
</div>


);

export default Banner;