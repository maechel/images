import qs from 'qs';
import axios from 'axios';
import keys from '../../config/keys';

const ROOT_URL = 'https://api.imgur.com';

export default {
    login() {
        const querystring = {
            client_id: keys.clientId,
            response_type: 'token'
        };
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    },

    fetchImages(token) {
        axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
}