import './Create.css';
import { useState } from 'react';
import Select from 'react-select';
import RightImage from '../../assets/data.svg';

const categories = [
    { value: 'development', label: 'Development' },
    { value: 'design', label: 'Design' },
    { value: 'sales', label: 'Sales' },
    { value: 'marketing', label: 'Marketing' },
  ]

export default function Create(){
    {/* form field values */}
    const [name, setName] = useState('')
    const [details, setDetails] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [category, setCategory] = useState('')
    const [assignedUsers, setAssignedUsers] = useState([])
    const [formError, setFormError] = useState(null)

const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name, details, dueDate, category.value)
}

    return(
        <div className="create-container">
        <div className="create-form">
            <h1 className="page-title">Create a New Project</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Project Name</span>
                    <input required type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                </label>
                <label>
                    <span>Project Details</span>
                    <textarea required type="text" onChange={(e)=>setDetails(e.target.value)} value={details}/>
                </label>
                <label>
                    <span>Set Due Date</span>
                    <input required type="date" onChange={(e)=>setDueDate(e.target.value)} value={dueDate}/>
                </label>

                <label>Project Category</label>
                    <Select
                    onChange={(option)=>setCategory(option)}
                    options={categories}
                    />
                <label>Assign to</label>
                {/* <Select
                    options={}
                /> */}

                <button className='btn'>Add Project</button>
            </form>
            </div>
            
              <div className="image-container">
              <img src={RightImage} alt="Data Image" />
            </div>
        </div>
    )
}