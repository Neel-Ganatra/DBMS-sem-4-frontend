import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const Socialuser = () => {
  const socialusersColums = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "user",
      width: 400,
      renderCell: (params) => {
        return (
          <div className="cellwithImg">
            <img src={params.row.img} className="cellImg" />
            {params.row.User}
          </div>
        );
      },
    },
    {
      field: "Email",
      headerName: "Email",
      width: 320,
    },

    {
      field: "Status",
      headerName: "Status",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={`cellwithStatus ${params.row.Status}`}>
            {params.row.Status}
          </div>
        );
      },
    },
  ];

  const actionColum = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellaction">
            <button className="viewButton">View</button>
            <button className="DeleteButton">Delete</button>
          </div>
        );
      },
    },
  ];

  const socialusersRows = [
    {
      id: 1,
      User: "Captain America",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRUYr93nbyOZZD9zA0GdVThOWNPKpy22QOrjd9-5xY14UKIXek0i2_KMgtwKcvj3pYPA&usqp=CAU",
      Email: "Cap@gmail.com",
      Status: "Active",
      Action: "View",
    },
    {
      id: 2,
      User: "Iron Man",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRUYr93nbyOZZD9zA0GdVThOWNPKpy22QOrjd9-5xY14UKIXek0i2_KMgtwKcvj3pYPA&usqp=CAU",
      Email: "Iron@gmail.com",
      Status: "Pending",
      Action: "Delte",
    },
    {
      id: 3,
      User: "Spider Man",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRUYr93nbyOZZD9zA0GdVThOWNPKpy22QOrjd9-5xY14UKIXek0i2_KMgtwKcvj3pYPA&usqp=CAU",
      Email: "Spideyy@gmail.com",
      Status: "Pending",
      Action: "Delte",
    },
    {
      id: 1,
      User: "Captain America",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRUYr93nbyOZZD9zA0GdVThOWNPKpy22QOrjd9-5xY14UKIXek0i2_KMgtwKcvj3pYPA&usqp=CAU",
      Email: "Cap@gmail.com",
      Status: "Active",
      Action: "View",
    },
    {
      id: 2,
      User: "Iron Man",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRUYr93nbyOZZD9zA0GdVThOWNPKpy22QOrjd9-5xY14UKIXek0i2_KMgtwKcvj3pYPA&usqp=CAU",
      Email: "Iron@gmail.com",
      Status: "Pending",
      Action: "Delte",
    },
    {
      id: 3,
      User: "Spider Man",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRUYr93nbyOZZD9zA0GdVThOWNPKpy22QOrjd9-5xY14UKIXek0i2_KMgtwKcvj3pYPA&usqp=CAU",
      Email: "Spideyy@gmail.com",
      Status: "Pending",
      Action: "Delte",
    },
    {
      id: 1,
      User: "Captain America",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRUYr93nbyOZZD9zA0GdVThOWNPKpy22QOrjd9-5xY14UKIXek0i2_KMgtwKcvj3pYPA&usqp=CAU",
      Email: "Cap@gmail.com",
      Status: "Active",
      Action: "View",
    },
    {
      id: 2,
      User: "Iron Man",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRUYr93nbyOZZD9zA0GdVThOWNPKpy22QOrjd9-5xY14UKIXek0i2_KMgtwKcvj3pYPA&usqp=CAU",
      Email: "Iron@gmail.com",
      Status: "Pending",
      Action: "Delte",
    },
    {
      id: 3,
      User: "Spider Man",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRUYr93nbyOZZD9zA0GdVThOWNPKpy22QOrjd9-5xY14UKIXek0i2_KMgtwKcvj3pYPA&usqp=CAU",
      Email: "Spideyy@gmail.com",
      Status: "Pending",
      Action: "Delte",
    },
  ];
  return (
    <div
      style={{
        marginTop: "10rem",
        overflowY: "scroll",
      }}
    >
      <div style={{ width: "100%" }}>
        <DataGrid
          rows={socialusersRows}
          columns={socialusersColums.concat(actionColum)}
          pageSize={[9]}
          rowsPerPageOptions={[9]}
        />
      </div>
    </div>
  );
};

export default Socialuser;
