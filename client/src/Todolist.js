import React from 'react'

const Todolist = ({todo,edithandler,deletehandler}) => {
  return (
    <div className='container mt-5'>
    <div className='row m-md-auto'>
   <div className='col col-md-12 m-md-auto'>
    <table className='table table hover '>
    <thead className='bg-dark text-warning'>
      <tr>
        <th>S.NO</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Mobile Number</th>
        <th>Edit & Delete</th>
      </tr>
    </thead>
    <tbody>
      {
         todo.map((elem,index)=>{
          return(
            <tr>
              <td>{index+1}</td>
              <td>{elem.firstname}</td>
              <td>{elem.lastname}</td>
              <td>{elem.mobilenumber}</td>
              <td>
              <i class="fa-solid fa-pen-to-square mr-4" onClick={()=>edithandler(index)}></i>
              <i class="fa-sharp fa-solid fa-trash" onClick={()=>deletehandler(index)}></i>
              </td>
            </tr>
          )
         })
      }
    </tbody>
   </table>

   
   </div>
    </div>

    </div>
  )
}

export default Todolist