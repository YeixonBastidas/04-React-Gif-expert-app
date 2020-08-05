import { useState, useEffect } from "react"
import { getGif } from '../helpers/getGif';

export const UseFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGif(category)
        .then(result => {
            setState({
                data : result,
                loading : false
            });
        });
    }, [category])

    return state;
}


