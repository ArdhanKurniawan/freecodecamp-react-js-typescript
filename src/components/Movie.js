import React from 'react';

// // for classes
// import React, {Component} from 'react';

import {useParams} from 'react-router-dom';

// Config
import {IMAGE_BASE_URL, POSTER_SIZE} from '../config';

// Component
import SpinnerLoading from './SpinnerLoading';
import Grid from './Grid';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actors from './Actors';

// Hook
import {useMovieFetch} from '../hooks/useMovieFetch';

// Image
import NoImage from '../images/no_image.jpg';

// // API    ~    Because use " classes "
// import API from '../API';

const Movie = () => {
    const {movieId} = useParams();
    const {State: Movie, Loading, Error} = useMovieFetch(movieId);
    
    if (Loading) return <SpinnerLoading />
    if (Error) return <div>Something wrong ....</div>

    return (
        <>
            <BreadCrumb movieTitle={Movie.original_title} />
            <MovieInfo movie={Movie} />
            <MovieInfoBar
            time={Movie.runtime} 
            budget={Movie.budget} 
            revenue={Movie.revenue}
            />

            <Grid header='Actors'>

                {/* Movie.actors -> "actors" must to many 's' i don't know why */}
                {/* actor -> that parameter, can type anything */}
                
                {Movie.actors.map(actor => (
                    <Actors 
                        key={actor.credit_id}
                        names={actor.name}
                        characters={actor.character}
                        imageurl={
                            actor.profile_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                : NoImage
                        }
                    />
                ))}
            </Grid>
        </>
    )
};

export default Movie;




// // classes
// class Movie extends Component {

//     state = {
//         Movie: {},
//         Loading: true,
//         Error: false
//     };

//     fetchMovie = async () => {

//         const{movieId} = this.props.params;

//         try {
//             this.setState({Error: false, Loading: true});

//             const movie = await API.fetchMovie(movieId);
//             const credits = await API.fetchCredits(movieId);

//             // Get director only
//             const directors = credits.crew.filter(
//                 member => member.job === "Director"
//             );

//             this.setState({
//                 Movie: {
//                     ...movie,
    
//                     // create variable actors & directors
//                     actors: credits.cast,
//                     directors
//                 },
//                 Loading: false
//             });
//         } catch (error) {
//             this.setState({Error: true, Loading: false});
//         }
//     };


//     // lifecyle method
//     componentDidMount() {this.fetchMovie();}


    
//     render() {

//         const { Movie, Loading, Error } = this.state;

//         if (Loading) return <SpinnerLoading />
//     if (Error) return <div>Something wrong ....</div>

//     return (
//         <>
//             <BreadCrumb movieTitle={Movie.original_title} />
//             <MovieInfo movie={Movie} />
//             <MovieInfoBar
//             time={Movie.runtime} 
//             budget={Movie.budget} 
//             revenue={Movie.revenue}
//             />

//             <Grid header='Actors'>

//                 {/* Movie.actors -> "actors" must to many 's' i don't know why */}
//                 {/* actor -> that parameter, can type anything */}
                
//                 {Movie.actors.map(actor => (
//                     <Actors 
//                         key={actor.credit_id}
//                         names={actor.name}
//                         characters={actor.character}
//                         imageurl={
//                             actor.profile_path
//                                 ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
//                                 : NoImage
//                         }
//                     />
//                 ))}
//             </Grid>
//         </>
//     )
//     }
// };

// const MovieWithParams = props => <Movie {...props} params={useParams()} />

// export default MovieWithParams;