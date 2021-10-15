import React, {useEffect, useState} from 'react'

function Notes() {

    const [notes, setNotes] = useState([{
        title: '',
        content: ''
    }])

    useEffect(()=> {
        fetch('/notes')
        .then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes))
            .catch(err => console.error(err))
    })

    return (
        <div>
            <h1>Notes</h1>
            {notes.map(note => {
                <div>
                    <p>{note.title}</p>
                    <p>{note.content}</p>
                </div>
                
            })}
        </div>
    )
}

export default Notes
