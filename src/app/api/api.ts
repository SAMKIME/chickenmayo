import axios from 'axios';
import * as Utils from "../containers/common/Utils";

export const apiAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});

function getAccessTokenHeader() {
    const auth = 'Bearer' + ` ` + localStorage.getItem('access_token');
    return { headers: { Authorization: auth } };
}

/**
 * default Api call function
 */
export const getUserInfo = async () => {
    try {
        return await apiAxios.get('/hello', getAccessTokenHeader());
    } catch (e) {
        Utils.moveLogin();
    }
};

export default {
    getUserInfo
}