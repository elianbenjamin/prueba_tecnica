"use client";
import React from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '@/data/people';


export interface HomeInterface {}

const Home: React.FC<HomeInterface>  = () => {
	const pageSize = 5;
	const colums = [{
		field: 'name',
		headerName: 'Name',
		flex: 1,
		minWidth: 150,
		renderCell: (params: GridRenderCellParams) => <>{params.field}</>

	}]
	return (
		<div>
 			<DataGrid 
			rows={People}
			columns={colums}
			disableColumnSelector
			disableRowSelectionOnClick
			autoHeight
			pageSize={pageSize}
			rowsPerPageOptions={[pageSize]}
			/>
 		</div>
	);
};

export default Home;
