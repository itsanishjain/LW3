import React from 'react'
import { useState, useEffect } from 'react'
import Form from '../components/Form';

import styles from '../styles/Todo.module.css'

export default function Todo() {
    const [task, setTask] = useState('hhh');
    const [list, setList] = useState([]);  //



    const [products, setProducts] = useState([]);


    const fetchData = () => {
        console.log("calling fetchData");
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setProducts(json)
            })
    }



    useEffect(() => {
        // fetchData();
    }, [])

    const handleChange = (e) => {
        console.log(e)
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitting......");
        setList([...list, task]);
        console.log(list);
        setTask('');
    }

    const handleDelete = (e, i) => {
        e.preventDefault();
        const l = list;
        setList(list.filter((item, index) => index !== i));
        console.log(list, "DEle");

    }
    return (
        <div>
            <Form />
            <form className={styles.mainFrom}>
                <input value={task} onChange={handleChange} placeholder='add todo' />

                <button onClick={handleSubmit}>Add Todo</button>
                {
                    list.length > 0 ? list.map((item, index) => (
                        <div key={index}>
                            {item}
                            <button onClick={(e) => handleDelete(e, index)}>Delete</button>
                        </div>
                    )) : "NOothing...."
                }
            </form>

            <p>haihhhh ---- {task}</p>
        </div>
    )
}
