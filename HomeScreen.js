import React from 'react'
import Nav from '../Nav'
import Banner from '../Banner'
import Row from '../Row'
import requests from '../Requests'
import "./HomeScreen.css";
import ReactPlayer from 'react-player'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>
        <Banner  />
        
        <div className='yt'>
  <div className="player-wrapper">
    <ReactPlayer url={"https://youtu.be/ZN2OmChtHJM"} />
  </div>
  <div className="player-wrapper">
    <ReactPlayer url={"https://youtu.be/_y7DX30nH6k"} />
  </div>
  <div className="player-wrapper">
    <ReactPlayer url={"https://youtu.be/irZPTn1wuAU"} />
  </div>
  <div className="player-wrapper">
    <ReactPlayer url={"https://www.youtube.com/watch?v=Kr5WwVzvhnQ&pp=ygUQcGFraXN0YW5pIG1vdmllcw%3D%3D"} />
  </div>
  <div className="player-wrapper">
    <ReactPlayer url={"https://youtu.be/ULEQb_l-N08"} />
  </div>
  <div className="player-wrapper">
    <ReactPlayer url={"https://youtu.be/KBSgXFvrV4M"} />
  </div>
  <div className="player-wrapper">
    <ReactPlayer url={"https://youtu.be/UIZTUp-nQ84"} />
  </div>
  <div className="player-wrapper">
    <ReactPlayer url={"https://youtu.be/ecu_Sd-d1Vk"} />
  </div>
  <div className="player-wrapper">
    <ReactPlayer url={"https://youtu.be/ra7kNb5rU8g"} />
  </div>
</div>

        <Row title="StreamHub Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title="Trending" fetchURL={requests.fetchTrending}/>
        <Row title="TopRated" fetchURL={requests.fetchTopRated}/>
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
        <Row title="Documentries" fetchURL={requests.fetchDocumentries}/>
        <Row title="TvShows" fetchURL={requests.fetchTvShow}/>
      
    </div>
  );
}

export default HomeScreen;
