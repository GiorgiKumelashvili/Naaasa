export default {
    texts: {
        access_token_expiration_txt: 'Token expired',
        refresh_token_expiration_txt: 'Refresh token expired',
    },

    cookies: {
        access_token: '_accessToken',
        refresh_token: '_refreshToken',
        identifier: '_identifier',
    },

    urls: {
        BASE_BACK_API_URL: `${process.env.VUE_APP_BACK_BASE_URL}api`,
        BASE_URL: process.env.VUE_APP_FRONT_BASE_URL.toString()
    },

    keys: {
        NASA_KEY: process.env.VUE_APP_NASA_KEY
    }
}
