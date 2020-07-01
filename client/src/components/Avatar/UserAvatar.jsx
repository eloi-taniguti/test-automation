import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';

import classes from './UserAvatar.module.scss';

const nameSeparator = ' ';
const whiteSpaceRegexp = /\s+/;

function UserAvatar({ name, photo }) {
    if (name.replace(whiteSpaceRegexp, '').length === 0) {
        return null;
    }

    let avatar = null;

    if (photo.length > 0) {
        avatar = <Avatar src={photo} />;
    } else {
        const splitNames = name.trim().split(nameSeparator);

        const initials =
            splitNames.length > 1
                ? `${splitNames[0][0].toUpperCase()}${splitNames[1][0].toUpperCase()}`
                : splitNames[0][0].toUpperCase();

        avatar = <Avatar className={classes.Initials}>{initials}</Avatar>;
    }

    return <div data-cy="userAvatar" className={classes.Avatar}>{avatar}</div>;
}

UserAvatar.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string
};

UserAvatar.defaultProps = {
    photo: ''
};

export default UserAvatar;
