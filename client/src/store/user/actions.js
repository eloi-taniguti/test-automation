import UserService from '../../services/userService';

const CURRENT_USER_FETCHED = 'CURRENT_USER_FETCHED';
const CURRENT_USER_SIGNED_OUT = 'CURRENT_USER_SIGNED_OUT';

/**
 * Fetches current user logged in.
 * @param history an optional history object that'll be used to redirect
 * the user if it's successfully fetched.
 * @param initialPath the path the user will be redirected to
 */
function fetchCurrentUser(history = null, initialPath = '/') {
    return async dispatch => {
        const currentUser = await UserService.getCurrentUser();
        dispatch({ type: CURRENT_USER_FETCHED, payload: currentUser });

        if (history !== null) {
            history.push(initialPath);
        }
    };
}

function signOut(history = null, signInPath = '/sign_in?last_page=/') {
    return async dispatch => {
        try {
            await UserService.signOut();
            dispatch({ type: CURRENT_USER_SIGNED_OUT });

            if (history !== null) {
                history.push(signInPath);
            }
        } catch (e) {
            throw e;
        }
    };
}

export {
    CURRENT_USER_FETCHED,
    CURRENT_USER_SIGNED_OUT,
    signOut,
    fetchCurrentUser
};
