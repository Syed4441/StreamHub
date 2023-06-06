import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
// import movieTrailer from 'movie-trailer'
const base_url="http://image.tmdb.org/t/p/original/"
const Row = ({title,fetchURL,isLargeRow}) => {
    //state is reset when component load...
    //short term memmory why to write variable in react...
    const [movies,setmovies]=useState([]);
    const [trailerUrl, settrailerUrl] = useState("")
    //if [],run once when row load and dont run again
    useEffect(()=>{
        async function fetchData(){
            const request =await axios.get(fetchURL)
            setmovies(request.data.results)
            return request
        }
        fetchData()
    },[fetchURL])
    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1
        }
    }
    const handleClick=(movie)=>{
        if(trailerUrl){
            settrailerUrl('')
        }
        else
        {
            movieTrailer(movie?.title || "")
            .then((url)=>{
                console.log(url)
                const urlParams=new URLSearchParams(new URL(url).search);
                settrailerUrl(urlParams.get('v'))
            }).catch((error)=>console.log("error"+error))
        }
    }
  return (
        <div className='row'>
            <h2 className='row__title'>{title}</h2>
            <div className='row__posters'>
                {/* <img src="pic_trulli.jpg" alt="Trulli" width="500" height="333"></img> */}
                {/* <img src={`${base_url}${movies.backdrop_path}`} alt={movies[0].title}></img> */}
                 {movies.map(m=>{

                    return <img key={m.id} onClick={()=>handleClick(m)} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${isLargeRow?m.poster_path :m.backdrop_path}`} alt="Trulli" ></img>
                })} 
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
  )
}

export default Row;