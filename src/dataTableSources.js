export const userColumns =[
{ 
    field: 'title', 
    headerName: 'Title', 
    width: 140 
},
{
  field: 'context',
  headerName: 'Context',
  width: 230,
},
{
  field:'user', 
  headerName:'Last mod.', 
  width: 230, 
  renderCell: (params)=>{
  return(
      <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt='avatar'  />
          {params.row.username}
      </div>
  );
}

},
{
  field: 'language',
  headerName: 'Lang',
  width: 230,
},
{
  field: 'tags',
  headerName: 'Tags',
  width: 100,
},
{
  field: 'status',
  headerName: 'Status',
  width: 160,
  renderCell: (params)=>{
    return(                   
      <div 
      className={`cellWithStatus ${params.row.status} `}  
      >
        {params.row.status}
      </div>
    )
  }
}
];

