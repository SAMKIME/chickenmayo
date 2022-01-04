import axios from 'axios';

export const apiAxios = axios.create({
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});

function baseApi(apiUrl?: string) {
    apiAxios.defaults.baseURL = apiUrl;
    return apiAxios;
}

// function getAccessTokenHeader() {
//     let auth = LocalStorage.getStorage(LocalStorage.AUTHORIZATION);
//     return {headers: {'Authorization': auth ? auth : ""}}
// }

/**
 * default Api call function
 */
// export function userInfo() {
//     return new Promise((resolve, reject) => {
//             return baseApi(apiPrefix).get('/user', getAccessTokenHeader())
//                 .then((response) => {
//                     successStatusCheck(response, resolve)
//                 }).catch(err => {
//                     failStatusCheck(err, reject)
//                 });
//         }
//     )
// }