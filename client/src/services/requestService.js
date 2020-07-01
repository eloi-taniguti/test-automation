import axios from 'axios';
import { message } from 'antd';

import HttpErrors from '../configs/httpErrors';

/**
 * Service responsible to make all requests to server.
 *
 * It is an axios object with some default values set.
 */
const instance = axios.create();

instance.defaults.withCredentials = true; // enable axios post cookie

// Generic error handler
instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error && error.response) {
            let err;
            switch (error.response.status) {
                case HttpErrors.UNAUTHENTICATED:
                    if (!window.location.href.includes('/sign_in')) {
                        const route = window.location.hash.slice(1);
                        window.location = `#/sign_in?last_page=${route}`;
                    }
                    break;
                case HttpErrors.FORBIDDEN:
                case HttpErrors.NOT_FOUND:
                    window.location = '#/not_found';
                    break;
                case HttpErrors.SERVER_ERROR:
                case HttpErrors.BAD_REQUEST:
                default:
                    err =
                        error.response.data.details ||
                        error.response.data.title;
                    message.error(err);
                    break;
            }
        }

        return Promise.reject(error);
    }
);

/**
 * Return an axios object to make all request with configured headers.
 */
export default instance;
