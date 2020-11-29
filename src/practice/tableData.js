

import React from 'react';


const TableData = (props) =>{
    console.log('%%%',props.getDataOrginal);


    

  return (
      <div>
          
          <table class="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">City</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
               { props.getDataOrginal && props.getDataOrginal.map( (e,ind) => 
                <tr key={ind}>
                    <td>{e.Name}</td>
                    <td>{e.City}</td>
                    <td>{e.Age}</td>
                    <td>
                        <button onClick={()=> props.setData(e)} >Edit</button>
                        <button onClick={()=> props.delData(e)}>Delete</button>
                    </td>
                </tr>
                ) }
            </tbody>
            </table>
      </div>
  )


}

export default TableData;