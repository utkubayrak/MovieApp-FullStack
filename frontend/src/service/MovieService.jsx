import axios from "axios";

const MOVIE_URL = "http://localhost:2222/api/movies"
const getCookie = (name) => {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName)) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
};
const token = getCookie('token');

export const addMovieService = async (movieData) => {
    console.log(movieData);
    const response = await axios.post(`${MOVIE_URL}/add`, movieData, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response;
}

export const deleteMovieService = async (id) => {
    console.log(id);
    const response = await axios.delete(`${MOVIE_URL}/delete/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response;
}

export const allMoviesService = async () => {
    const response = await axios.get(`${MOVIE_URL}/infolist`);
    return response;
};
// export const allMoviesService = async () => {
//     const response = await axios.get(`${MOVIE_URL}/infolist`, {
//         headers: {
//             'Authorization': `Bearer ${token}`
//         }
//     }

//     );
//     return response;
// };

export const movieServiceByGenre = async (name) => {
    console.log(name);
    const response = await axios.get(`${MOVIE_URL}/byGenre/${name}`);
    return response;
}
export const findByMovie = async (id) => {
    try {
        const response = await axios.get(`${MOVIE_URL}/details/${id}`);

        if (!response.data) {
            throw new Error("Veri bulunamadı veya boş.");
        }

        return response;
    } catch (error) {
        throw error; // Yakalanan hatayı yeniden fırlat
    }
};