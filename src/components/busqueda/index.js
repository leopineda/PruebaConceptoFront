import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import getCalificaciones from '../../redux/actions/getCalificaciones';

class Busqueda extends Component{

	constructor(props){
		super(props);

		this.state = {
			carrera: '',
			elemCarrera: [
				{
					id: 1,
					title: 'Ingeniería Aeroespacial'
				}
			],
			elemGrupo: [
				{
					id: 1,
					title: "101"
				}
			],
			elemMateria: [
				{
					id: 1,
					title: "Álgebra"
				}
			],
			elemSemestre: [
				{
					id: 1,
					title: "2020-2021 - 1"
				},
				{
					id: 2,
					title: "2020-2021 - 2"
				}
			],
			identCarrera: 'Carrera',
			identGrupo: 'Grupo',
			identMateria: 'Materia',
			identSemestre: 'Semestre'
		};

		this.onSearch = this.onSearch.bind();
	}

	onSearch(){
		this.props.getCalificaciones();
	}

	render(){

		const { carrera, elemCarrera, elemGrupo, elemMateria, elemSemestre, identCarrera, identGrupo, identMateria, identSemestre } = this.state;
		const { calificaciones } = this.props;

		return(
			<Page 
				calificaciones={calificaciones}
				carrera={carrera}
				elemCarrera={elemCarrera}
				elemGrupo={elemGrupo}
				elemMateria={elemMateria}
				elemSemestre={elemSemestre}
				identCarrera={identCarrera}
				identGrupo={identGrupo}
				identMateria={identMateria}
				identSemestre={identSemestre}
				onSearch={this.onSearch}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return{
		calificaciones: state.calificaciones
	};
};

const mapDispatchToProps = {
	getCalificaciones
}

export default connect(mapStateToProps, mapDispatchToProps)(Busqueda);