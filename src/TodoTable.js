
import React from 'react'
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

export default function TodoTable({ deleteTodo, todos, gridRef }) {

    const columns = [
        { headerName: "Description", field: "description", sortable: true, filter: true, floatingFilter: true, animateRows: true },
        { headerName: "Date", field: "date", sortable: true, filter: true, floatingFilter: true, animateRows: true },
        {
            headerName: "Priority", field: "priority", sortable: true, filter: true, floatingFilter: true, animateRows: true,
            cellStyle: params => params.value === "High" ? { color: "red" } : { color: "black" }
        }
    ]





    return (
        <div className="ag-theme-material" style={{ height: '700px', width: "600px", margin: 'auto' }}>
            <AgGridReact
                ref={gridRef}
                onGridReady={params => {
                    gridRef.current = params.api
                    console.log(gridRef.current)
                }}
                rowSelection="single"
                columnDefs={columns}
                rowData={todos}
            />
        </div>

    )
}
