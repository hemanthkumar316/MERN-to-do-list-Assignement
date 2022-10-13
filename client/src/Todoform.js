import React, { useState, useEffect } from 'react'
import Todolist from './Todolist'
import axios from 'axios'
const Todoform = () => {
    const [formvalues, setFormvalues] = useState({ firstname: '', lastname: '', mobilenumber: '' })
    const [formerrors, setFormerrors] = useState({})
    const [isubmit, setIssubmit] = useState(false)
    const [todo, settodo] = useState([])
   
  
    const changehandler = (e) => {
        setFormvalues({ ...formvalues, [e.target.name]: e.target.value })
    }
    const submithandler = (e) => {
        e.preventDefault()
        console.log(formvalues)
        setFormerrors(validate(formvalues))
        setIssubmit(true)
        const newtodo = [...todo, formvalues]
        settodo(newtodo)
                //http://localhost:5500/task/todos
     /*  axios.post('http://localhost:5500/task/todos',{
        todo:formvalues,isComplete:false
      }) */
      axios.post('http://localhost:5500/task/todos', formvalues)
 
       
        
    }
    const edithandler = (editindexvalue) => {
        const filtertodo = todo.filter((elem, index) => index !== editindexvalue)
        settodo(filtertodo)
        const editselector = todo.find((elem, index) => index === editindexvalue)
        setFormvalues({
            firstname: editselector.firstname,
            lastname: editselector.lastname,
            mobilenumber: editselector.mobilenumber
        })
    }
    const deletehandler = (indexvalue) => {
        const filtertodo = todo.filter((elem, index) => index !== indexvalue)
        settodo(filtertodo)
    }
    useEffect(() => {
        if (Object.keys(formerrors).length === 0 && isubmit) {
            console.log(formerrors)
        }
    }, [formerrors])
    const validate = (values) => {
        const errors = {}
        const onlystrings = /^[A-Za-z\s]*$/
        if (!values.firstname) {
            errors.firstname = ' *This field is Required'
        }
        else if (!values.firstname.match(onlystrings)) {
            errors.firstname = '*Enter only Alphabets'
        }
        if (!values.lastname) {
            errors.lastname = '*This field  is Required'
        }
        else if (!values.lastname.match(onlystrings)) {
            errors.lastname = '*Enter only Alphabets'
        }
        if (!values.mobilenumber) {
            errors.mobilenumber = '*This field is Required'
        }
        else if (values.mobilenumber.length < 10) {
            errors.mobilenumber = '*Mobile number must be  10 numbers'
        }
        else if (values.mobilenumber.length > 10) {
            errors.mobilenumber = '*Mobile number cannot exceed more than 10 numbers'
        }
        return errors
    }
    return (
        <div className='container mt-5'>
            <div className='row m-md-auto'>
                <div className='col col-md-8 m-md-auto'>
             {/*    <pre>{JSON.stringify(formvalues)}</pre> */}
                    <div className='card'>
                        <div className='card-header bg-info text-white'>
                            <h1 className='text-center mb-3'>TO DO LIST</h1>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={submithandler}>
                                <div className='form-group'>
                                    <input type='text' className='form-control mb-3' placeholder='Enter First name' name='firstname' value={formvalues.firstname} onChange={changehandler} />
                                    <p className='text-danger'>{formerrors.firstname}</p>
                                </div>
                                <div className='form-group mb-3'>
                                    <input type='text' className='form-control mb-3' placeholder='Enter Second Name' name='lastname' value={formvalues.lastname} onChange={changehandler} />
                                    <p className='text-danger'>{formerrors.lastname}</p>
                                </div>
                                <div className='form-group mb-3'>
                                    <input type='number' className='form-control mb-3' placeholder='Enter Mobile Number' name='mobilenumber' value={formvalues.mobilenumber} onChange={changehandler} />
                                    <p className='text-danger'>{formerrors.mobilenumber}</p>
                                </div>
                                 <button className='btn btn-primary'>Add Contacts</button>
                                </form>
                        </div>
                    </div>
                    <Todolist todo={todo} edithandler={edithandler} deletehandler={deletehandler}/>
                </div>
            </div>

        </div>
    )
}

export default Todoform