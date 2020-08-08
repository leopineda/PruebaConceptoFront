import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import getCalificaciones from '../../redux/actions/getCalificaciones';

class IAppBar extends Component{

	constructor(props){
		super(props);

		this.state = {
			text: '',
		};

		this.onChangeText = this.onChangeText.bind(this);
		this.onChangeSelection = this.onChangeSelection.bind(this);
	}

	onChangeText(text){
		this.setState({ text });

		this.props.getCalificaciones(text);
	}

	onChangeSelection(text){
		this.setState({ text });

		this.props.getCalificaciones(text);
	}

	render(){
		const { text } = this.state;
		const { resultados } = this.props;

		return(
			<Page 
				text={text}
				resultados={resultados}
				onChangeText={this.onChangeText}
				onChangeSelection={this.onChangeSelection}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return{
		resultados: state.resultados
	};
};

const mapDispatchToProps = {
	getCalificaciones
}

export default connect(mapStateToProps, mapDispatchToProps)(IAppBar);