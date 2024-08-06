import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";

type Props = {
    columns:GridColDef[],
    rows:object[],
}
export default function dataTable(props:Props) {
    const actionColum : GridColDef = {
        field:"action",
        headerName:"Action",
        width:200,
        renderCell : (params) => {
            return(
                <div className="action">
                    <Link to={"/"}>
                        <img src="./icons/view.svg" alt="" />
                    </Link>
                    <div className="delete">
                        <img src="./icons/delete.svg" alt="" />
                    </div>
                </div>
            );
        }
    }
  return (
    <div className="dataTable">
        <DataGrid className="dataGrid"
        rows={props.rows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar : {
                showQuickFilter : true,
                quickFilterProps : {debounceMs : 500}
            }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}
