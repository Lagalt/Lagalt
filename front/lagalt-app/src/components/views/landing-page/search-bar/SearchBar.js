import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './SearchBar.css'
import ProfileProjectsGridItemX from '../../profile-view/my-projects/my-projects-list/list-item/ProfileProjectsGridItemX';

function SearchBar () {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://lagalt-server.herokuapp.com/api/v1/projects`)
        .then(response => {
            console.log(response)
            setData([...response.data])
        })
        .catch(error => {
            console.log(error)
        })
       }, [])
    
    return (
        <div className="searchBar">
            <input 
                type="text"
                placeholder="Search for projects"
                onChange={event => {setSearchTerm(event.target.value)}}
            />
            { data.filter((val) => {
                if (searchTerm === "") {
                    return val
                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                } else {
                    return null
                }
            }).map((val,  key) => {
                return( 
                <div className="container" key={key}>
                    <ProfileProjectsGridItemX
                        key={val.id}
                        id={val.id}
                        title={val.title}
                        desc={val.description}
                        industry={val.industry}
                    />
                </div>
                )
            })}
        </div>
    )
};

export default SearchBar;