'use client'

import React, { useEffect, useState } from 'react'

function Posts() {  // Renamed to avoid confusion with Date object
    let [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            let fetchData = await fetch('https://jsonplaceholder.typicode.com/posts') 
            let fetchDataJson = await fetchData.json();  // Correctly named variable

            setData(fetchDataJson);  // Correctly set the state with the JSON data
            console.log(fetchDataJson)
        }
        getData()
    }, [])

    console.log(data)
    
    return (
        <div>
            <ul>
                {data.map((d) => (
                    <li key={d.id}>{d.id} {d.title}</li>  // Added key prop and return statement
                ))}
            </ul>
        </div>
    )
}

export default Posts
