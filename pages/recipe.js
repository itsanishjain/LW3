
import React from "react";
// import styles from "../styles/Live.module.css";
import { useState, useEffect } from "react";

export default function Live() {
    const [search, setSearch] = useState('')
    const [users, setUser] = useState([])
    const [result, setResult] = useState();

    useEffect(async () => {
        const res = await fetch('https://randomuser.me/api?results=50')
        const { results } = await res.json()
        // console.log(results, results[0])
        setResult(results);
    }, [])


    console.log("result>>>>>>>>>>>>>", result);



    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "calc(100vh - 160px)",
            }}
        >
            <div>
                <header>
                    <h4>Live User Filter</h4>
                    <small>
                        Search By Name and/or location
                    </small>
                    <input type="text" id="filter" placeholder="Search" />
                </header>

                <ul>
                    {
                        result && result.map((user) =>

                        (
                            <li>
                                <img src={user.picture.large} alt={user.name.first} />
                                <div >
                                    <h4>${user.name.first} ${user.name.last}</h4>
                                    <p>${user.location.city}, ${user.location.country}</p>
                                </div>
                            </li>
                        )
                        )

                        // result && result.map((r) => (
                        //     <li>
                        //         <img src={r.picture.large} alt={r.name.first} />
                        //     </li>
                        // ))
                    }
                </ul>
            </div>
        </div>
    );


}


var arr = [1, 2, 3]
arr.map((i) => (
    i
))


