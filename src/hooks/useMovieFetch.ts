import { useState, useEffect } from "react";
import {ispersistedState} from '../helpers';

// API
import API, {Movie, Cast, Crew} from '../API';

// Types
export type MovieState = Movie & {actors: Cast[], directors: Crew[]};

export const useMovieFetch = (movieId: string) => {
    const [State, setState] = useState<MovieState>({} as MovieState);
    const [Loading, setLoading] = useState(true);
    const [Error, setError] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            try {

                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);

                // Get director only
                const directors = credits.crew.filter(
                    member => member.job === "Director"
                );

                setState({
                    ...movie,

                    // create variable actors & directors
                    actors: credits.cast,
                    directors

                });

                setLoading(false);

            } catch (error) {
                setError(true);
            }
        };

        const sessionState = ispersistedState(movieId);

        if (sessionState) {
            setState(sessionState);
            setLoading(false);
            return;
        }

        fetchMovie();
    }, [movieId]);

    // Write to sessionStorage
    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(State));
    }, [movieId, State]);

    return {State, Loading, Error};
};