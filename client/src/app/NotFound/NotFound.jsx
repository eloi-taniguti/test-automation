import React from 'react';
import classes from './NotFound.module.scss';
import i18n from '../../configs/i18n/i18n';

function NotFound() {
    return (
        <div className={classes.MainContainer}>
            <h1>{i18n.t('not_found.title')}</h1>
            <strong>{i18n.t('not_found.subtitle')}</strong>
        </div>
    );
}

export default NotFound;
