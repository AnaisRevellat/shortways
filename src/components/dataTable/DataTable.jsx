import './dataTable.scss'

//firebase firestore
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot
} from "firebase/firestore";
import { db } from '../../firebase';


import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//mui libray for grid
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../dataTableSources'
import { Hidden } from '@mui/material';
require('../../dataTableSources');


const DataTable = () => {
  //state
  const [data, setData] = useState([]);


  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach(doc => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setData(list);
    }, (error) => {
      console.log(error);
    }
    );

    return () => {
      unsub();
    };
  }, []);

  console.log(data);

  //function
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [{
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to='/users/test' style={{ textDecoration: 'none' }}>
            <div className='viewButton'>View</div>
          </Link>

          <Link to='/users' style={{ textDecoration: 'none' }}>
            <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</div>
          </Link>
        </div>
      )
    }
  }
  ];

  return (

    <div className='datatable'>
      <div className="datatableTitle">

        <div className='backArrow'>
          <ArrowBackIosOutlinedIcon /> STEP BY STEP
        </div>

        <Link to='/users/new' style={{ textDecoration: 'none' }} className='link'>
          Create Step by Step <ArrowForwardIosOutlinedIcon />
        </Link>

      </div>
      <DataGrid
        className='dataGrid'
        style={{ borderRadius: '25px', overflow: 'hidden', border: 'none' }}
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>

  )
}

export default DataTable