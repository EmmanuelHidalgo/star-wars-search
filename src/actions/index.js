import {fetchCharactersService} from '../services/index';


export const fetchCharacters =  (term) => async dispatch  => {
    const response = await fetchCharactersService(term);
    dispatch({type: 'FETCH_CHARACTERS', payload: response.data.results});
};
