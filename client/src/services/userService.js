import get from 'lodash/get';
import requestService from './requestService';
import endPoints from '../configs/endpoints';

class UserService {
    /**
     * Request server current user logged in.
     */
    getCurrentUser = async () => {
        try {
            return get(
                await requestService.get(`${endPoints.currentUser}`),
                'data'
            );
        } catch (error) {
            throw error;
        }
    };

    authenticate = async ({ username, password }) => {
        try {
            const requestBody =
                `_submitted=1` +
                `&username=${username}` +
                `&password=${encodeURIComponent(password)}` +
                `&continue=` +
                `&p=account` +
                `&t=login` +
                `&persistent=` +
                `&message=` +
                `&_submit=Login`;

            const config = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            };

            const response = await requestService.post(endPoints.signIn, requestBody, config);
            return !response.data.includes('class="error"'); // authenticated = true

        } catch (err) {
            // This catch is needed because errors doesn't return in await
            return false;
        }
    };

    signOut = async () => {
        try {
            await requestService.get(endPoints.signOut);
        } catch (e) {
            throw e;
        }
    };
}

export default new UserService();
