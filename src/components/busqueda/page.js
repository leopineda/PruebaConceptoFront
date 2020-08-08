import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../appBar';
import Typography from '@material-ui/core/Typography';
import Seleccion from '../select';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Demo from "../chart";

function Page(props) {

	const {
		carrera,
		elemCarrera,
		elemGrupo,
		elemMateria,
		elemSemestre,
		identCarrera,
		identGrupo,
		identMateria,
		identSemestre,
		onSearch
	} = props;

	return (
		<Fragment>
			<CssBaseline />
			<AppBar />

			<Typography variant="h5" component="h3">
				Criterios de Búsqueda
			</Typography>
			
			<table>
				<tbody>
					<tr>
						<td>
							<Seleccion elementos={elemCarrera} identificador={identCarrera} />
						</td>
						<td>
							<Seleccion elementos={elemGrupo} identificador={identGrupo} />
						</td>
						<td>
							<Seleccion elementos={elemMateria} identificador={identMateria} />
						</td>
						<td>
							<Seleccion elementos={elemSemestre} identificador={identSemestre} />
						</td>
						<td>
							<TextField id="standard-basic" label="Alumno" />
						</td>
						<td>
							<SearchIcon 
								onClick={() => {
									onSearch()
								}}
							/>
						</td>
					</tr>
				</tbody>
			</table>

			<Demo />

		</Fragment>
		);
}

export default Page;