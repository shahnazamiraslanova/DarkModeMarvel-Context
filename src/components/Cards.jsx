import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { DarkModeContext } from '../contexts/DarkModeContext'

const Cards = () => {
    const [films, setFilms] = useState([])
    const {darkMode,toggleDarkMode}=useContext(DarkModeContext)
    const getData = async () => {
        try {
            const response = await axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=23f73c6784f2f80d3b29cab33fd30ff7&hash=721beb32bc3e66c06a76db97ae763b92')
            setFilms(response.data?.data?.results); 
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        console.log(films);
    }, [films]); // Log films whenever it changes

    return (
        <div className={darkMode? "darkCards" :"cards"}>
            {
                films.length > 0 ? (
                    films.map((item, index) => (
                        <div className={darkMode? "darkCard" : "card"} key={index}>
                            <img src={item.thumbnail.path + ".jpg"} alt="" />
                            <h2>{item.name}</h2>
                            <p>{item.modified}</p>
                            <a href={item.urls[item.urls.length - 1].url}>Watch</a>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
    )
}

export default Cards
