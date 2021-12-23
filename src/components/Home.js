// Use This
import React from 'react';

// // Classes
// import React, {Component} from 'react';

// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// component
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumbnail from './Thumbnail';
import SpinnerLoading from './SpinnerLoading';
import SearchBar from './SearchBar';
import Button from './Button';

// hook
import useHomeFetch from '../hooks/useHomeFetch';

//image
import NoImage from '../images/no_image.jpg';


// // API    ~    Because use " classes "
// import API from '../API';


const Home = () => {

    const {State, Loading, Error, searchTerm, setSearchTerm, setIsLoadingMore} = useHomeFetch();
    // console.log(State);
    if (Error) {return <div>Something wrong ....</div> ;}

    return (
        <>
            {!searchTerm && State.results[0] ? (
            <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${State.results[0].backdrop_path}`}
                title={State.results[0].title}
                text={State.results[0].overview}
                />
            ) : null
            }

            <SearchBar setSearchTerm={setSearchTerm} />

            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {/* "movies" from url api */}
                {State.results.map(movie => (
                    <Thumbnail
                        key = {movie.id}
                        clickable
                        image = {
                            movie.poster_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                        }
                        movieId = {movie.id}
                    />
                ))}
            </Grid>

            {Loading && <SpinnerLoading />}

            {State.page < State.total_pages && !Loading && (
                <Button text='Load More' callback={() => setIsLoadingMore(true)}/>
            )}
        </>
    );
};




// // Initial State
// const initialState = {
//     page: 0,
//     results: [],
//     total_pages: 0,
//     total_results: 0
// };

// // Classes
// class Home extends Component {

//     state = {
//         movies : initialState,
//         searchTerm : '',
//         setIsLoadingMore : false,
//         Loading : false,
//         Error : false
//     }

//     fetchMovies = async (page, searchTerm = "") => {
//         try {
//             this.setState({Error : false, Loading : true});

//             const movies = await API.fetchMovies(searchTerm, page);

//             this.setState(previous => ({
//                 ...previous,
//                 movies: {
//                     ...movies,
//                     results:
//                     page > 1 ? [...previous.movies.results, ...movies.results] : [...movies.results]
//                 },
//                 Loading : false
//             }));
//         } catch (error) {
//             this.setState({Error : true, Loading : false});
//         }
//     };

//     handleSearch = searchTerm => 
//         this.setState({movies : initialState, searchTerm}, () => 
//             this.fetchMovies(1, this.state.searchTerm)
//         )

//     handleLoadMore = () =>
//         this.fetchMovies(this.state.movies.page + 1, this.state.searchTerm);

    
//     // lifecyle method
//     componentDidMount() {this.fetchMovies(1);}
    

//     render() {

//         const {searchTerm, Error, Loading, movies} = this.state;
//         if (Error) {return <div>Something wrong ....</div>;}


//     return (
//         <>
//             {!searchTerm && movies.results[0] ? (
//             <HeroImage 
//                 image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
//                 title={movies.results[0].title}
//                 text={movies.results[0].overview}
//                 />
//             ) : null
//             }

//             <SearchBar setSearchTerm={this.handleSearch} />

//             <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
//                 {/* "movies" from url api */}
//                 {movies.results.map(movie => (
//                     <Thumbnail
//                         key = {movie.id}
//                         clickable
//                         image = {
//                             movie.poster_path
//                                 ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
//                                 : NoImage
//                         }
//                         movieId = {movie.id}
//                     />
//                 ))}
//             </Grid>

//             {Loading && <SpinnerLoading />}

//             {movies.page < movies.total_pages && !Loading && (
//                 <Button text='Load More' callback={this.handleLoadMore}/>
//             )}
//         </>
//     );
//     }
// };



export default Home;