const API_KEY='bb0b944da3ea37c9fcf161e431512e76';


const requests={
    fetchTrending:`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginals:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchComedyMovies:`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
    fetchDocumentries:`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTvShow:`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
}


export default requests;