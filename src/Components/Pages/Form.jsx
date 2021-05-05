import React from 'react';

export default class Form extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			nombre: "",
			correo: "",
			fecha: new Date()
		}

		this.changeName = this.changeName.bind(this);
		this.changeEmail = this.changeEmail.bind(this);
		this.changeDate = this.changeDate.bind(this);
	}

	changeName(e){
		this.setState({
			nombre: e.target.value
		})
	}

	changeEmail(e){
		this.setState({
			correo: e.target.value
		})
	}

	changeDate(){
		this.setState({
			fecha: new Date()
		})
	}

	render(){
		return (
				<div className="ed-grid">
					<h1>Formulario {this.props.title}</h1>
					<h4>{Math.ceil(this.state.fecha/1000)}</h4>
					<form action="/hola" className="ed-grid m-grid-2" id="form-element">
						<div className="form__item">
							<label htmlFor="">Nombre: </label>
							<input type="text" onChange={this.changeName} />
						</div>
						<div className="form__item">
							<label htmlFor="">Email: </label>
							<input type="email" onChange={this.changeEmail} />
						</div>
					</form>
					<div>
						<h2>{`Hola ${this.state.nombre}`}</h2>
						<span>{`Tu correo es ${this.state.correo}`}</span>
					</div>
				</div>
			)
	}

	componentDidMount(){ 
		// let elemento = document.getElementById('form-element');
		// console.log(elemento);
		// console.log("helle");
		// this.intervaloFecha = setInterval(() => {
		// 	this.changeDate();
		// 	console.log(new Date());
		// } , 1000);
	}

	componentDidUpdate(oldValue, newValue){
		// console.log("Componente actualizado");
		// console.log(oldValue, ":", newValue);
	}

	componentDidUnmounet(){
		// clearInterval(this.intervaloFecha);
		// console.log('Bye bye');
	}
}