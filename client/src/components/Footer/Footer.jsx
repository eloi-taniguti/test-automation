import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import classes from './Footer.module.scss';
import i18n from '../../configs/i18n/i18n';

import logo from '../../assets/img/venturus_logo_footer.png';

const mailInfo = `mailto:${i18n.t('general.email_support')}`;

const year = moment()
    .utc()
    .year();

function Footer({ version }) {
    return (
        <footer className={classes.Footer}>
            <span>
                <span data-cy="footerVersion">{version}</span>
                <span> | </span>
                <a data-cy="mailInfo" href={mailInfo}>
                    {i18n.t('footer.support')}
                </a>
            </span>

            <span data-cy="footerMsg">{i18n.t('footer.main', { year })}</span>

            <div>
                <img src={logo} alt="logo" className={classes.Logo}/>
                <a
                    href="https://venturus.org.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {i18n.t('footer.venturus')}
                </a>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    version: PropTypes.string.isRequired
};

export default Footer;
