import "./user.scss";
import DataTable from "../DataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { userRows } from "../../data";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field:"avatar",headerName:"Avatar", width:100,
        renderCell : (params) => {
            console.log(params);
            return <img src={params.row.img || "./icons/noavatar.png"} alt="" />
        }
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 100,
      editable: true,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 150,
        editable: true,
    },
    {
        field:"phone",
        headerName:"Phone",
        type:"string",
        width:200,
    },
    {
        field:"createdAt",
        headerName:"CreatedAt",
        type:"string",
        width:200,
    },
    {
        field:"verified",
        headerName:"Verified",
        type:"boolean",
        width:100,
    }
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (value,row) => {
    //     return `${row.firstName || ''} ${row.lastName || ''}`
    //   }
    // },
  ];
  
//   const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 , status:true },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 , status : false },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   ];
export default function User() {
  return (
    <div className="users">
        <div className="userInfo">
            <span>Users</span>
            <button>Add new user</button>
        </div>
        <DataTable columns={columns} rows={userRows} />
    </div>
  )
}
