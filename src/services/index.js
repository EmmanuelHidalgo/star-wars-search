import starWarsApi from './starWarsApi';


export const fetchCharactersService = async (term) => {
    const url = `/people/?search=${term}`
    return await starWarsApi.get(url);
}