import { useState, useEffect } from "react";
import {ispersistedState} from '../helpers';

// API
import API from '../API';

// Initial State
const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

// always use "use" on name of hooks, that really important
const useHomeFetch = () => {
    const [State, setState] = useState(initialState);
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');

    const [IsLoadingMore, setIsLoadingMore] = useState(false);

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);

            setState(previous => ({
                ...movies,
                results:
                page > 1 ? [...previous.results, ...movies.results] : [...movies.results]
            }));
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    // Initial render
    // useEffect(() => {
    //     fetchMovies(1)
    // }, []);

    // Initial and search
    useEffect(() => {

        if (!searchTerm) {
            const sessionState = ispersistedState('homeState');

            if (sessionState) {
                console.log('Grabbing from sessionStorage');
                setState(sessionState);
                return;
            }
        }

        console.log('Grabbing from API');
        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm]);

    // Load More
    useEffect(() => {
        if (!IsLoadingMore) return;
        fetchMovies(State.page + 1, searchTerm);
        setIsLoadingMore(false);
    }, [IsLoadingMore, searchTerm, State.page])

    // Write to sessionStorage
    useEffect(() => {
        if(!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(State))
    }, [searchTerm, State]);

    return { State, Loading, Error, searchTerm, setSearchTerm, setIsLoadingMore };
};

export default useHomeFetch;