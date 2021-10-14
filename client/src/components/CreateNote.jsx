import React, {useState} from 'react'

function CreateNote() {

    const [input, setInput] = useState({
        title: '',
        content: ''
    })

    const handleChange = (e)=> {
        const {name, value} = e.target
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value 
            }
        })
    }
    
    const handleClick = (e)=> {
        e.preventDefault()
        console.log(input)
    }

    return (
        <div className="container">
           <h1>Create Note page</h1>
           <form>
               <div className="form-group">
                   <input onChange={handleChange}name="title" value={input.title}autoComplete="off" className="form-control" placeholder="note title"></input>
               </div>
               <div className="form-group">
                    <textarea onChange={handleChange} name="content" value={input.content}autoComplete="off" className="form-control" placeholder="note content"></textarea>
               </div>
               <button onClick={handleClick} className="btn btn-lg btn-info">Add Note</button>
           </form>
        </div>
    )
}

export default CreateNote