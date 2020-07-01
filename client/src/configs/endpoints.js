const host = process.env.REACT_APP_BASE_HOST;

export default Object.freeze({
    currentUser: `${host}/user`,
    dashboards: `${host}/dashboards`,
    signIn: `${host}/sign_in`,
    signOut: `${host}/sign_out`
});
