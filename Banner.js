import React from 'react'
import { useState,useEffect } from 'react'
import requests from './Requests'
import axios from 'axios'
import './Banner.css'
const Banner = () => {
    const [movie, setmovie] = useState([])

    useEffect(() => {
      
      async function fetchData () {
        const request = await axios.get(requests.fetchNetflixOriginals)
        //console.log(request.data.results[Math.floor(Math.random()*request.data.results.length)])
        setmovie(request.data.results[
            Math.floor(Math.random()*request.data.results.length)
        ])
        return request
    }
      fetchData()
    }, [])
    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }
  return (
    <header className='banner' style={{
        backgroundSize:"cover",
        backgroundImage:`url("http://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition:"center center"
    }}>
        <div className='banner__contents'>
            <h1 className='banner__title'>
            {movie?.title || movie?.name || movie?.original_name}
            </h1>
            
            <h1 className='banner__description'>{truncate(movie?.overview,150)}</h1>
        </div>
        <div className='banner--fadeBottom'></div>
    </header>
  )
}

export default Banner