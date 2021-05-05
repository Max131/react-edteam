import React, {Fragment} from 'react';
import '../styles/styles.scss';
import Form from './Pages/Form';
import Courses from '../Components/Pages/Courses';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Course from './Pages/Course';
import MainMenu from '../Components/Organisms/MainMenu';
import History from './Pages/History';
import Home from './Pages/Home';
import Usuarios from './Pages/Users';

const App = () => (
<>
 <Router>
 	<MainMenu />
	 <Switch>
	 	<Route path="/" exact component={Home} />
	 	<Route path="/cursos" exact component={Courses} />
	 	<Route path="/cursos/:id" exact component={Course} />
	 	<Route path="/history" exact component={History} />
	 	<Route path="/history/:valor" exact component={History} />
	 	<Route path="/usuarios" exact component={Usuarios} />
	 	<Route path="/formulario" exact component={ () => <Form title="Formulario de contácto" />} />
	 	<Route path="/" exact component={History} />
	 	<Route component={() => (
	 		<div className="ed-grid">
	 			<h1>Error 404</h1>
	 			<p>No hay nada nadita!</p>
	 		</div>
	 		)} />
	 </Switch>
 </Router>
</>
)

export default App;
