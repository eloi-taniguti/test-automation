import { CURRENT_USER_FETCHED, CURRENT_USER_SIGNED_OUT } from './actions';

const init = {
    currentUser: null
};

function user(state = init, action) {
    const { payload, type } = action;

    switch (type) {
        case CURRENT_USER_FETCHED: {
            const newState = {
                ...state,
                currentUser: payload
            };

            return newState;
        }
        case CURRENT_USER_SIGNED_OUT: {
            return {
                ...state,
                currentUser: null
            };
        }
        default: {
            return state;
        }
    }
}

export default user;
