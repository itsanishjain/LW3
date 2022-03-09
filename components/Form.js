import React from 'react'
import { useState } from 'react'

export default function Form() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [titleError, setTitleError] = useState("");


    const handleChange = (e) => {
        if (e.target.name === "title") {
            setTitle(e.target.value);
        } else {
            setDescription(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        console.log("Sumitting....");
        if(title.length < 1){
            setTitleError("Title is required");
        }
        else if(title.length >1){
            console.log("Title is here")
            setTitleError("");
        }
        
    }

    return (
        <div>

            {titleError.length > 0 ? <p>{titleError}</p>: null }

            <input type="text" name="title" onChange={handleChange} placeholder="Title" value={title} />

            <input type="text" name="description" onChange={handleChange} placeholder="Description" value={description} />

            <div>
            <button onClick={handleSubmit}>Post</button>

            </div>

        </div>
    )
}
