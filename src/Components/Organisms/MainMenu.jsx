import React from 'react';
import { NavLink } from 'react-router-dom';

const MainMenu = () => (

	<header className="main-header">
		<div className="ed-grid s-grid-5 lg-grid-4">
			<div className="s-cols-4 l-cols-1 s-cross-center">
				<h4>Menu</h4>
			</div>
			<div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
				<nav className="main-menu" id="main-menu">
					<ul>
						<li><NavLink exact to="/" activeClassName="active">Inicio</NavLink></li>
						<li><NavLink to="/cursos" activeClassName="active">Cursos</NavLink></li>
						<li><NavLink to="/history" activeClassName="active">Historial</NavLink></li>
						<li><NavLink to="/usuarios" activeClassName="active">Usuarios</NavLink></li>
						<li><NavLink to="/formulario" activeClassName="active">Contacto</NavLink></li>
					</ul>
				</nav>
			</div>
		</div>
	</header>

)

export default MainMenu;