import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from  '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import './style.css';

function Page(props){

	return (
		<AppBar position="static">
			<ToolBar className="appbar">
				<Typography variant="h6" color="inherit">
					Gestor de Reportes
				</Typography>

				<AccountCircle />
			</ToolBar>
		</AppBar>
	);
}

export default Page;