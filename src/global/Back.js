import Vue from 'vue';
import axios from 'axios';

// Base configs
const BASE_BACK_URL = process.env.VUE_APP_BACK_BASE_API_URL.toString();

class Back {
    static async Service(methodNum, data) {
        if (!methodNum || !Number.isInteger(methodNum)) {
            throw new Error("[GIO] Method Number is either not number or anything at all")
        }

        data['identifier'] = Vue.$cookies.get('_identifier');

        // Return new Promise
        return axios({
            method: 'post',
            url: `${BASE_BACK_URL}/${methodNum}`,
            data: JSON.stringify(data)
        })
            .then(response => response.data)
            .catch(error => error);
    }

    static async Auth(url, data) {
        if (!url || typeof url !== 'string') {
            throw new Error("[GIO] Url is incorrect (not string) or doesnt exist")
        }

        // Return new Promise
        return axios({
            method: 'post',
            url: `${BASE_BACK_URL}/${url}`,
            data: JSON.stringify(data)
        })
            .then(response => response)
            .catch(error => error);
    }

    static generateToken() {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Vue.$cookies.get('_refreshToken')}`
        };

        const data = {
            data: "refreshToken"
        }

        return axios({
            method: 'post',
            url: `${BASE_BACK_URL}/refreshtoken`,
            data: JSON.stringify(data),
            headers: headers
        })
        .then(response => response)
        .catch(error => error);
    }
}

export default Back;
